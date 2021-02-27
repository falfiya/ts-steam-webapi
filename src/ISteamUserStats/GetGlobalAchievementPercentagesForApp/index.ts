import {app_id} from "../../shared/app_id";

import {GetGlobalAchievementPercentagesForApp_response} from "./response";

import {ISteamUserStats} from "..";
import {api_call} from "../../api/api_call";
import {GetGlobalAchievementPercentagesForApp_method} from "./method";

async function GetGlobalAchievementPercentagesForApp(game_id: app_id) {
   const {response} = await api_call<GetGlobalAchievementPercentagesForApp_response>(
      ISteamUserStats,
      GetGlobalAchievementPercentagesForApp_method,
      "v2",
      `gameid=${game_id}`,
   );

   if (response === undefined) {
      throw new Error("GetGlobalAchievementPercentagesForApp: response is undefined!");
   }

   return response.achievementpercentages.achievements;
}

export {GetGlobalAchievementPercentagesForApp};
