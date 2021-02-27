import {steam_session} from "../../steam_session";

import {ResolveVanityURL_method} from "./method";

import {ISteamUser} from "..";
import {ResolveVanityUrl_is_err, ResolveVanityUrl_response} from "./response";

async function ResolveVanityURL(this: steam_session, vanity_url: string) {
   const {response} = await this.api_call<ResolveVanityUrl_response>(
      ISteamUser,
      ResolveVanityURL_method,
      "v1",
      `vanityurl=${vanity_url}`,
   );

   if (response === undefined) {
      throw new Error("ResolveVanityUrl: response is undefined!");
   }

   if (ResolveVanityUrl_is_err(response)) {
      throw new Error(`ResolveVanityUrl ${response.success}: ${response}`);
   }

   return response.steamid;
}

export {ResolveVanityURL};
