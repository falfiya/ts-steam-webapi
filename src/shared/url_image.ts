import {constexpr} from "./constexpr";

export const url_image = constexpr("steamcommunity/public/images");
export type  url_image = typeof url_image;

import {url_path} from "./url_path";

export const make_url_image_subpath = <path extends string>(path: path) =>
   `${url_image}/${path}` as url_path<`${url_image}/${path}`>;
