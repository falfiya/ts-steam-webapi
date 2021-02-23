import {uint} from "./numerals";

declare const minutes: unique symbol;
export type minutes = uint & {readonly [minutes]: void};
