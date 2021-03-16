import {session} from "../../shared/session";
import {steam_id} from "../../shared/steam_id";

import {IPlayerService} from "../interface";
import {api_method} from "../../api/api_method";
const method = "GetBadges" as api_method;

async function GetBadges(this: session, user: steam_id) {
   const params = `steamid=${user}`;

   const {response} = await this.api_call<import("./res")>(
      IPlayerService,
      method,
      "v1",
      params,
   );

   if (response === undefined) {
      throw new Error("GetBadges: response is undefined!");
   }

   return response;
}

export {GetBadges};
