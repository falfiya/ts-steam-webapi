import {steam_session} from "../../steam_session";

import {basic_response} from "../../api/basic_response";
import {ResolveVanityURL_method} from "./method";

import {ISteamUser} from "..";
import {ResolveVanityUrl_response} from "./response";

function ResolveVanityURL(this: steam_session, vanity_url: string):
basic_response<ResolveVanityUrl_response>
{
   const params = `vanityurl=${vanity_url}`;

   return this.session_api_call(ISteamUser, ResolveVanityURL_method, "v1", params);
}

export {ResolveVanityURL};
