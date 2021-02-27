import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "..";
import {GetPlayerBans_method} from "./method";
import {GetPlayerBans_response} from "./response";

async function GetPlayerBans(this: steam_session, users: steam_id[]) {
   const params = `steamids=${users.join(',')}`;

   const res = await this.api_call<GetPlayerBans_response>(
      ISteamUser,
      GetPlayerBans_method,
      "v1",
      params,
   );

   return res.players;
}

export {GetPlayerBans};
