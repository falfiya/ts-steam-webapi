import {isteam_session} from "../../shared/isteam_session";
import {steam_id} from "../../shared/steam_id";

import {IPlayerService} from "../interface";
import {api_method} from "../../api/api_method";
const method = "GetBadges" as api_method;

async function GetBadges(this: isteam_session, user: steam_id) {
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

export {badge} from "./badge";
export {community_item_id} from "./community_item_id";
export {o_badges} from "./o_badges";
export {o_player_xp} from "./o_player_xp";
