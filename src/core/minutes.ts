import {final, unique_symbol} from "./newtype";
import {uint} from "./data_types";

type minutes_t = {
   [final]: "minutes";
   [unique_symbol]: minutes_t;
};
type minutes = uint & minutes_t;
const minutes = <min extends uint>(min: min) => min as min & minutes;

export {minutes};
