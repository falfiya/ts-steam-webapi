import {final} from "../../core/final";
import {unique_object} from "../../core/newtype";

type group_id_t = {
   [final]: "group_id";
   [unique_object]: group_id_t;
};
/** 8 decimal digits */
export type group_id = string & group_id_t;
