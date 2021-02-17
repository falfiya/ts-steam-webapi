import {url} from "./url_domain";
import {app_id} from "./app_id";
import {url_app_image} from "./url_app_image";

declare const app_image_id: unique symbol;
export type app_image_id = string & {readonly [app_image_id]: unique symbol};

export const app_image_id_to_url = <domain extends string> (
   host: url<domain>,
   game: app_id,
   id: app_image_id
) =>
   `https://${host}/${url_image_app}/${game}/${id}.jpg` as (
      & url<domain>
      & url_app_image);
