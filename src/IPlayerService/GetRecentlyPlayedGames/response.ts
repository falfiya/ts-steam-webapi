import {uint} from "../../core/basetypes";

import {recently_played_game} from "./recently_played_game";

export type recently_played_games_response = {
   response: {
      total_count: uint;
      games: recently_played_game[];
   };
};
