import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
declare function GetUserGroupList(this: session, user: steam_id): Promise<import("./group").group[]>;
export { GetUserGroupList };
