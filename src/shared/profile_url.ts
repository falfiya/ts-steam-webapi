import {url} from "./url_domain";

declare const profile_url: unique symbol;
export type profile_url = url & {readonly [profile_url]: unique symbol};

const starts_with_steam = (url: url) => false
   || url.startsWith("https://steamcommunity.com/id/")
   || url.startsWith("https://steamcommunity.com/profiles/")

export const is_profile_url = (url: url) => true
   && starts_with_steam(url)
   && !url.endsWith('/');

export const to_profile_url = (maybe_purl: url): profile_url => {
   if (is_profile_url(maybe_purl)) {
      return maybe_purl as profile_url;
   }
   throw new Error(`${maybe_purl} was not a profile_url!`);
}
