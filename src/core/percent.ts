import {float} from "./numerals";

declare const percent: unique symbol;
export type percent = float & {readonly [percent]: unique symbol};
