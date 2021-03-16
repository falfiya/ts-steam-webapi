import {session} from "../../shared/session";

import {ISteamUser} from "../interface";
import {api_method} from "../../api/api_method";
import {res, is_err} from "./res";

const method = "ResolveVanityURL" as api_method;

async function ResolveVanityURL(this: session, vanity_url: string) {
   const {response} = await this.api_call<res>(
      ISteamUser,
      method,
      "v1",
      `vanityurl=${vanity_url}`,
   );

   if (response === undefined) {
      throw new Error("ResolveVanityUrl: response is undefined!");
   }

   if (is_err(response)) {
      throw new Error(`ResolveVanityUrl ${response.success}: ${response}`);
   }

   return response.steamid;
}

export {ResolveVanityURL};
