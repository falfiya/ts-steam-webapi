import {final} from "../../core/final";
import {unique_symbol} from "../../core/newtype";
import {uint} from "../../core/data_types";

type quest_id_t = {
   [final]: "quest_id";
   [unique_symbol]: quest_id_t;
};
export type quest_id = uint & quest_id_t;
