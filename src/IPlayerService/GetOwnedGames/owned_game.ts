import {o_app_id} from "../o_app_id";
import {o_playtime} from "../o_playtime";

/**
 * Basic information about an owned game.
 * To get the full record, call `GetOwnedGames` with the `appinfo` option set
 * to `true`.
 */
export type owned_game = o_app_id & o_playtime;
