import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";
import {badge_id} from "../../api/badge_id";

import {basic_response} from "../../api/basic_response";
import {o_quests} from "./o_quests";

import {IPlayerService} from "..";
import {GetCommunityOwnedBadges_method} from "./method";

function GetCommunityOwnedBadges(user: steam_id): basic_response<o_quests>;
function GetCommunityOwnedBadges(user: steam_id, badge_id: badge_id): basic_response<any>;

function GetCommunityOwnedBadges(this: steam_session, user: steam_id, badge_id?: badge_id):
basic_response<o_quests>
{
   var params = `steamid=${user}`;

   if (badge_id !== undefined) {
      params += `&badgeid${badge_id}`;
   }

   return this.session_api_call(IPlayerService, GetCommunityOwnedBadges_method, "v1", params);
}

export {GetCommunityOwnedBadges};
