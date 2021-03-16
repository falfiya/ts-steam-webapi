import { final, unique_symbol } from "../../core/newtype";
declare type community_item_id_t = {
    [final]: "community_item_id";
    [unique_symbol]: community_item_id_t;
};
export declare type community_item_id = string & community_item_id_t;
export {};
