import * as S from "./lib";

const coalpha_profile = "https://steamcommunity.com/id/coalpha";
void async function main() {
   const games = await S.GetScrapedGames(coalpha_profile);
   console.log(games);
}();
