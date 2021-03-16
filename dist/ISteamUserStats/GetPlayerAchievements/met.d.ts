import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
import { app_id } from "../../shared/app_id";
declare function GetPlayerAchievements(this: session, user: steam_id, game_id: app_id): Promise<{
    gameName: string;
    steamID: steam_id;
    achievements: import("./user_achievement_unlock").user_achievement_unlock[];
    success: true;
}>;
export { GetPlayerAchievements };
