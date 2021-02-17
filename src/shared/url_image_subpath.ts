import {url_image} from "./url_image";

export declare const url_image_subpath: unique symbol;

export type url_image_subpath<path extends string> =
   & url_image
   & {readonly [url_image_subpath]: path};

export const make_url_image_subpath = <path extends string>(path: path) =>
   `${url_image}/${path}` as url_image_subpath<path>;
