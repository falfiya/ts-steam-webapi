import {unwrap} from "../core/newtype";
import {h_steamcommunity} from "./http_hosts";
import {url_concat} from "./url_concat";
import {steam_id} from "./steam_id";

const profiles = url_concat(h_steamcommunity, "profiles");
type  profiles = typeof profiles;

const id = url_concat(h_steamcommunity, "id");
type  id = typeof id;

type profile_url<user_id extends steam_id> = `${profiles}/${unwrap<user_id>}`;

const profile_url = <user_id extends steam_id>(user_id: user_id) =>
   `${profiles}/${user_id}` as profile_url<user_id>;

type vanity_url<vanity extends string> = `${id}/${vanity}`;

const vanity_url = <vanity extends string>(vanity: vanity) =>
   `${id}/${vanity}` as vanity_url<vanity>;

type user_url<id extends steam_id, vanity extends string> =
   | profile_url<id>
   | vanity_url<vanity>;

export {profile_url, vanity_url, user_url};
