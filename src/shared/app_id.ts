import {final} from "../core/final";
import {uint} from "../core/numerals";

export type app_id_t = {readonly [final]: "app_id"};
export type app_id = uint & app_id_t;
