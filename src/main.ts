import {app_id} from "./shared/app_id";
import {to_steam_id} from "./shared/steam_id";
import {steam_session} from "./mod";

const key = require("../raw/key");

const session = new steam_session(key);

const coalpha = to_steam_id("76561198280673707");
const celeste = 504230 as app_id;

import {app_image_id, app_image_id_to_url} from "./shared/app_image_id";
import {url_media} from "./shared/url_media";

const celeste_logo = "075182d9480064141836468579a70add4b2d74a9" as app_image_id;

const url = app_image_id_to_url(url_media, celeste, celeste_logo);

console.log(url);
