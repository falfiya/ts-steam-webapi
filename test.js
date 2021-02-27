const {steam_session, GetScrapedGames} = require(".");

const ss = new steam_session(require("./raw/key"));

void async function main() {
   const games = await GetScrapedGames("https://steamcommunity.com/id/coalpha");
   console.log(games);
}();
