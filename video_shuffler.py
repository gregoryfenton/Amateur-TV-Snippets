import obspython as obs
import os
import random

# --- Globals ---
source_directory = "/home/greg/Documents/My BATC Stream/videos/fullscreen_1080p"
video_sources = ["Video_Source_A", "Video_Source_B"]
current_source_index = 0
video_files = []
last_video = ""
hotkey_id = obs.OBS_INVALID_HOTKEY_ID

def update_video_list():
    global video_files, last_video
    if not os.path.isdir(source_directory): return
    files = [os.path.join(source_directory, f) for f in os.listdir(source_directory) 
             if f.lower().endswith(('.mp4', '.mkv', '.mov', '.avi'))]
    if len(files) < 2:
        video_files = files
        return
    random.shuffle(files)
    if files[0] == last_video:
        files.append(files.pop(0))
    video_files = files

def play_next_video(pressed=True):
    if not pressed: return
    global video_files, last_video, current_source_index
    
    if not video_files: update_video_list()
    
    if video_files:
        next_path = video_files.pop(0)
        last_video = next_path
        
        # Switch to the OTHER source
        current_source_index = 1 - current_source_index
        target_source = video_sources[current_source_index]
        
        source = obs.obs_get_source_by_name(target_source)
        if source:
            settings = obs.obs_data_create()
            obs.obs_data_set_string(settings, "local_file", next_path)
            obs.obs_source_update(source, settings)
            obs.obs_data_release(settings)
            obs.obs_source_release(source)
            obs.script_log(obs.LOG_INFO, f"Loaded {next_path} into {target_source}")

# --- OBS Integration (Same as before) ---
def script_description(): return "Dual-source shuffler for gapless playback."
def script_load(settings):
    global hotkey_id
    hotkey_id = obs.obs_hotkey_register_frontend("next_video_hotkey", "Trigger Next Video", play_next_video)
def script_update(settings):
    global source_directory
    source_directory = obs.obs_data_get_string(settings, "folder")
def script_properties():
    props = obs.obs_properties_create()
    obs.obs_properties_add_path(props, "folder", "Video Folder", obs.OBS_PATH_DIRECTORY, "", None)
    return props
