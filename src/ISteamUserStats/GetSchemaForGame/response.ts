import {o_game_name} from "../o_game_name";
import {o_avail_stats} from "./o_avail_stats";
import {o_game_version} from "./o_game_version";

export type GetSchemaForGame_response = {
   game: o_game_name & o_game_version & o_avail_stats;
};
