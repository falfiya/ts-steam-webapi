import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
declare function GetPlayerBans(this: session, users: steam_id[]): Promise<import("./player_ban_data").player_ban_data[]>;
export { GetPlayerBans };
