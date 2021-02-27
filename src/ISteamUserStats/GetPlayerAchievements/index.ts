import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";
import {app_id} from "../../shared/app_id";

import {GetPlayerAchievements_is_err, GetPlayerAchievements_response} from "./response";

import {ISteamUserStats} from "..";
import {GetPlayerAchievements_method} from "./method";

// the API has another parameter `l` but I'm pretty sure it does nothing
async function GetPlayerAchievements(this: steam_session, user: steam_id, game_id: app_id) {
   const params = `steamid=${user}&appid=${game_id}`;

   const {playerstats} = await this.api_call<GetPlayerAchievements_response>(
      ISteamUserStats,
      GetPlayerAchievements_method,
      "v1",
      params
   );

   if (GetPlayerAchievements_is_err(playerstats)) {
      throw new Error(`GetPlayerAchievements: ${playerstats.error}`);
   }

   return playerstats;
}

export {GetPlayerAchievements};
