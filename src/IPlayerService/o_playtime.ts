import {minutes} from "../core/minutes";

/**
 * For whatever reason, platform specific playtimes may not be accurate.
 * `playtime_forever` does not always equal
 * `playtime_windows_forever + playtime_mac_forever + playtime_linux_forever`.
 * It's best to only use `playtime_forever`.
 */
export type o_playtime = {
   playtime_forever:         minutes;
   /** May not be accurate */
   playtime_windows_forever: minutes;
   /** May not be accurate */
   playtime_mac_forever:     minutes;
   /** May not be accurate */
   playtime_linux_forever:   minutes;
};
