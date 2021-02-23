import {steam_session} from "./lib";
import {app_id} from "./shared/app_id";

const ss = new steam_session("");

void async function main() {
   const res = await ss.GetSchemaForGame(1 as app_id);
   res.game.availableGameStats.achievements[0].icon
}();
