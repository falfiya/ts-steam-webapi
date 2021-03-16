import {session} from "../../shared/session";
import {steam_id} from "../../shared/steam_id";
import {user_relationship} from "./user_relationship";

import {ISteamUser} from "../interface";
import {api_method} from "../../api/api_method";
const method = "GetFriendList" as api_method;

async function GetFriendList(this: session, user: steam_id, relationship?: user_relationship) {
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
