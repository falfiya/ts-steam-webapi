import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
declare function GetBadges(this: session, user: steam_id): Promise<{
    badges: import("./badge").badge[];
    player_xp: import("../../core/data_types").uint;
    player_level: import("../../core/data_types").uint;
    player_xp_needed_to_level_up: import("../../core/data_types").uint;
    player_xp_needed_current_level: import("../../core/data_types").uint;
}>;
export { GetBadges };
