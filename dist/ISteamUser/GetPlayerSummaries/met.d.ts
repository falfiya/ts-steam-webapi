import { steam_id } from "../../shared/steam_id";
import { player_summary } from "./player_summary";
declare function GetPlayerSummaries<A extends steam_id>(users: [A]): Promise<[player_summary<A>]>;
declare function GetPlayerSummaries<A extends steam_id, B extends steam_id>(users: [A, B]): Promise<[player_summary<A>, player_summary<B>]>;
declare function GetPlayerSummaries<A extends steam_id, B extends steam_id, C extends steam_id>(users: [A, B, C]): Promise<[player_summary<A>, player_summary<B>, player_summary<C>]>;
export { GetPlayerSummaries };
