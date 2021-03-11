import {final} from "./final";
import {uint} from "./numerals";

export type minutes_t = {readonly [final]: "minutes"};
export type minutes = uint & minutes_t;
