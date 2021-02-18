import {steam_session} from "../../steam_session";

import {basic_response} from "../../api/basic_response";
import {ResolveVanityURL_method} from "./method";

import {ISteamUser} from "..";
import {maybe_response, ResolveVanityUrl_response} from "./response";

async function ResolveVanityURL(this: steam_session, vanity_url: string):
basic_response<ResolveVanityUrl_response>
{
   const params = `vanityurl=${vanity_url}`;

   const res: maybe_response = await this.session_api_call(
      ISteamUser,
      ResolveVanityURL_method,
      "v1",
      params,
   );

   if (res.response.success !== 1) {
      throw new Error(res.response.message);
   }

   return res as unknown as basic_response<ResolveVanityUrl_response>;
}

export {ResolveVanityURL};
