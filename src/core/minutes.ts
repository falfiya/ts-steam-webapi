import {final} from "./final";
import {unique_object} from "./newtype";
import {uint} from "./data_types";

type minutes_t = {
   [final]: "minutes";
   [unique_object]: minutes_t;
};
export type minutes = uint & minutes_t;
