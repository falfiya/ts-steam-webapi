import {o_response} from "../../shared/o_response";
import {uint} from "../../core/data_types";
import {recently_played_game} from "./recently_played_game";

type res = o_response<{
   total_count: uint;
   games: recently_played_game[];
}>;

export = res;
