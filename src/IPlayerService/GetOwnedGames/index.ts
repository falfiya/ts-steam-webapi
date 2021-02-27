// function params
import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";
import {GetOwnedGames_options} from "./options";

// function return
import {o_game_count} from "./o_game_count";
import {o_owned_games} from "./o_owned_games";
import {owned_game} from "./owned_game";
import {owned_game_ex} from "./owned_game_ex";

// stuff used inside the function
import {IPlayerService} from "..";
import {m_GetOwnedGames} from "./method";
import {opts_to_params} from "./options";
import {GetOwnedGames_response} from "./response";

function GetOwnedGames(user: steam_id):
Promise<owned_game[]>;

function GetOwnedGames(
   user: steam_id,
   opts: GetOwnedGames_options & {include_appinfo?: false},
):
Promise<owned_game[]>;

function GetOwnedGames(
   user: steam_id,
   opts: GetOwnedGames_options & {include_appinfo: true},
):
Promise<owned_game_ex[]>;

async function GetOwnedGames(this: steam_session, user: steam_id, opts?: GetOwnedGames_options):
Promise<(owned_game | owned_game_ex)[]>
{
   var params = `steamid=${user}`;

   if (opts) {
      params += opts_to_params(opts);
   }

   const {response} = await this.api_call<GetOwnedGames_response>(
      IPlayerService,
      m_GetOwnedGames,
      "v1",
      params
   );

   if (response === undefined) {
      throw new Error("GetOwnedGames: response is undefined!");
   }

   return response.games;
}

export {GetOwnedGames};
