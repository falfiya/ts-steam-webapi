import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "..";
import {GetPlayerBans_method} from "./method";
import {GetPlayerBans_response} from "./response";

function GetPlayerBans(this: steam_session, users: steam_id[]):
Promise<GetPlayerBans_response>
{
   const params = `steamids=${users.join(',')}`;

   return this.session_api_call(ISteamUser, GetPlayerBans_method, "v1", params);
}

export {GetPlayerBans};
