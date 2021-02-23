import {app_id} from "./app_id";
import {app_image_id} from "./app_image_id";
import {ct} from "./ct";
import {or} from "./or";
import {public_image} from "./public_image";

export const app_image = ct("apps");
export type app_image<
   host extends string,
   app extends app_id,
   id extends app_image_id,
> = `${public_image<host, `${typeof app_image}/${or<app, number>}/${or<id, string>}.jpg`>}`;

export const make_app_image = <
   host extends string,
   app extends app_id,
   id extends app_image_id,
>(host: host, app: app, id: id) =>
   `${host}/${public_image}/${app_image}/${app}/${id}.jpg` as app_image<host, app, id>;
