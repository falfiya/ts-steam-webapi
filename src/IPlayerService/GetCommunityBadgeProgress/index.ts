import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {basic_response} from "../../api/basic_response";
import {GetCommunityBadgeProgress_response} from "./response";
import {scalar} from "../../core/scalar";

import {IPlayerService} from "..";
import {GetCommunityBadgeProgress_method} from "./method";

function GetCommunityBadgeProgress(user: steam_id):
basic_response<GetCommunityBadgeProgress_response>;
/** No idea what the badgeid is */
function GetCommunityBadgeProgress(user: steam_id, badge_id: scalar):
basic_response<object>;

function GetCommunityBadgeProgress(this: steam_session, user: steam_id, badge_id?: any):
basic_response<GetCommunityBadgeProgress_response>
{
   var params = `steamid=${user}`;

   if (badge_id !== undefined) {
      params += `&badgeid${badge_id}`;
   }

   return this.session_api_call(IPlayerService, GetCommunityBadgeProgress_method, "v1", params);
}

export {GetCommunityBadgeProgress};
