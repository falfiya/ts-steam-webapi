import {o_has_player_stats} from "../o_has_player_stats";
import {player_stats_pa} from "./player_stats_pa";

/** This is roughly the same shape as GetUserStatsForGame_response */
export type GetPlayerAchievements_response =
   o_has_player_stats<player_stats_pa>;
