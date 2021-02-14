import {steam_id} from "../../api/steam_id";
import {o_game_name} from "../o_game_name";
import {achievement_unlock} from "./achievement_unlock";

export type player_stats_success = o_game_name & {
   steamID: steam_id;
   achievements: achievement_unlock[];
   success: true;
};

export type player_stats_error = {
   error: string;
   success: false;
};

export type player_stats = player_stats_success | player_stats_error;
