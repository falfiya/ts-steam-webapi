import { steam_id } from "../../shared/steam_id";
import { user_url } from "../../shared/user_url";
import { scraped_game } from "./scraped_game";
declare function GetScrapedGames(profile: user_url<steam_id, string>): Promise<scraped_game[]>;
export { GetScrapedGames };
