import { final, unique_symbol } from "./newtype";
import { uint } from "./data_types";
declare type epoch_t = {
    [final]: "epoch";
    [unique_symbol]: epoch_t;
};
/** Unix Timestamp */
declare type epoch = uint & epoch_t;
declare const to_date: (seconds: epoch) => Date;
declare const from_date: (epoch: Date) => number;
export { epoch, to_date, from_date };
