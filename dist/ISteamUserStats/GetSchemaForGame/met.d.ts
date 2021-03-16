import { session } from "../../shared/session";
import { app_id } from "../../shared/app_id";
import { l10n } from "./l10n";
declare function GetSchemaForGame(this: session, game_id: app_id, localization?: l10n): Promise<{
    gameName: string;
    gameVersion: string;
    availableGameStats: {
        achievements: import("./game_achievement").game_achievement<app_id, import("../../lib").app_image_id, import("../../lib").app_image_id>[];
        stats: import("./game_stat").game_stat[];
    };
}>;
export { GetSchemaForGame };
