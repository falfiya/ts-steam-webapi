import {steamcommunity} from "./steamcommunity";
import {steam_id} from "./steam_id";
import {primitive} from "../core/primitive";

const profiles = join(steamcommunity, "profiles");
type  profiles = typeof profiles;

type  profile_url<id extends steam_id> = `${typeof profile_url}/${primitive<id>}`;

const id_url = join(steamcommunity, "id");
type  id_url<vanity extends string> = `${typeof id_url}/${primitive<vanity>}`;

export type user_url<id extends steam_id = steam_id, vanity extends string = string> =
   | profile_url<id>
   | id_url<vanity>;
