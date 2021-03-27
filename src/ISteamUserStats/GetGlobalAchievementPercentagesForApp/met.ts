import {app_id} from "../../shared/app_id";

import {ISteamUserStats} from "../interface";
import {api_call} from "../../api/api_call";
import {api_method} from "../../api/api_method";

const method = "GetGlobalAchievementPercentagesForApp" as api_method;

async function GetGlobalAchievementPercentagesForApp(game_id: app_id) {
   const params = `gameid=${game_id}`;

   const {response} = await api_call<import("./res")>(
      ISteamUserStats,
      method,
      "v2",
      params,
   );

   if (response === undefined) {
      return [];
   }

   return response.achievementpercentages.achievements;
}

export {GetGlobalAchievementPercentagesForApp};
