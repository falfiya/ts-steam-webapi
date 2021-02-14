// function params
import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";
import {GetOwnedGames_options} from "./options";

// function return
import {basic_response} from "../../api/basic_response";
import {GetOwnedGames_response} from "./response";

import {owned_game} from "./owned_game";
import {owned_game_ex} from "./owned_game_ex";

// stuff used inside the function
import {IPlayerService} from "..";
import {m_GetOwnedGames} from "./method";
import {opts_to_params} from "./options";

function GetOwnedGames(user: steam_id):
basic_response<GetOwnedGames_response<owned_game>>;

function GetOwnedGames(
   user: steam_id,
   opts: GetOwnedGames_options & {include_appinfo?: false},
):
basic_response<GetOwnedGames_response<owned_game>>;

function GetOwnedGames(
   user: steam_id,
   opts: GetOwnedGames_options & {include_appinfo: true},
):
basic_response<GetOwnedGames_response<owned_game_ex>>;

function GetOwnedGames(this: steam_session, user: steam_id, opts?: GetOwnedGames_options):
basic_response<GetOwnedGames_response<owned_game | owned_game_ex>>
{
   var params = `steamid=${user}`;

   if (opts) {
      params += opts_to_params(opts);
   }

   return this.session_api_call(IPlayerService, m_GetOwnedGames, "v1", params);
}

export {GetOwnedGames};
