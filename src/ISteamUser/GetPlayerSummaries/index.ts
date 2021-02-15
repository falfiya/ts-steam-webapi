import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {basic_response} from "../../api/basic_response";
import {player_summaries} from "./player_summaries";

import {ISteamUser} from "..";
import {GetPlayerSummaries_method} from "./method";

function GetPlayerSummaries(this: steam_session, users: steam_id[]):
basic_response<player_summaries>
{
   const params = `steamids=${users.join(',')}`;

   return this.session_api_call(ISteamUser, GetPlayerSummaries_method, "v2", params);
}

export {GetPlayerSummaries};
