import {session} from "../../shared/session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "../interface";
import {api_method} from "../../api/api_method";
import {player_summary} from "./player_summary";

const method = "GetPlayerSummaries" as api_method;

function GetPlayerSummaries<A extends steam_id>
(users: [A]): Promise<[player_summary<A>]>;

function GetPlayerSummaries<A extends steam_id, B extends steam_id>
(users: [A, B]): Promise<[player_summary<A>, player_summary<B>]>;

function GetPlayerSummaries<A extends steam_id, B extends steam_id, C extends steam_id>
(users: [A, B, C]): Promise<[player_summary<A>, player_summary<B>, player_summary<C>]>;

function GetPlayerSummaries(users: steam_id[]): Promise<player_summary[]>;

async function GetPlayerSummaries(this: session, users: steam_id[]) {
   const params = `steamids=${users.join(',')}`;

   const {response} = await this.api_call<import("./res")>(
      ISteamUser,
      method,
      "v2",
      params,
   );

   if (response === undefined) {
      return [];
   }

   return response.players;
}

export {GetPlayerSummaries};

