import fetch from "node-fetch";

import {app_id} from "../shared/app_id";
import {user_url} from "../shared/user_url";
import {scraped_game} from "./scraped_game";

const RG_GAMES_0 = "var rgGames = ";
const RG_GAMES_1 = /(?<=]);\s*var rgChangingGames/;

export async function GetScrapedGames(profile: user_url): Promise<scraped_game<app_id>[]> {
   const html = await fetch(`${profile}/games/?tab=all`).then(res => res.text());
   const games_beg = html.indexOf(RG_GAMES_0) + RG_GAMES_0.length;
   const games_end = html.search(RG_GAMES_1);
   const games_dat = html.slice(games_beg, games_end);
   return JSON.parse(games_dat);
}
