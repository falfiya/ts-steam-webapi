import {steam_id} from "../shared/steam_id";
import {o_game_name} from "./o_game_name";

export type o_player_stats_base<achievement_t> =
   & o_game_name
   & {steamID: steam_id; achievements: achievement_t[]};
