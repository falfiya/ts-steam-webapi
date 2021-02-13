import {steam_id} from "../../api/steam_id";
import {achievement_unlock} from "./achievement_unlock";

export type player_stats_success = {
   steamID: steam_id;
   gameName: string;
   achievements: achievement_unlock[];
   success: true;
};

export type player_stats_error = {
   error: string;
   success: false;
};
