import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";
import {badge_id} from "../../api/badge_id";

import {o_has_quests} from "./o_has_quests";

import {IPlayerService} from "..";
import {GetCommunityOwnedBadges_method} from "./method";

function GetCommunityOwnedBadges(user: steam_id): Promise<o_has_quests>;
function GetCommunityOwnedBadges(user: steam_id, badge_id: badge_id): Promise<any>;

function GetCommunityOwnedBadges(this: steam_session, user: steam_id, badge_id?: badge_id):
Promise<o_has_quests>
{
   var params = `steamid=${user}`;

   if (badge_id !== undefined) {
      params += `&badgeid${badge_id}`;
   }

   return this.session_api_call(IPlayerService, GetCommunityOwnedBadges_method, "v1", params);
}

export {GetCommunityOwnedBadges};
