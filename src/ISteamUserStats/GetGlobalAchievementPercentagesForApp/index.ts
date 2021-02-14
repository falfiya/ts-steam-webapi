import {app_id} from "../../api/app_id";

import {GetGlobalAchievementPercentagesForApp_response} from "./response";

import {ISteamUserStats} from "..";
import {api_call} from "../../api/call";
import {GetGlobalAchievementPercentagesForApp_method} from "./method";

function GetGlobalAchievementPercentagesForApp(game_id: app_id):
Promise<GetGlobalAchievementPercentagesForApp_response>
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
