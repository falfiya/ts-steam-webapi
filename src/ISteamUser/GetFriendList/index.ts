import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";
import {user_relationship} from "./user_relationship";

import {ISteamUser} from "..";
import {api_method} from "../../api/api_method";
const method = "GetFriendList" as api_method;

async function GetFriendList(this: steam_session, user: steam_id, relationship?: user_relationship) {
   var params = `steamid=${user}`;

   if (relationship) {
      params += `&relationship=${relationship}`;
   }

   const res = await this.api_call<import("./res")>(
      ISteamUser,
      method,
      "v1",
      params,
   );

   // 500s on error so we don't have to check, I think

   return res.friendslist.friends;
}

export {GetFriendList};
