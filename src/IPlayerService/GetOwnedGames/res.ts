import {uint} from "../../core/data_types";
import {o_response} from "../../shared/o_response";
import {owned_game} from "./owned_game";
import {owned_game_ex} from "./owned_game_ex";

type res = o_response<{
   game_count: uint;
   /**
    * Depending on the parameters in the API call, more fields will be added to
    * the objects within the `games` array.
    */
   games: (owned_game | owned_game_ex)[]
}>;

export = res;
