import fetch from "node-fetch";
import {steam_id} from "../../shared/steam_id";

import {user_url} from "../../shared/user_url";
import {scraped_game} from "./scraped_game";

const RG_GAMES_START = "var rgGames = ";
const RG_GAMES_END = /(?<=]);\s*var rgChangingGames/;

async function GetScrapedGames(profile: user_url<steam_id, string>):
Promise<scraped_game[]>
{
   const html = await fetch(`${profile}/games/?tab=all`).then(res => res.text());
   const games_beg = html.indexOf(RG_GAMES_START) + RG_GAMES_START.length;
   const games_end = html.search(RG_GAMES_END);
   const games_dat = html.slice(games_beg, games_end);
   return JSON.parse(games_dat);
}

export {GetScrapedGames};
