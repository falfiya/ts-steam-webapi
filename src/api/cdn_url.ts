import {url} from "../core/url";

declare const cdn_url: unique symbol;
export type cdn_url = url & {readonly [cdn_url]: unique symbol};
