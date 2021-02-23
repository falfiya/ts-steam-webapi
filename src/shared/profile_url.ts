import {steamcommunity} from "./steamcommunity";
import {join} from "./url";
import {steam_id} from "./steam_id";

export const id_url = join(steamcommunity, "id");
export type  id_url<id extends steam_id> = `${typeof id_url}/${id}`;

export const vanity_url = join(steamcommunity, "profiles");
export type  vanity_url<vanity extends string> = `${typeof vanity_url}/${vanity}`;

export type profile_url<id extends steam_id, vanity extends string = string> =
   | id_url<id>
   | vanity_url<vanity>;
