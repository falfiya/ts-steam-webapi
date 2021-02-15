import {url} from "../core/url";

declare const steam_url: unique symbol;
export type steam_url = url & {readonly [steam_url]: unique symbol};
