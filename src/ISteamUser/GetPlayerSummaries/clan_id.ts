import {final} from "../../core/final";

export type clan_id_t = {readonly [final]: "clan_id"};
/**
 * String that when parsed, only the lowest 32 bits matter.
 * 103582791429521408 is returned for invalid
 */
export type clan_id = string & clan_id_t;
