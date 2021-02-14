import {o_has_player_stats} from "../o_has_player_stats";
import {player_stats_usfg} from "./player_stats_usfg";

export type GetUserStatsForGame_response = o_has_player_stats<player_stats_usfg>;
