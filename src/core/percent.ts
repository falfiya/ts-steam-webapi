import {float} from "./basetypes";

declare const percent: unique symbol;
export type percent = float & {readonly [percent]: unique symbol};
