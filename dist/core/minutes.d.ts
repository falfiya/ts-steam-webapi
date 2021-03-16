import { final, unique_symbol } from "./newtype";
import { uint } from "./data_types";
declare type minutes_t = {
    [final]: "minutes";
    [unique_symbol]: minutes_t;
};
declare type minutes = uint & minutes_t;
declare const minutes: <min extends uint>(min: min) => min & minutes_t;
export { minutes };
