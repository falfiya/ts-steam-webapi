import {final} from "./final";
import {unique_symbol} from "./newtype";
import {uint} from "./data_types";

type minutes_t = {
   [final]: "minutes";
   [unique_symbol]: minutes_t;
};
export type minutes = uint & minutes_t;
