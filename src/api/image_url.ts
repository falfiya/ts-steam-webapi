import {url} from "../core/url";

declare const image_url: unique symbol;
export type image_url = url & {readonly [image_url]: unique symbol};
