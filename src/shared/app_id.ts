import {uint} from "../core/basetypes";

declare const app_id: unique symbol;
export type app_id = uint & {readonly [app_id]: unique symbol};
