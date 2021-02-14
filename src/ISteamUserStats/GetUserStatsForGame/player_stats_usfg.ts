import {o_player_stats_base} from "../o_player_stats_base";
import {user_achievement} from "./user_achievement";
import {o_user_stats} from "./o_user_stats";

export type player_stats_usfg =
   & o_player_stats_base<user_achievement>
   & o_user_stats;
