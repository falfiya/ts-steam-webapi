import {url} from "../core/url";
import {image_url, image_url_base} from "./image_url";
import {steam_url_base} from "../shared/steam_url";

declare const app_image_url: unique symbol;
export type app_image_url =
   & image_url
   & {readonly [app_image_url]: unique symbol};

export const app_image_url_base = (base: url) =>
   `${image_url_base(base)}/apps`;
