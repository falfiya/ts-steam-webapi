import {is_url} from "./url";
import {url_community} from "./url_community";
import {make_url_path} from "./url_path";

const id_path = make_url_path("id");
type  id_path = typeof id_path;

const profile_path = make_url_path("profiles");
type  profile_path = typeof profile_path;

type either_path = id_path | profile_path;

export type profile_url = url_community & either_path;

const starts_with_steam = (s: string) => false
   || is_url(url_community, id_path, s)
   || is_url(url_community, profile_path, s);

export const to_profile_url = (s: string): profile_url => {
   if (starts_with_steam(s)) {
      return s as profile_url;
   }

   throw new Error(`${s} was not a profile_url!`);
}
