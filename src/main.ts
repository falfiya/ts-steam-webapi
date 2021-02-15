import {app_id} from "./shared/app_id";
import {to_steam_id} from "./shared/steam_id";
import {steam_session} from "./mod";

const key = require("../raw/key");

const session = new steam_session(key);

const coalpha = to_steam_id("76561198280673707");
const celeste = 504230 as app_id;

void async function main() {
   const {groups} = (await session.GetUserGroupList(coalpha)).response;
   console.log(`coalpha is in ${groups.length} groups`);
   for (const group of groups) {
      console.log(group.gid);
   }
}();
