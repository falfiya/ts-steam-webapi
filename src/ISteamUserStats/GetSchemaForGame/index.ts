import {steam_session} from "../../steam_session";
import {app_id} from "../../shared/app_id";
import {l10n} from "./l10n";

import {GetSchemaForGame_method} from "./method";

import {ISteamUserStats} from "..";
import {GetSchemaForGame_response} from "./response";

function GetSchemaForGame(this: steam_session, game_id: app_id, localization?: l10n):
Promise<GetSchemaForGame_response>
{
   var params = `appid=${game_id}`;

   if (localization) {
      params += `&l=${localization}`;
   }

   return this.session_api_call(ISteamUserStats, GetSchemaForGame_method, "v2", params);
}

export {GetSchemaForGame};
