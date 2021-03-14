import {final} from "../core/final";
import {unique_symbol} from "../core/newtype";
import {uint} from "../core/data_types";

type app_id_t = {
   [final]: "app_id",
   [unique_symbol]: app_id_t;
};
export type app_id = uint & app_id_t;
