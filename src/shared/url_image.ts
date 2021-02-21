import {and} from "./and";
import {url_path} from "./url_path";
import {comptime} from "./comptime";

declare const url_image: unique symbol;
export type url_image = {readonly [url_image]: true};

export const url_image_path = comptime("steamcommunity/public/images");
export type  url_image_path = typeof url_image_path;

export const make_url_image = <path extends string>(path: path) =>
   `${url_image_path}/${path}` as and<url_image, url_path<`${url_image_path}/${path}`>>;
