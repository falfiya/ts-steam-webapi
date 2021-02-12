import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";
import {uint} from "../../core/basetypes";

import {IPlayerService} from "..";
import {GetRecentlyPlayedGames_method} from "./method";
import {basic_response} from "../../api/basic_response";

import {recently_played_game} from "./recently_played_game";
import {o_total_count} from "../o_total_count";

type o_has_recently_played_games = {games: recently_played_game[]};

function GetRecentlyPlayedGames(this: steam_session, user: steam_id, count?: uint):
basic_response<o_total_count & o_has_recently_played_games>
{
   var params = `steamid=${user}`;
   if (count !== undefined) {
      params += `&count=${count}`;
   }

   return this.session_api_call(IPlayerService, GetRecentlyPlayedGames_method, "v1", params);
}

export {GetRecentlyPlayedGames};
