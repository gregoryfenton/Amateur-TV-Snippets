#!/bin/bash

# Usage: ./ham_crop_check.sh [-d|--dry-run] <video_file>

DRY_RUN=false
if [[ "$1" == "-d" || "$1" == "--dry-run" ]]; then
    DRY_RUN=true
    shift
fi

INPUT="$1"
if [[ ! -f "$INPUT" ]]; then
    echo "Usage: $0 [--dry-run] <video_file>"
    exit 1
fi

# Step 1: Get original dimensions and duration using ffprobe
INFO=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration -of csv=p=0 "$INPUT")
ORIG_W=$(echo $INFO | cut -d',' -f1)
ORIG_H=$(echo $INFO | cut -d',' -f2)
DURATION=$(echo $INFO | cut -d',' -f3 | cut -d'.' -f1)

echo "🎞️  Original: ${ORIG_W}x${ORIG_H} | Duration: ${DURATION}s"

# Step 2: Calculate 3 sampling points (25%, 50%, 75%)
P1=$((DURATION / 4))
P2=$((DURATION / 2))
P3=$((DURATION * 3 / 4))

# Step 3: Run cropdetect at each point
# cropdetect=limit:round:reset (24:16:0)
get_crop() {
    ffmpeg -ss "$1" -i "$INPUT" -vframes 10 -vf "cropdetect=24:16:0" -f null - 2>&1 | \
    awk -F 'crop=' '/crop=/ {print $2}' | tail -n 1
}

C1=$(get_crop $P1)
C2=$(get_crop $P2)
C3=$(get_crop $P3)

echo "🔍 Sampling: P1($P1s):$C1 | P2($P2s):$C2 | P3($P3s):$C3"

# Step 4: Consistency Check
if [[ "$C1" == "$C2" && "$C2" == "$C3" ]]; then
    NEW_W=$(echo $C1 | cut -d':' -f1)
    NEW_H=$(echo $C1 | cut -d':' -f2)

    if [[ "$NEW_W" -lt "$ORIG_W" || "$NEW_H" -lt "$ORIG_H" ]]; then
        FFMPEG_CMD="ffmpeg -i \"$INPUT\" -vf \"crop=$C1\" -c:v h264_nvenc -preset p6 -rc vbr -cq 28 -b:v 0 -c:a copy \"${INPUT%.*}_cropped.mp4\""
        
        if [ "$DRY_RUN" = true ]; then
            echo -e "\n📝 DRY RUN: Consistency found! Would run:"
            echo "$FFMPEG_CMD"
        else
            echo -e "\n🚀 Starting encode for $INPUT..."
            eval "$FFMPEG_CMD"
        fi
    else
        echo "✅ No bars detected (already full frame)."
    fi
else
    echo "⚠️  Inconsistent crop values found. This might be a mixed aspect ratio film. Skipping auto-crop."
fi

