#!/bin/bash

# --- CONFIGURATION ---
TARGET_I="-14"
LIMIT="32"
ROUND="16"
OUT_DIR="./fullscreen_1080p"
mkdir -p "$OUT_DIR"

# Logic to manage parallel jobs (3 for 4K files, 8 for others)
get_jobs() {
    local W=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 "$1")
    if [ "$W" -ge 3000 ]; then echo 3; else echo 8; fi
}

process_movie() {
    local INPUT="$1"
    local FILENAME=$(basename -- "$INPUT")
    local OUTPUT="$OUT_DIR/${FILENAME%.*}_16x9.mp4"

    # 1. GET METADATA
    WIDTH=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 "$INPUT")
    HEIGHT=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of default=noprint_wrappers=1:nokey=1 "$INPUT")
    
    # 2. CROP DETECTION (Checking 15% in)
    DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$INPUT")
    CHECK_TIME=$(echo "$DURATION * 0.15" | bc)
    CROP_DATA=$(ffmpeg -hwaccel cuda -i "$INPUT" -ss "$CHECK_TIME" -t 3 -vf "cropdetect=limit=$LIMIT:round=$ROUND" -f null - 2>&1 | awk -F "crop=" '/crop=/ {print $2}' | tail -1)
    
    # 3. 25% RULE MATH
    DET_W=$(echo "$CROP_DATA" | cut -d: -f1)
    EXPECTED_43_W=$(echo "($HEIGHT * 4 / 3) / 1" | bc)
    THRESHOLD=$(echo "($WIDTH - $EXPECTED_43_W) * 0.25" | bc)
    ACTUAL_BARS=$(echo "$WIDTH - $DET_W" | bc)

    # 4. DEFINE THE STRETCH FILTER
    if (( $(echo "$ACTUAL_BARS >= $THRESHOLD" | bc -l) )); then
        V_FILTER="crop=$CROP_DATA,scale=1920:1080,setdar=16/9"
    else
        V_FILTER="scale=1920:1080,setdar=16/9"
    fi

    # 5. AUDIO MEASURE (Pass 1)
    echo "Measuring audio for $FILENAME..."
    MEASURE=$(ffmpeg -i "$INPUT" -af "loudnorm=I=$TARGET_I:print_format=json" -f null - 2>&1)

    # Improved robust parsing using sed
    MI=$(echo "$MEASURE" | sed -n 's/.*"input_i" : "\([^"]*\)".*/\1/p')
    ML=$(echo "$MEASURE" | sed -n 's/.*"input_lra" : "\([^"]*\)".*/\1/p')
    MT=$(echo "$MEASURE" | sed -n 's/.*"input_tp" : "\([^"]*\)".*/\1/p')
    MTH=$(echo "$MEASURE" | sed -n 's/.*"input_thresh" : "\([^"]*\)".*/\1/p')
    MO=$(echo "$MEASURE" | sed -n 's/.*"target_offset" : "\([^"]*\)".*/\1/p')

    # Quick check: if MI is still empty, the measure pass failed
    if [ -z "$MI" ]; then
        echo "[ERROR] Audio measurement failed for $FILENAME. Skipping."
        return
    fi


    # 6. FINAL NVENC ENCODE
    ffmpeg -y -nostdin -hwaccel cuda -hwaccel_output_format cuda \
           -i "$INPUT" \
           -vf "hwdownload,format=nv12,$V_FILTER" \
           -af "loudnorm=I=$TARGET_I:measured_i=$MI:measured_lra=$ML:measured_tp=$MT:measured_thresh=$MTH:offset=$MO:linear=true" \
           -c:v h264_nvenc -preset p4 -cq 22 -c:a aac -b:a 192k \
           "$OUTPUT" -hide_banner -loglevel error

    echo "[STRETCHED TO 16:9] $FILENAME -> $OUTPUT"
}

export -f process_movie

# --- MAIN LOOP ---
for file in *.mp4 *.mkv *.mov; do
    # Skip if file doesn't exist
    [ -e "$file" ] || continue

    # SKIP LOGIC: Ignore already processed files
    if [[ "$file" == *"_cropped"* ]] || [[ "$file" == *"_16x9"* ]]; then
        echo "[SKIPPING] Already processed: $file"
        continue
    fi

    # Check if target output already exists in the destination folder
    TARGET_OUT="$OUT_DIR/${file%.*}_16x9.mp4"
    if [ -f "$TARGET_OUT" ]; then
        echo "[SKIPPING] Output already exists: $TARGET_OUT"
        continue
    fi
    
    JOBS=$(get_jobs "$file")
    process_movie "$file" &
    
    # Staggered start to keep the desktop smooth
    sleep 3 

    # Wait if we hit the limit
    while [[ $(jobs -r -p | wc -l) -ge $JOBS ]]; do
        sleep 1
    done
done

wait
echo "Standardization complete. Check the $OUT_DIR folder."

