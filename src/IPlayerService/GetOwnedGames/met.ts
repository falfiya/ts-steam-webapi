// function params
import {session} from "../../shared/session";
import {steam_id} from "../../shared/steam_id";
import {opts} from "./opts";

// function return
import {owned_game, owned_game_ex} from "./owned_game";

// stuff used inside the function
import {IPlayerService} from "../interface";
import {opts_to_params} from "./opts";
import {api_method} from "../../api/api_method";
const method = "GetOwnedGames" as api_method;

function GetOwnedGames(user: steam_id):
Promise<owned_game[]>;

function GetOwnedGames(
   user: steam_id,
   opts: opts & {include_appinfo?: false},
):
Promise<owned_game[]>;

function GetOwnedGames(
   user: steam_id,
   opts: opts & {include_appinfo: true},
):
Promise<owned_game_ex[]>;

async function GetOwnedGames(this: session, user: steam_id, opts?: opts):
Promise<(owned_game | owned_game_ex)[]>
{
   var params = `steamid=${user}`;

   if (opts) {
      params += opts_to_params(opts);
   }

   const {response} = await this.api_call<import("./res")>(
      IPlayerService,
      method,
      "v1",
      params
   );

   if (response === undefined) {
      return [];
   }

   return response.games;
}

export {GetOwnedGames};
