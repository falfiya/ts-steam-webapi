import { uint } from "../../core/data_types";
import { owned_game, owned_game_ex } from "./owned_game";
declare type res = {
    response?: {
        game_count: uint;
        /**
         * Depending on the parameters in the API call, more fields will be added to
         * the objects within the `games` array.
         */
        games: (owned_game | owned_game_ex)[];
    };
};
export = res;
