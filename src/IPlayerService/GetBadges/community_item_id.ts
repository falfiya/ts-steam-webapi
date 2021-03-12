import {final} from "../../core/final";
import {unique_object} from "../../core/newtype";

type community_item_id_t = {
   [final]: "community_item_id";
   [unique_object]: community_item_id_t;
};
export type community_item_id = string & community_item_id_t;
