import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {o_has_friends_list} from "./o_has_friends_list";

import {ISteamUser} from "..";
import {GetFriendList_method} from "./method";
import {user_relationship} from "./user_relationship";

function GetFriendList(this: steam_session, user: steam_id, relationship?: user_relationship):
Promise<o_has_friends_list>
{
   var params = `steamid=${user}`;

   if (relationship) {
      params += `&relationship=${relationship}`;
   }

   return this.session_api_call(ISteamUser, GetFriendList_method, "v1", params);
}

export {GetFriendList};
