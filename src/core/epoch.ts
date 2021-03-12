import {final} from "./final";
import {unique_object} from "./newtype";
import {uint} from "./data_types";

type epoch_t = {
   [final]: "epoch";
   [unique_object]: epoch_t;
};
/** Unix Timestamp */
export type epoch = uint & epoch_t;

export const to_date = (seconds: epoch) =>
   new Date(seconds * 1000);

export const from_date = (epoch: Date) =>
   epoch.getTime() / 1000;
