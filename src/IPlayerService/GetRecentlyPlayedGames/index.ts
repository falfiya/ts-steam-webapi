import {steam_session} from "../../steam_session";
import {IPlayerService} from "..";
import {method} from "./method";

import {uint} from "../../core/basetypes";
import {user_id} from "../../api/user_id";

import {recently_played_games_response} from "./response";

export function GetRecentlyPlayedGames(this: steam_session, user: user_id, count?: uint):
   Promise<recently_played_games_response> {
   var params = `steamid=${user}`;
   if (count !== undefined) {
      params += `&count=${count}`;
   }

   return this.api_call(IPlayerService, method, "v1", params);
}
