import {final, unique_symbol} from "../core/newtype";
import {uint} from "../core/data_types";

type app_id_t = {
   [final]: "app_id",
   [unique_symbol]: app_id_t;
};
type app_id = uint & app_id_t;
const app_id = <id extends uint>(id: id) => id as id & app_id;

export {app_id};
