import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";
import {app_id} from "../../api/app_id";

import {o_has_player_stats} from "./o_has_player_stats";

import {ISteamUserStats} from "..";
import {GetPlayerAchievements_method} from "./method";

// the API has another parameter `l` but I'm pretty sure it does nothing
function GetPlayerAchievements(this: steam_session, user: steam_id, game_id: app_id):
Promise<o_has_player_stats>
{
   const params = `steamid=${user}&appid=${game_id}`;

   return this.session_api_call(ISteamUserStats, GetPlayerAchievements_method, "v1", params);
}

export {GetPlayerAchievements};
