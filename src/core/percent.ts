import {final, newtype} from "./newtype";
import {float} from "./data_types";

type percent_t = {
   [final]: "percent";
   [newtype]: percent_t;
};
export type percent = float & percent_t;
