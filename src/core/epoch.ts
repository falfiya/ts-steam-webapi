import {final} from "./final";
import {uint} from "./numerals";

export type epoch_t = {readonly [final]: "epoch"};
/** Unix Timestamp */
export type epoch = uint & epoch_t;

export const to_date = (seconds: epoch) =>
   new Date(seconds * 1000);

export const from_date = (epoch: Date) =>
   epoch.getTime() / 1000;
