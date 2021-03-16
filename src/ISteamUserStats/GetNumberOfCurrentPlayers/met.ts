import {app_id} from "../../shared/app_id";

import {api_call} from "../../api/api_call";
import {ISteamUserStats} from "../interface";
import {api_method} from "../../api/api_method";

const method = "GetNumberOfCurrentPlayers" as api_method;

async function GetNumberOfCurrentPlayers(app_id: app_id) {
   const {response} = await api_call<import("./res")>(
      ISteamUserStats,
      method,
      "v1",
      `appid=${app_id}`,
   );

   if (response === undefined) {
      throw new Error("GetNumberOfCurrentPlayers: response is undefined!");
   }

   return response;
}

export {GetNumberOfCurrentPlayers};
