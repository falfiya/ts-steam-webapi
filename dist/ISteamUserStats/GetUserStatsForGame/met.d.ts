import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
import { app_id } from "../../shared/app_id";
declare function GetUserStatsForGame(this: session, user: steam_id, game_id: app_id): Promise<{
    gameName: string;
    steamID: steam_id;
    achievements: import("./user_achievement").user_achievement[];
    stats: import("./user_stat").user_stat[];
}>;
export { GetUserStatsForGame };
