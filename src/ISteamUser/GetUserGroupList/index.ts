import {steam_session} from "../../steam_session";
import {steam_id} from "../../shared/steam_id";

import {ISteamUser} from "..";
import {GetUserGroupList_method} from "./method";
import {GetUserGroupList_response} from "./response";

async function GetUserGroupList(this: steam_session, user: steam_id) {
   const {response} = await this.api_call<GetUserGroupList_response>(
      ISteamUser,
      GetUserGroupList_method,
      "v1",
      `steamid=${user}`
   );

   if (response === undefined) {
      throw new Error("GetUserGroupList: response is undefined!");
   }

   return response.groups;
}

export {GetUserGroupList};
