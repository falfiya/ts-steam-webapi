import {o_has_player_stats} from "../o_has_player_stats";
import {o_player_stats_base} from "../o_player_stats_base";
import {user_achievement_unlock} from "./user_achievement_unlock";

export type GetPlayerAchievements_response_ok =
   & o_player_stats_base<user_achievement_unlock>
   & {success: true};

type err = {
   error: string;
   success: false;
};

type res = GetPlayerAchievements_response_ok | err;

/** This is roughly the same shape as GetUserStatsForGame_response */
export type GetPlayerAchievements_response = o_has_player_stats<res>;

export const GetPlayerAchievements_is_err = (res: res): res is err => !res.success;
