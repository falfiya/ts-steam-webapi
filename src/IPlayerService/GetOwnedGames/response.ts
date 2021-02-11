import {uint} from "../../core/basetypes";

/**
 * Why is this a generic type?
 * GetOwnedGames has several API parameters that change the resulting types and
 * semantics of what an owned_game could be.
 * An owned_game may or may not include extra info about each app.
 * An owned_game[] may or may not have free games
 * An owned_game may incl
 */
export type response_GetOwnedGames<owned_game> = {
   total_count: uint;
   games: owned_game[];
};
