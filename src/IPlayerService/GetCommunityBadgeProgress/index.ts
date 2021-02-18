import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {basic_response} from "../../api/basic_response";
import {GetCommunityBadgeProgress_response} from "./response";

import {IPlayerService} from "..";
import {GetCommunityBadgeProgress_method} from "./method";

function GetCommunityBadgeProgress(user: steam_id):
basic_response<GetCommunityBadgeProgress_response>;

function GetCommunityBadgeProgress(this: steam_session, user: steam_id):
basic_response<GetCommunityBadgeProgress_response>
{
   const params = `steamid=${user}`;

   return this.session_api_call(IPlayerService, GetCommunityBadgeProgress_method, "v1", params);
}

export {GetCommunityBadgeProgress};
