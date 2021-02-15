import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";
import {uint} from "../../core/basetypes";

import {basic_response} from "../../api/basic_response";
import {GetRecentlyPlayedGames_response} from "./response";

import {IPlayerService} from "..";
import {GetRecentlyPlayedGames_method} from "./method";

function GetRecentlyPlayedGames(this: steam_session, user: steam_id, count?: uint):
basic_response<GetRecentlyPlayedGames_response>
{
   var params = `steamid=${user}`;
   if (count !== undefined) {
      params += `&count=${count}`;
   }

   return this.session_api_call(IPlayerService, GetRecentlyPlayedGames_method, "v1", params);
}

export {GetRecentlyPlayedGames};
