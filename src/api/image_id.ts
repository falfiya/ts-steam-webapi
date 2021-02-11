import {app_id} from "./app_id";
import {url} from "../core/url";

declare const image_id: unique symbol;
export type image_id = string & {readonly [image_id]: unique symbol};

const images_dir = "steamcommunity/public/images/apps";

const to_url = (domain: string) =>
   (game: app_id, image_id: image_id) =>
      `https://${domain}/${images_dir}/${game}/${image_id}.jpg` as url;

export const to_steam_url = to_url("media.steampowered.com");
export const to_akami_url = to_url("steamcdn-a.akamaihd.net");