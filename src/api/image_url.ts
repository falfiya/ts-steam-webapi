import {url} from "../core/url";

declare const image_url: unique symbol;
export type image_url = url & {readonly [image_url]: unique symbol};

export const image_url_base = (base: url) =>
   `${base}/steamcommunity/public/images` as image_url;
