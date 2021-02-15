import {app_id} from "./app_id";
import {app_image_url} from "./app_image_url";
import {steam_app_image_url} from "./steam_app_image_url";
import {akami_app_image_url} from "./akami_app_image_url";

declare const image_id: unique symbol;
export type image_id = string & {readonly [image_id]: unique symbol};

const images_dir = "steamcommunity/public/images/apps";

const to_url = <T extends app_image_url> (domain: string) =>
   (game: app_id, image_id: image_id) =>
      `https://${domain}/${images_dir}/${game}/${image_id}.jpg` as T;

export const to_steam_cdn_url = to_url<steam_app_image_url>("media.steampowered.com");
export const to_akami_cdn_url = to_url<akami_app_image_url>("steamcdn-a.akamaihd.net");
