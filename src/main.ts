import {to_steam_id} from "./api/steam_id";
import {steam_session} from "./steam_session";

const key = require("../raw/key");

const instance = new steam_session(key);

void async function main() {
   const coalpha_id = to_steam_id("76561198280673707");
   const {games} = await instance.GetOwnedGames(coalpha_id, {include_appinfo: true});
}();
