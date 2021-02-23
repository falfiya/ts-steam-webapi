import {app_id} from "../../shared/app_id";
import {app_image_id} from "../../shared/app_image_id";
import {game_achievement} from "./game_achievement";

export type o_game_achievements = {
   achievements: game_achievement<app_id, app_image_id, app_image_id>[]
};
