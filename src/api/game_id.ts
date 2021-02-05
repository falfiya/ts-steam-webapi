import {uint} from "../core/basetypes";

declare const game_id: unique symbol;
export type game_id = uint & {readonly [game_id]: unique symbol};
