import {game_id} from "./game_id";
import {url} from "./url";

export type image_id = string & {readonly _: unique symbol};

const images_dir = "steamcommunity/public/images/apps";

const to_url = (domain: string) =>
   (game: game_id, image_id: image_id) =>
      `https://${domain}/${images_dir}/${game}/${image_id}.jpg` as url

export const to_steam_url = to_url("media.steampowered.com");
export const to_akami_url = to_url("steamcdn-a.akamaihd.net");
