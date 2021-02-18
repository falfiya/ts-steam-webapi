import {owned_game} from "./owned_game";

import {o_playtime2} from "../o_playtime2";
import {o_name} from "../o_name";
import {o_app_image_icon_ids} from "../o_icon_image_ids";
import {o_stat_visibility} from "../o_stat_visibility";

/** Full information about an owned game */
export type owned_game_ex =
   & owned_game
   & o_name
   & o_playtime2
   & o_app_image_icon_ids
   & o_stat_visibility;
