import {final, unique_symbol} from "./newtype";
import {float} from "./data_types";

type percent_t = {
   [final]: "percent";
   [unique_symbol]: percent_t;
};
export type percent = float & percent_t;
