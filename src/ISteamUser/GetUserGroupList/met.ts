import {isteam_session} from "../../shared/isteam_session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "../interface";
import {api_method} from "../../api/api_method";
const method = "GetUserGroupList" as api_method;

async function GetUserGroupList(this: isteam_session, user: steam_id) {
   const {response} = await this.api_call<import("./res")>(
      ISteamUser,
      method,
      "v1",
      `steamid=${user}`
   );

   if (response === undefined) {
      throw new Error("GetUserGroupList: response is undefined!");
   }

   return response.groups;
}

export {GetUserGroupList};
