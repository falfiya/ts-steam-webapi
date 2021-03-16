import { unwrap } from "../core/newtype";
import { app_id } from "./app_id";
import { app_image_id } from "./app_image_id";
import { image_host } from "./image_host";
declare const apps = "apps";
declare type apps = typeof apps;
export declare type app_image<host extends image_host, app extends app_id, id extends app_image_id> = `${unwrap<image_host>}/${apps}/${unwrap<app>}/${unwrap<id>}.jpg`;
export declare const app_image: <host extends image_host<import("./http_host").http_host>, app extends app_id, id extends app_image_id>(host: host, app: app, id: id) => `http://${string}/steamcommunity/public/images/apps/${unwrap<app>}/${unwrap<id>}.jpg` | `https://${string}/steamcommunity/public/images/apps/${unwrap<app>}/${unwrap<id>}.jpg`;
export {};
