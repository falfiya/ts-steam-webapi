import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";
import {app_id} from "../../shared/app_id";

import {ISteamUserStats} from "..";
import {api_method} from "../../api/api_method";
import {res, is_err} from "./res";
const method = "GetPlayerAchievements" as api_method;

// the API has another parameter `l` but I'm pretty sure it does nothing
async function GetPlayerAchievements(this: steam_session, user: steam_id, game_id: app_id) {
   const params = `steamid=${user}&appid=${game_id}`;

   const {playerstats} = await this.api_call<res>(
      ISteamUserStats,
      method,
      "v1",
      params
   );

   if (is_err(playerstats)) {
      throw new Error(`GetPlayerAchievements: ${playerstats.error}`);
   }

   return playerstats;
}

export {GetPlayerAchievements};
