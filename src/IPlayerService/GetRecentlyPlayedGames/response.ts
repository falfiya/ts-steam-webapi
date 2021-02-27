import {o_response} from "../../shared/o_response";
import {o_recent_games} from "./o_recent_games";
import {o_total_count} from "./o_total_count";

export type GetRecentlyPlayedGames_response = o_response<
   & o_recent_games
   & o_total_count
>;
