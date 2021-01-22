import {uint} from "./n";

declare const minutes: unique symbol;
export type minutes = uint & {readonly [minutes]: unique symbol};
