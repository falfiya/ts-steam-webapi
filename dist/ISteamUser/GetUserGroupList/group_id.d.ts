import { final, unique_symbol } from "../../core/newtype";
declare type group_id_t = {
    [final]: "group_id";
    [unique_symbol]: group_id_t;
};
/** 8 decimal digits */
export declare type group_id = string & group_id_t;
export {};
