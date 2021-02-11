import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";

import {o_player_level} from "../o_player_level";

import {IPlayerService} from "..";
import {GetSteamLevel_method} from "./method";

function GetSteamLevel(this: steam_session, user: steam_id):
Promise<o_player_level>
{
   const params = `steamid=${user}`;

   return this.api_call(IPlayerService, GetSteamLevel_method, "v1", params);
}

export {GetSteamLevel};
