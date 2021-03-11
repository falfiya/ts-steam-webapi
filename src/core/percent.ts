import {final} from "./final";
import {float} from "./numerals";

export type percent_t = {readonly [final]: "percent"};
export type percent = float & percent_t;
