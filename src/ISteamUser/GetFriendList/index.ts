import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "..";
import {GetFriendList_method} from "./method";
import {user_relationship} from "./user_relationship";
import {GetFriendList_response} from "./response";

async function GetFriendList(this: steam_session, user: steam_id, relationship?: user_relationship) {
   var params = `steamid=${user}`;

   if (relationship) {
      params += `&relationship=${relationship}`;
   }

   const res = await this.api_call<GetFriendList_response>(
      ISteamUser,
      GetFriendList_method,
      "v1",
      params,
   );

   // 500s on error so we don't have to check, I think

   return res.friendslist.friends;
}

export {GetFriendList};
