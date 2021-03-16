import { session } from "../../shared/session";
import { steam_id } from "../../shared/steam_id";
import { user_relationship } from "./user_relationship";
declare function GetFriendList(this: session, user: steam_id, relationship?: user_relationship): Promise<import("./friend").friend[]>;
export { GetFriendList };
