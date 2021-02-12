import {steam_id} from "../../api/steam_id";

import {ISteamUserStats} from "..";
import {GetGlobalAchievementPercentagesForApp_method} from "./method";

import {api_call} from "../../api/call";

function GetGlobalAchievementPercentagesForApp(user: steam_id):
Promise<any>
{
   var params = `steamid=${user}`;

   return api_call(ISteamUserStats, GetGlobalAchievementPercentagesForApp_method, "v1", params);
}

export {GetGlobalAchievementPercentagesForApp};
