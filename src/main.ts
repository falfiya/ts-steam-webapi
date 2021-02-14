import {app_id} from "./api/app_id";
import {to_steam_id} from "./api/steam_id";
import {steam_session} from "./mod";

const key = require("../raw/key");

const session = new steam_session(key);

const coalpha = to_steam_id("76561198280673707");
const celeste = 504230 as app_id;

void async function main() {
   const {playerstats} = await session.GetUserStatsForGame(coalpha, celeste);
   const {steamID, gameName, stats} = playerstats;
   console.log(`${steamID}'s stats for ${gameName} are: `);
   for (const {name, value} of stats) {
      console.log(`${name}: ${value}`);
   }
}();
