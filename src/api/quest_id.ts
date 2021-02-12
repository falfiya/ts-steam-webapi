import {uint} from "../core/basetypes";

declare const quest_id: unique symbol;
export type quest_id = uint & {readonly [quest_id]: unique symbol};
