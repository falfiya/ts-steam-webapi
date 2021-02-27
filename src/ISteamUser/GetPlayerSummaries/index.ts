import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "..";
import {GetPlayerSummaries_method} from "./method";
import {GetPlayerSummaries_response} from "./response";

async function GetPlayerSummaries(this: steam_session, users: steam_id[]) {
   const params = `steamids=${users.join(',')}`;

   const {response} = await this.api_call<GetPlayerSummaries_response>(
      ISteamUser,
      GetPlayerSummaries_method,
      "v2",
      params,
   );

   if (response === undefined) {
      throw new Error("GetPlayerSummaries: response is undefined!");
   }

   return response.players;
}

export {GetPlayerSummaries};
