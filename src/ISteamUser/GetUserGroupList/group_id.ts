import {final, unique_symbol} from "../../core/newtype";

type group_id_t = {
   [final]: "group_id";
   [unique_symbol]: group_id_t;
};
/** 8 decimal digits */
export type group_id = string & group_id_t;
