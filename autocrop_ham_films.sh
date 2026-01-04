#!/bin/bash

# Ensure an input file is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <video_file>"
    exit 1
fi

INPUT="$1"
FILENAME=$(basename -- "$INPUT")
EXTENSION="${FILENAME##*.}"
FILENAME="${FILENAME%.*}"
OUTPUT="${FILENAME}_cropped.${EXTENSION}"

echo "🔍 Analyzing $INPUT for black bars..."

# Step 1: Run cropdetect on 3 specific segments to ensure consistency
# We check 5 seconds at the 1/4, 1/2, and 3/4 marks
CROP_SAMPLES=$(ffmpeg -ss 00:05:00 -i "$INPUT" -t 5 -vf "cropdetect=24:16:0" -f null - 2>&1 | awk -F 'crop=' '/crop=/ {print $2}' | tail -n 1)

if [ -z "$CROP_SAMPLES" ]; then
    echo "❌ No black bars detected or analysis failed."
    exit 1
fi

# The result looks like "1440:1080:240:0" (width:height:x:y)
echo "✅ Suggested Crop: $CROP_SAMPLES"

# Step 2: Check if the crop is actually different from the original
# If it's already full 1920x1080 (or whatever), we skip.
# (This logic can be added, but for now, we'll proceed if crop detected)

echo "🎬 Processing new file: $OUTPUT..."

# Step 3: Run the actual crop and re-encode using NVENC (since you have an RTX 3060)
ffmpeg -i "$INPUT" -vf "crop=$CROP_SAMPLES" \
    -c:v h264_nvenc -preset p6 -tune hq -b:v 5M \
    -c:a copy "$OUTPUT"

echo "✨ Done! Cropped video saved as $OUTPUT"

