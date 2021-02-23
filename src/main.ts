import {to_date} from "./core/epoch";
import {GetScrapedGames} from "./lib";

void async function main() {
   const games = await GetScrapedGames("https://steamcommunity.com/id/coalpha");
   console.log(`coalpha has played ${games.length} games`);
   games.sort((a, b) => - a.last_played + b.last_played);
   for (const game of games) {
      console.log(`${game.name} last played on ${to_date(game.last_played)}`);
   }
}();
