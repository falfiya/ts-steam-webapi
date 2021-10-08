import {final, newtype} from "./newtype";
import {uint} from "./data_types";

type minutes_t = {
   [final]: "minutes";
   [newtype]: minutes_t;
};
type minutes = uint & minutes_t;
const minutes = <min extends uint>(min: min) => min as min & minutes_t;

export {minutes};
