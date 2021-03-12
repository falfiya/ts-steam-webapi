import {final} from "./final";
import {unique_object} from "./newtype";
import {float} from "./data_types";

type percent_t = {
   [final]: "percent";
   [unique_object]: percent_t;
};
export type percent = float & percent_t;
