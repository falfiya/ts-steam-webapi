import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "..";
import {api_method} from "../../api/api_method";
const method = "GetPlayerSummaries" as api_method;

async function GetPlayerSummaries(this: steam_session, users: steam_id[]) {
   const params = `steamids=${users.join(',')}`;

   const {response} = await this.api_call<import("./res")>(
      ISteamUser,
      method,
      "v2",
      params,
   );

   if (response === undefined) {
      throw new Error("GetPlayerSummaries: response is undefined!");
   }

   return response.players;
}

export {GetPlayerSummaries};
