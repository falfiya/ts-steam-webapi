import {url_host} from "./url_host";
import {make_url_image_host, url_image_host} from "./url_image_host";

export type url_media = url_host<"media.steampowered.com"> & url_image_host;
export const url_media: url_media = make_url_image_host("media.steampowered.com");
