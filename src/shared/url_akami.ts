import {url_host} from "./url_host";
import {make_url_image_host, url_image_host} from "./url_image_host";

export type url_akami = url_host<"steamcdn-a.akamaihd.net"> & url_image_host;
export const url_akami: url_akami = make_url_image_host("steamcdn-a.akamaihd.net");
