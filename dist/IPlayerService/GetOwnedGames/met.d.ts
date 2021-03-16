import { steam_id } from "../../shared/steam_id";
import { opts } from "./opts";
import { owned_game, owned_game_ex } from "./owned_game";
declare function GetOwnedGames(user: steam_id): Promise<owned_game[]>;
declare function GetOwnedGames(user: steam_id, opts: opts & {
    include_appinfo?: false;
}): Promise<owned_game[]>;
declare function GetOwnedGames(user: steam_id, opts: opts & {
    include_appinfo: true;
}): Promise<owned_game_ex[]>;
export { GetOwnedGames };
