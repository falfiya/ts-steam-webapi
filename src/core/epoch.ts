import {final, newtype} from "./newtype";
import {uint} from "./data_types";

type epoch_t = {
   [final]: "epoch";
   [newtype]: epoch_t;
};
/** Unix Timestamp */
type epoch = uint & epoch_t;

const to_date = (seconds: epoch) =>
   new Date(seconds * 1000);

const from_date = (epoch: Date) =>
   epoch.getTime() / 1000;

export {epoch, to_date, from_date};
