import {steam_id} from "../../shared/steam_id";
import {user_achievement_unlock} from "./user_achievement_unlock";

type ok = {
   gameName: string;
   steamID: steam_id;
   achievements: user_achievement_unlock[];
   success: true;
};

type err = {
   error: string;
   success: false;
};

export type res = {playerstats: ok | err};

export const is_err = (res: ok | err): res is err => !res.success;
