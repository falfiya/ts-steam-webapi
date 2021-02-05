import {uint} from "./basetypes";

declare const minutes: unique symbol;
export type minutes = uint & {readonly [minutes]: unique symbol};
