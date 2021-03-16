import { final, unique_symbol } from "../../core/newtype";
import { uint } from "../../core/data_types";
declare type quest_id_t = {
    [final]: "quest_id";
    [unique_symbol]: quest_id_t;
};
export declare type quest_id = uint & quest_id_t;
export {};
