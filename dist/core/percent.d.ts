import { final, unique_symbol } from "./newtype";
import { float } from "./data_types";
declare type percent_t = {
    [final]: "percent";
    [unique_symbol]: percent_t;
};
export declare type percent = float & percent_t;
export {};
