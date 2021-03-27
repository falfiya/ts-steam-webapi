import { steam_id } from "../../shared/steam_id";
import { user_achievement_unlock } from "./user_achievement_unlock";
declare type player_stats = {
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
    playerstats: player_stats | err;
};
export declare const is_err: (res: player_stats | err) => res is err;
export {};
