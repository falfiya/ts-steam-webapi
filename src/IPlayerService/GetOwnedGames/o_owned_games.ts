import {owned_game} from "./owned_game";

/**
 * Depending on the parameters in the API call, more fields will be added to
 * the objects within the `games` array. In order to represent this, this
 * response object will not be concerned about the exact type within `games`,
 * so long as it satisfies the base fields that the Steam Web API will always
 * respond with.
 */
export type o_owned_games<owned_game_t extends owned_game> = {games: owned_game_t[]};
