import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
import { uint } from "../../core/data_types";
declare function GetRecentlyPlayedGames(this: session, user: steam_id, count?: uint): Promise<import("..").game[]>;
export { GetRecentlyPlayedGames };
