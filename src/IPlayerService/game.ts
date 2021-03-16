import {app_id} from "../shared/app_id";
import {minutes} from "../core/minutes";
import {app_image_id} from "../shared/app_image_id";

/**
 * For whatever reason, platform specific playtimes may not be accurate.
 * `playtime_forever` does not always equal
 * `playtime_windows_forever + playtime_mac_forever + playtime_linux_forever`.
 * It's best to only use `playtime_forever`.
 */
export type game_base = {
   appid: app_id;
   playtime_forever:         minutes;
   /** May not be accurate */
   playtime_windows_forever: minutes;
   /** May not be accurate */
   playtime_mac_forever:     minutes;
   /** May not be accurate */
   playtime_linux_forever:   minutes;
};

export type game = game_base & {
   name: string;
   playtime_2weeks: minutes;
   img_icon_url: app_image_id;
   img_logo_url: app_image_id;
};
