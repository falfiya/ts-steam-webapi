import {o_player_stats_base} from "../o_player_stats_base";
import {user_achievement_unlock} from "./user_achievement_unlock";

export type player_stats_pa_success =
   & o_player_stats_base<user_achievement_unlock>
   & {success: true};

export type player_stats_pa_error = {
   error: string;
   success: false;
};

/** Player Stats for Get[P]layer[A]chievements */
export type player_stats_pa =
   | player_stats_pa_success
   | player_stats_pa_error;
