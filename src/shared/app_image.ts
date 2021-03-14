import {unwrap} from "../core/newtype";
import {app_id} from "./app_id";
import {app_image_id} from "./app_image_id";
import {image_host} from "./image_host";

const apps = "apps";
type  apps = typeof apps;

export type app_image<
   host extends image_host,
   app extends app_id,
   id extends app_image_id,
> = `${unwrap<image_host>}${apps}/${unwrap<app>}/${unwrap<id>}.jpg`;

export const app_image = <
   host extends image_host,
   app extends app_id,
   id extends app_image_id,
>(host: host, app: app, id: id) =>
   `${host}/${apps}/${app}/${id}.jpg` as app_image<host, app, id>;
