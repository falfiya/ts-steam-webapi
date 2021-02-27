import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {IPlayerService} from "..";
import {GetBadges_method} from "./method";
import {GetBadge_response} from "./response";

async function GetBadges(this: steam_session, user: steam_id) {
   const {response} = await this.api_call<GetBadge_response>(
      IPlayerService,
      GetBadges_method,
      "v1",
      `steamid=${user}`
   );

   if (response === undefined) {
      throw new Error("GetBadges: response is undefined!");
   }

   return response;
}

export {GetBadges};
