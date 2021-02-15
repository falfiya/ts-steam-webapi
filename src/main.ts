import {app_id} from "./api/app_id";
import {to_steam_id} from "./api/steam_id";
import {steam_session} from "./mod";

const key = require("../raw/key");

const session = new steam_session(key);

const coalpha = to_steam_id("76561198280673707");
const celeste = 504230 as app_id;

void async function main() {
   const {friends} = (await session.GetFriendList(coalpha)).friendslist;
   console.log(`coalpha has ${friends.length} friends:`);
   const friend_ids = friends.map(f => f.steamid);
   const friend_summaries = await session.GetPlayerSummaries(friend_ids);
   for (const {personaname, realname} of friend_summaries.response.players) {
      process.stdout.write(personaname);
      if (realname) {
         process.stdout.write(` (${realname})`);
      }
      process.stdout.write('\n');
   }
}();
