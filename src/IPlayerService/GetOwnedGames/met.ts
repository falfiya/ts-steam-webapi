// function params
import {isteam_session} from "../../shared/isteam_session";
import {steam_id} from "../../shared/steam_id";
import {GetOwnedGames_options} from "./options";

// function return
import {owned_game} from "./owned_game";
import {owned_game_ex} from "./owned_game_ex";

// stuff used inside the function
import {IPlayerService} from "../interface";
import {opts_to_params} from "./options";
import {api_method} from "../../api/api_method";
const method = "GetOwnedGames" as api_method;

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

async function GetOwnedGames(this: isteam_session, user: steam_id, opts?: GetOwnedGames_options):
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
      throw new Error("GetOwnedGames: response is undefined!");
   }

   return response.games;
}

export {GetOwnedGames};
