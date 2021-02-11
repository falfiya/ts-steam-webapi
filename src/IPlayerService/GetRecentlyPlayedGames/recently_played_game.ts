import {o_app_id} from "../o_app_id";
import {o_name} from "../o_name";
import {o_playtime2} from "../o_playtime2";
import {o_playtime} from "../o_playtime";
import {o_image_ids} from "../o_image_ids";

export type recently_played_game
   = o_app_id
   & o_name
   & o_playtime2
   & o_playtime
   & o_image_ids;
