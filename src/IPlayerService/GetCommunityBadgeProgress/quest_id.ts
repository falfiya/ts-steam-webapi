import {final, newtype} from "../../core/newtype";
import {uint} from "../../core/data_types";

type quest_id_t = {
   [final]: "quest_id";
   [newtype]: quest_id_t;
};
export type quest_id = uint & quest_id_t;
