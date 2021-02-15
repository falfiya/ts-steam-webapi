import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";

import {ISteamUser} from "..";
import {GetUserGroupList_method} from "./method";
import {basic_response} from "../../api/basic_response";
import {GetUserGroupList_response} from "./response";

function GetUserGroupList(this: steam_session, user: steam_id):
basic_response<GetUserGroupList_response>
{
   const params = `steamid=${user}`;

   return this.session_api_call(ISteamUser, GetUserGroupList_method, "v1", params);
}

export {GetUserGroupList};
