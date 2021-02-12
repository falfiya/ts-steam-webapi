// function params
import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";
import {GetOwnedGames_options} from "./options";

// function return
import {o_total_count} from "../o_total_count";
import {o_has_owned_games} from "./o_has_owned_games";

type response<owned_game_t> =
   Promise<o_total_count & o_has_owned_games<owned_game_t>>;

import {owned_game} from "./owned_game";
import {owned_game_ex} from "./owned_game_ex";

// stuff used inside the function
import {IPlayerService} from "..";
import {m_GetOwnedGames} from "./method";
import {opts_to_params} from "./options";

function GetOwnedGames(user: steam_id):
response<owned_game>;

function GetOwnedGames(
   user: steam_id,
   opts: GetOwnedGames_options & {include_appinfo?: false},
):
response<owned_game>;

function GetOwnedGames(
   user: steam_id,
   opts: GetOwnedGames_options & {include_appinfo: true},
):
response<owned_game_ex>;

function GetOwnedGames(this: steam_session, user: steam_id, opts?: GetOwnedGames_options):
response<owned_game | owned_game_ex>
{
   var params = `steamid=${user}`;

   if (opts) {
      params += opts_to_params(opts);
   }

   return this.api_call(IPlayerService, m_GetOwnedGames, "v1", params);
}

export {GetOwnedGames};
