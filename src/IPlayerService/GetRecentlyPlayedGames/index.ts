import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";
import {uint} from "../../core/numerals";

import {GetRecentlyPlayedGames_response} from "./response";

import {IPlayerService} from "..";
import {GetRecentlyPlayedGames_method} from "./method";

async function GetRecentlyPlayedGames(this: steam_session, user: steam_id, count?: uint)
{
   var params = `steamid=${user}`;
   if (count !== undefined) {
      params += `&count=${count}`;
   }

   const {response} = await this.api_call<GetRecentlyPlayedGames_response>(
      IPlayerService,
      GetRecentlyPlayedGames_method,
      "v1",
      params
   );

   if (response === undefined) {
      throw new Error("GetRecentlyPlayedGames: response is undefined!");
   }

   return response.games;
}

export {GetRecentlyPlayedGames};
