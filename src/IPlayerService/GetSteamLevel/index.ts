import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {IPlayerService} from "..";
import {GetSteamLevel_method} from "./method";
import {GetSteamLevel_response} from "./response";

async function GetSteamLevel(this: steam_session, user: steam_id) {
   const params = `steamid=${user}`;

   const {response} = await this.api_call<GetSteamLevel_response>(
      IPlayerService,
      GetSteamLevel_method,
      "v1",
      params
   );

   if (response === undefined) {
      throw new Error("GetSteamLevel: response is undefined!");
   }

   return response.player_level;
}

export {GetSteamLevel};
