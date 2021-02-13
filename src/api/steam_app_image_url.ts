import {cdn_url} from "./cdn_url";
import {image_url} from "./image_url";

declare const steam_app_image_url: unique symbol;
export type steam_app_image_url
   = cdn_url
   & image_url
   & {readonly [steam_app_image_url]: unique symbol};
