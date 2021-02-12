import {app_id} from "./api/app_id";
import {to_steam_id} from "./api/steam_id";
import {steam_session, GetGlobalAchievementPercentagesForApp} from "./mod";

const key = require("../raw/key");

const instance = new steam_session(key);

const coalpha_id = to_steam_id("76561198280673707");
const celeste = 504230 as app_id;

void async function main() {
   // const res = await instance.GetBadges(coalpha_id);
   const res = await GetGlobalAchievementPercentagesForApp(celeste);
   res.achievementpercentages.achievements.forEach(({name, percent}) => {
      console.log("name: " + name);
      console.log("percent: %.2f", percent);
   })
}();
