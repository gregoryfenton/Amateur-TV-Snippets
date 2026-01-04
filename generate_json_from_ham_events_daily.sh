#!/bin/bash

# Input file (your text file)
input_file="ham_events_daily.txt"
# Output file changed to .js
output_file="ham_history.js"

# Start the file with a JavaScript variable declaration
echo "const historyData = [" > "$output_file"

current_month_day=""
first_entry=true

while IFS= read -r line || [[ -n "$line" ]]; do
    line=$(echo "$line" | tr -d '\r')
    [[ -z "$line" ]] && continue

    if [[ "$line" =~ ^(January|February|March|April|May|June|July|August|September|October|November|December)\ [0-9]+ ]]; then
        current_month_day="$line"
        continue
    fi

    if [[ "$line" =~ ^([0-9]{4}):\ (.*) ]]; then
        year="${BASH_REMATCH[1]}"
        # Escape double quotes in the message for valid JS string
        message=$(echo "${BASH_REMATCH[2]}" | sed 's/"/\\"/g')

        if [ "$first_entry" = true ]; then
            first_entry=false
        else
            echo "," >> "$output_file"
        fi

        day=$(echo $current_month_day | awk '{print $2}')
        month=$(echo $current_month_day | awk '{print $1}')

        printf '  {\n    "date": "%s %s %s",\n    "message": "%s"\n  }' \
            "$day" "$month" "$year" "$message" >> "$output_file"
    fi
done < "$input_file"

echo -e "\n];" >> "$output_file"

echo "Done! JS data saved to $output_file"