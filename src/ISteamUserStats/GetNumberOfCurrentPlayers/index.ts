import {app_id} from "../../shared/app_id";

import {current_players} from "./current_players";

import {api_call} from "../../api/api_call";
import {ISteamUserStats} from "..";
import {GetNumberOfCurrentPlayers_method} from "./method";
import {o_response} from "../../shared/o_response";

async function GetNumberOfCurrentPlayers(app_id: app_id) {
   const {response} = await api_call<o_response<current_players>>(
      ISteamUserStats,
      GetNumberOfCurrentPlayers_method,
      "v1",
      `appid=${app_id}`,
   );

   if (response === undefined) {
      throw new Error("GetNumberOfCurrentPlayers: response is undefined!");
   }

   return response;
}

export {GetNumberOfCurrentPlayers};
