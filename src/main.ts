import {app_id} from "./api/app_id";
import {to_steam_id} from "./api/steam_id";
import {to_date} from "./core/epoch";
import {steam_session} from "./mod";

const key = require("../raw/key");

const session = new steam_session(key);

const coalpha_id = to_steam_id("76561198280673707");
const celeste = 504230 as app_id;

void async function main() {
   const {playerstats} = await session.GetPlayerAchievements(coalpha_id, celeste);
   if (playerstats.success) {
      const {
         steamID,
         gameName,
         achievements,
      } = playerstats;
      console.log(`${steamID}'s achievements for ${gameName}`);
      for (const achi of achievements) {
         if (achi.achieved) {
            console.log(`unlocked ${achi.apiname} at ${to_date(achi.unlocktime)}`);
         } else {
            console.log(`  locked ${achi.apiname}`);
         }
      }
   } else {
      console.error(playerstats.error);
   }
}();
