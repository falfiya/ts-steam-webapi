import {o_game_achievements} from "./o_game_achievements";
import {o_game_stats} from "./o_game_stats";

export type o_avail_stats = {
   availableGameStats: o_game_achievements & o_game_stats;
};
