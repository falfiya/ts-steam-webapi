import {uint} from "../../core/numerals";

declare const badge_id: unique symbol;
export type badge_id = uint & {readonly [badge_id]: unique symbol};
