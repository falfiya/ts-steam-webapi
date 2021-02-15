import {uint} from "../../core/numerals";
import {recently_played_game} from "./recently_played_game";

export type GetRecentlyPlayedGames_response = {
   /** How many objects were fetched */
   total_count: uint;
   games: recently_played_game[];
};
