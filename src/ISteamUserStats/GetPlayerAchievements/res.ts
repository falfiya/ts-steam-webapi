import {steam_id} from "../../shared/steam_id";
import {user_achievement_unlock} from "./user_achievement_unlock";

type player_stats = {
   gameName: string;
   steamID: steam_id;
   achievements: user_achievement_unlock[];
   success: true;
};

type err = {
   error: string;
   success: false;
};

export type res = {playerstats: player_stats | err};

export const is_err = (res: player_stats | err): res is err => !res.success;
