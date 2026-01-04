#!/bin/bash

# Check if bc is installed
if ! command -v bc &> /dev/null; then
    echo "Error: 'bc' is not installed. Run: sudo apt install bc"
    exit 1
fi

INPUT="$1"
if [ -z "$INPUT" ]; then echo "Usage: ./autocrop.sh file.mp4"; exit 1; fi

FILENAME=$(basename -- "$INPUT")
EXTENSION="${FILENAME##*.}"
BASENAME="${FILENAME%.*}"
OUTPUT="${BASENAME}_cropped.${EXTENSION}"

# 1. Get original dimensions
WIDTH=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 "$INPUT")
HEIGHT=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of default=noprint_wrappers=1:nokey=1 "$INPUT")

echo "Targeting: $FILENAME ($WIDTH x $HEIGHT)"

# 2. Multi-point Analysis (check at 10%, 25%, and 50% of the video)
DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$INPUT")
CHECK_POINTS=( $(echo "$DURATION * 0.1" | bc) $(echo "$DURATION * 0.25" | bc) $(echo "$DURATION * 0.5" | bc) )

BEST_CROP=""
MIN_W=$WIDTH

echo "Analyzing multiple segments for pillarboxes..."
for SS in "${CHECK_POINTS[@]}"; do
    # Get crop for 2 seconds at this timestamp
    DATA=$(ffmpeg -ss "$SS" -i "$INPUT" -t 2 -vf "cropdetect=limit=32:round=16" -f null - 2>&1 | awk -F "crop=" '/crop=/ {print $2}' | tail -1)
    CUR_W=$(echo "$DATA" | cut -d: -f1)
    
    if [ ! -z "$CUR_W" ] && [ "$CUR_W" -lt "$MIN_W" ]; then
        MIN_W=$CUR_W
        BEST_CROP=$DATA
    fi
done

if [ -z "$BEST_CROP" ]; then echo "Detection failed."; exit 1; fi

# 3. Apply the 25% Rule Logic (Using bc for floating point comparison)
DETECTED_W=$(echo "$BEST_CROP" | cut -d: -f1)
EXPECTED_43_W=$(echo "$HEIGHT * 4 / 3" | bc)
TOTAL_EXPECTED_BARS=$(echo "$WIDTH - $EXPECTED_43_W" | bc)
THRESHOLD_BARS=$(echo "$TOTAL_EXPECTED_BARS * 0.25" | bc)
ACTUAL_BARS_DETECTED=$(echo "$WIDTH - $DETECTED_W" | bc)

echo "Narrowest width found: $DETECTED_W (Threshold requires > $THRESHOLD_BARS px of bars)"

# Use bc to handle the decimal comparison
SHOULD_CROP=$(echo "$ACTUAL_BARS_DETECTED >= $THRESHOLD_BARS" | bc -l)

# 4. Dry Run / Execution
if [ "$SHOULD_CROP" -eq 1 ]; then
    echo "SUCCESS: Bars detected ($ACTUAL_BARS_DETECTED px). Meets safety threshold."
    echo "Proposed: ffmpeg -i \"$INPUT\" -vf \"crop=$BEST_CROP\" -c:v h264_nvenc -preset p4 -cq 20 ..."
    
    read -p "Execute NVENC crop? (y/n) " resp
    if [ "$resp" = "y" ]; then
        ffmpeg -i "$INPUT" -vf "crop=$BEST_CROP" \
               -c:v h264_nvenc -preset p4 -cq 20 -c:a copy "$OUTPUT"
        echo "Created: $OUTPUT"
    fi
else
    echo "ABORT: Insufficient bars detected. Video is likely already full-width or uses a different ratio."
fi
