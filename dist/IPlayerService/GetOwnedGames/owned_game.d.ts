import { game_base, game } from "../game";
/**
 * Basic information about an owned game.
 * To get the full record, call `GetOwnedGames` with the `appinfo` option set
 * to `true`.
 */
export declare type owned_game = game_base;
export declare type owned_game_ex = game & {
    has_community_visible_stats: boolean;
};
