import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";

import {ISteamUserStats} from "..";
import {GetGlobalAchievementPercentagesForApp_method} from "./method";

function Template(this: steam_session, user: steam_id):
Promise<any>
{
   var params = `steamid=${user}`;

   return this.api_call(ISteamUserStats, GetGlobalAchievementPercentagesForApp_method, "v1", params);
}

export {Template};
