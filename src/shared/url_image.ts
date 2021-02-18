import {url_path} from "./url_path";

declare const url_image: unique symbol;
export type url_image = {readonly [url_image]: true};

import {constexpr} from "./constexpr";
export const url_image_path = constexpr("steamcommunity/public/images");
export type  url_image_path = typeof url_image_path;

export function make_url_image <path extends string>(path: path):
url_image & url_path<`${url_image_path}/${path}`>
{
   return `${url_image_path}/${path}` as url_image & url_path<`${url_image_path}/${path}`>;
}
