import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
declare function GetCommunityBadgeProgress(this: session, user: steam_id): Promise<import("./quest").quest[]>;
export { GetCommunityBadgeProgress };
