import {app_id} from "../../api/app_id";

import {basic_response} from "../../api/basic_response";
import {current_players} from "./current_players";

import {api_call} from "../../api/call";
import {ISteamUserStats} from "..";
import {GetNumberOfCurrentPlayers_method} from "./method";

function GetNumberOfCurrentPlayers(app_id: app_id):
basic_response<current_players>
{
   const params = `appid=${app_id}`;

   return api_call(ISteamUserStats, GetNumberOfCurrentPlayers_method, "v1", params);
}

export {GetNumberOfCurrentPlayers};
