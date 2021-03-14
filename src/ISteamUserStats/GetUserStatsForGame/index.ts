import {isteam_session} from "../../shared/isteam_session";
import {steam_id} from "../../shared/steam_id";
import {app_id} from "../../shared/app_id";

import {ISteamUserStats} from "..";
import {api_method} from "../../api/api_method";
const method = "GetUserStatsForGame" as api_method;

async function GetUserStatsForGame(this: isteam_session, user: steam_id, game_id: app_id) {
   const params = `steamid=${user}&appid=${game_id}`;

   const {playerstats} = await this.api_call<import("./res")>(
      ISteamUserStats,
      method,
      "v2",
      params,
   );

   if (playerstats === undefined) {
      throw new Error("GetUserStatsForGame: playerstats is undefined!");
   }

   return playerstats;
}

export {GetUserStatsForGame};
