import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {GetCommunityBadgeProgress_response} from "./response";

import {IPlayerService} from "..";
import {GetCommunityBadgeProgress_method} from "./method";

async function GetCommunityBadgeProgress(this: steam_session, user: steam_id) {
   const {response} = await this.api_call<GetCommunityBadgeProgress_response>(
      IPlayerService,
      GetCommunityBadgeProgress_method,
      "v1",
      `steamid=${user}`,
   );

   if (response === undefined) {
      throw new Error("GetCommunityBadgeProgress: response is undefined!");
   }

   return response.quests;
}

export {GetCommunityBadgeProgress};
