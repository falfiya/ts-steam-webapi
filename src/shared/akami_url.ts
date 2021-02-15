import {url} from "../core/url";

declare const akami_url: unique symbol;
export type akami_url = url & {readonly [akami_url]: unique symbol};
