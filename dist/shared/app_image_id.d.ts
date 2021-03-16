import { final, unique_symbol } from "../core/newtype";
declare type app_image_id_t = {
    [final]: "app_image_id";
    [unique_symbol]: app_image_id_t;
};
export declare type app_image_id = string & app_image_id_t;
export {};
