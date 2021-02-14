import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";
import {app_id} from "../../api/app_id";

import {GetUserStatsForGame_response} from "./response";

import {ISteamUserStats} from "..";
import {GetUserStatsForGame_method} from "./method";

function GetUserStatsForGame(this: steam_session, user: steam_id, game_id: app_id):
Promise<GetUserStatsForGame_response>
{
   const params = `steamid=${user}&appid=${game_id}`;

   return this.session_api_call(ISteamUserStats, GetUserStatsForGame_method, "v2", params);
}

export {GetUserStatsForGame};
