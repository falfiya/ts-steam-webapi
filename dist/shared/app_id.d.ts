import { final, unique_symbol } from "../core/newtype";
import { uint } from "../core/data_types";
declare type app_id_t = {
    [final]: "app_id";
    [unique_symbol]: app_id_t;
};
declare type app_id = uint & app_id_t;
declare const app_id: <id extends uint>(id: id) => id & app_id_t;
export { app_id };
