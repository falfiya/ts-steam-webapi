import {o_response} from "../../shared/o_response";
import {owned_game} from "./owned_game";
import {owned_game_ex} from "./owned_game_ex";
import {o_owned_games} from "./o_owned_games";
import {o_game_count} from "./o_game_count";

export type GetOwnedGames_response = o_response<
   & o_game_count
   & o_owned_games<owned_game | owned_game_ex>
>;
