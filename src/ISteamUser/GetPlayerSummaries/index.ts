import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";

import {ISteamUser} from "..";
import {GetPlayerSummaries_method} from "./method";

function GetPlayerSummaries(this: steam_session, user: steam_id):
Promise<any>
{
   var params = `steamid=${user}`;

   return this.session_api_call(ISteamUser, GetPlayerSummaries_method, "v2", params);
}

export {GetPlayerSummaries};
