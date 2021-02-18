import {make_url_image, url_image} from "./url_image";
import {url_path} from "./url_path";

export const url_app_image: url_image & url_path<"steamcommunity/public/images/apps"> =
   make_url_image("apps");
export type  url_app_image = typeof url_app_image;
