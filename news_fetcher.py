import obspython as obs
import urllib.request
import xml.etree.ElementTree as ET
import os

# --- Configuration ---
url = "https://daily.hamweekly.com/atom.xml"
interval = 30  # Minutes between updates
# The file will be created in the same folder as this script
file_path = os.path.join(os.path.dirname(__file__), "message.txt")

def fetch_ham_news():
    print(f"Fetching news from {url}...")
    try:
        # Fetch the XML data
        with urllib.request.urlopen(url) as response:
            xml_data = response.read()
        
        # Parse the Atom feed (XML)
        root = ET.fromstring(xml_data)
        # Atom feeds use namespaces, so we define it here
        ns = {'atom': 'http://www.w3.org/2005/Atom'}
        
        entries = root.findall('atom:entry', ns)
        headlines = []

        # Get the top 5 headlines
        for entry in entries[:5]:
            title = entry.find('atom:title', ns).text.strip()
            headlines.append(f"~~n~~{title}")

        # Format for your ticker
        separator = " ~~c~~| "
        ticker_text = f"~~c~~LATEST AMATEUR RADIO NEWS: {separator.join(headlines)} ~~c~~| "

        # Write to file
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(ticker_text)
        
        print(f"Successfully updated {file_path}")

    except Exception as e:
        print(f"Error fetching ham news: {e}")

# --- OBS Scripting Setup ---

def script_description():
    return "Automatically fetches headlines from Amateur Radio Daily and writes them to message.txt for your ticker."

def script_load(settings):
    # Fetch immediately on load
    fetch_ham_news()
    # Then set a timer (minutes * 60 * 1000 for milliseconds)
    obs.timer_add(fetch_ham_news, interval * 60 * 1000)

def script_unload():
    obs.timer_remove(fetch_ham_news)
