import {app_id} from "../../api/app_id";

import {ISteamUserStats} from "..";
import {GetGlobalAchievementPercentagesForApp_method} from "./method";
import {o_has_achievement_percentages} from "./o_has_achievement_percentages";

import {api_call} from "../../api/call";

function GetGlobalAchievementPercentagesForApp(game_id: app_id):
Promise<o_has_achievement_percentages>
{
   const params = `gameid=${game_id}`;
   return api_call(
      ISteamUserStats,
      GetGlobalAchievementPercentagesForApp_method,
      "v2",
      params
   );
}

export {GetGlobalAchievementPercentagesForApp};
