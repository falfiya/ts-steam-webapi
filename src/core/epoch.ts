import {uint} from "./numerals";

declare const epoch: unique symbol;
/** Unix Timestamp */
export type epoch = uint & {readonly [epoch]: void};

export const to_date = (seconds: epoch) =>
   new Date(seconds * 1000);

export const from_date = (epoch: Date) =>
   epoch.getTime() / 1000;
