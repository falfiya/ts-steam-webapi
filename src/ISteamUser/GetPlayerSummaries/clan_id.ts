import {final, newtype} from "../../core/newtype";

type clan_id_t = {
   [final]: "clan_id";
   [newtype]: clan_id_t;
};
/**
 * String that when parsed, only the lowest 32 bits matter.
 * 103582791429521408 is returned for invalid
 */
export type clan_id = string & clan_id_t;
