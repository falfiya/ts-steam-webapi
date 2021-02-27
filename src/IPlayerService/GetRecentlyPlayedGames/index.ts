import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";
import {uint} from "../../core/numerals";

import {IPlayerService} from "..";
import {api_method} from "../../api/api_method";
const method = "GetRecentlyPlayedGames" as api_method;

async function GetRecentlyPlayedGames(this: steam_session, user: steam_id, count?: uint) {
   var params = `steamid=${user}`;
   if (count !== undefined) {
      params += `&count=${count}`;
   }

   const {response} = await this.api_call<import("./res")>(
      IPlayerService,
      method,
      "v1",
      params
   );

   if (response === undefined) {
      throw new Error("GetRecentlyPlayedGames: response is undefined!");
   }

   return response.games;
}

export {GetRecentlyPlayedGames};
