import {session} from "../../shared/session";
import {app_id} from "../../shared/app_id";
import {l10n} from "./l10n";

import {ISteamUserStats} from "../interface";
import {api_method} from "../../api/api_method";
const method = "GetSchemaForGame" as api_method;

async function GetSchemaForGame(this: session, game_id: app_id, localization?: l10n) {
   var params = `appid=${game_id}`;

   if (localization) {
      params += `&l=${localization}`;
   }

   const {game} = await this.api_call<import("./res")>(
      ISteamUserStats,
      method,
      "v2",
      params
   );

   return game;
}

export {GetSchemaForGame};
