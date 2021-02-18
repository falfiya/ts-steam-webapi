import {app_id} from "./app_id";
import {url_app_image} from "./url_app_image";
import {url_host} from "./url_host";
import {url_image_host} from "./url_image_host";

declare const app_image_id: unique symbol;
export type app_image_id = string & {readonly [app_image_id]: unique symbol};

export const app_image_id_to_url = <H extends string> (
   host: url_host<H> & url_image_host,
   game: app_id,
   id: app_image_id
) => `https://${host}/${url_app_image}/${game}/${id}.jpg` as url_host<H> & url_app_image;
