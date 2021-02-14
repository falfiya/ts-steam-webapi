import {app_id} from "./api/app_id";
import {to_steam_id} from "./api/steam_id";
import {steam_session} from "./mod";

const key = require("../raw/key");

const session = new steam_session(key);

const coalpha_id = to_steam_id("76561198280673707");
const celeste = 504230 as app_id;

void async function main() {
   const {game} = await session.GetSchemaForGame(celeste);
   const {achievements} = game.availableGameStats;
   console.log(`There are ${achievements.length} achievements for version ${game.gameVersion} of ${game.gameName}`);
   for (const achi of achievements) {
      console.log(`${achi.displayName}: ${achi.hidden ? "[redacted]" : achi.description}`);
   }
}();
