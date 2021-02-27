import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "..";
import {api_method} from "../../api/api_method";
const method = "GetPlayerBans" as api_method;

async function GetPlayerBans(this: steam_session, users: steam_id[]) {
   const params = `steamids=${users.join(',')}`;

   const res = await this.api_call<import("./res")>(
      ISteamUser,
      method,
      "v1",
      params,
   );

   return res.players;
}

export {GetPlayerBans};
