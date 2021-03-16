import { steam_id } from "../../shared/steam_id";
import { user_achievement_unlock } from "./user_achievement_unlock";
declare type ok = {
    gameName: string;
    steamID: steam_id;
    achievements: user_achievement_unlock[];
    success: true;
};
declare type err = {
    error: string;
    success: false;
};
export declare type res = {
    playerstats: ok | err;
};
export declare const is_err: (res: ok | err) => res is err;
export {};
