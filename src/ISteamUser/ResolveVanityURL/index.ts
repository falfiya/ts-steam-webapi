import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";

import {ISteamUser} from "..";
import {ResolveVanityURL_method} from "./method";

function ResolveVanityURL(this: steam_session, user: steam_id):
Promise<any>
{
   var params = `steamid=${user}`;

   return this.session_api_call(ISteamUser, ResolveVanityURL_method, "v1", params);
}

export {ResolveVanityURL};
