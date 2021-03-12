import {unwrap} from "../core/newtype";
import {app_id} from "../shared/app_id";
import {app_image_id} from "../shared/app_image_id";
import {public_image} from "../shared/public_image";

const apps = "apps";
type  apps = typeof apps;

export type app_image<
   host extends string,
   app extends app_id,
   id extends app_image_id,
> = `${public_image<host, `${apps}/${unwrap<app>}/${unwrap<id>}.jpg`>}`;

export const make_app_image = <
   host extends string,
   app extends app_id,
   id extends app_image_id,
>(host: host, app: app, id: id) =>
   `${host}/${public_image}/${apps}/${app}/${id}.jpg` as app_image<host, app, id>;
