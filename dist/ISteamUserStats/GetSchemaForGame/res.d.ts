import { app_id } from "../../shared/app_id";
import { app_image_id } from "../../shared/app_image_id";
import { game_achievement } from "./game_achievement";
import { game_stat } from "./game_stat";
declare type res = {
    game: {
        gameName: string;
        gameVersion: string;
        availableGameStats: {
            achievements: game_achievement<app_id, app_image_id, app_image_id>[];
            stats: game_stat[];
        };
    };
};
export = res;
