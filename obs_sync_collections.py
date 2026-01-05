import obspython as obs
import datetime

# --- SETTINGS ---
HOTKEY_NAME = "Manual_BATC_Sync_Hotkey"
HOTKEY_DESC = "!!! FORCE BATC SYNC !!!"
PROFILE_PREFIX = "BATC_"
COLLECTION_PREFIX = "SC_"
DEFAULT_SCENE = "Main scene"

# --- GLOBALS ---
hotkey_id = obs.OBS_INVALID_HOTKEY_ID

def log(msg):
    timestamp = datetime.datetime.now().strftime("%H:%M:%S.%f")[:-3]
    print(f"[DEBUG][{timestamp}] {msg}")

def get_target_name(profile_name):
    if profile_name and profile_name.startswith(PROFILE_PREFIX):
        return f"{COLLECTION_PREFIX}{profile_name}"
    return None

def force_sync_logic():
    log("="*60)
    log("HOTKEY TRIGGERED: BEGINNING SYNC SEQUENCE")
    
    # Check Profile
    p_name = obs.obs_frontend_get_current_profile()
    log(f"PHASE 1 (Profile): Detected '{p_name}'")
    
    # Check Collection
    c_name = obs.obs_frontend_get_current_scene_collection()
    log(f"PHASE 2 (Collection): Detected '{c_name}'")
    
    # Calculate Target
    target = get_target_name(p_name)
    log(f"PHASE 3 (Calculation): Target determined as '{target}'")
    
    if not target:
        log("CRITICAL: Target calculation failed. Profile prefix mismatch?")
        log("="*60)
        return

    if c_name == target:
        log("STABILITY: Collection already matches profile. No switch required.")
    else:
        log(f"ACTION: Issuing frontend switch command to '{target}'")
        log("WARNING: System may hang or reload now...")
        obs.obs_frontend_set_current_scene_collection(target)
        # Note: Code after this point may not execute if OBS unloads the script immediately
        log("DEBUG: Post-switch command line reached (rare).")
    
    log("="*60)

def hotkey_callback(pressed):
    if pressed:
        log("EVENT: Hotkey interaction detected (PRESSED).")
        force_sync_logic()

# --- OBS LIFECYCLE ---

def script_description():
    return "The Ultimate Debug Syncer.\n\nLogs EVERYTHING. Manual hotkey trigger for collection swaps."

def script_load(settings):
    global hotkey_id
    log("LIFECYCLE: script_load() started.")
    
    # Registering
    hotkey_id = obs.obs_hotkey_register_frontend(HOTKEY_NAME, HOTKEY_DESC, hotkey_callback)
    log(f"REGISTRY: Hotkey '{HOTKEY_NAME}' registered.")

    # Loading Data
    data = obs.obs_data_get_array(settings, HOTKEY_NAME)
    obs.obs_hotkey_load(hotkey_id, data)
    obs.obs_data_array_release(data)
    log("DATA: Hotkey settings loaded from persistent storage.")

    # Scene Verification
    current_scene_src = obs.obs_frontend_get_current_scene()
    if current_scene_src:
        name = obs.obs_source_get_name(current_scene_src)
        log(f"INIT: Current active scene is '{name}'")
        obs.obs_source_release(current_scene_src)
    
    log("LIFECYCLE: script_load() complete. System Idle.")

def script_save(settings):
    global hotkey_id
    log("LIFECYCLE: script_save() triggered by OBS.")
    
    data = obs.obs_hotkey_save(hotkey_id)
    obs.obs_data_set_array(settings, HOTKEY_NAME, data)
    obs.obs_data_array_release(data)
    log("DATA: Hotkey settings successfully committed to config.")

def script_unload():
    log("LIFECYCLE: script_unload() triggered. Script is being destroyed.")
