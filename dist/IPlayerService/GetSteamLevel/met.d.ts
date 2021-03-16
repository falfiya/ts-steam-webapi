import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
declare function GetSteamLevel(this: session, user: steam_id): Promise<import("../../core/data_types").uint>;
export { GetSteamLevel };
