import {steam_id} from "../../api/steam_id";
import {user_relationship} from "../../api/user_relationship";
import {epoch} from "../../core/epoch";

export type friend = {
   steamid: steam_id;
   relationship: user_relationship;
   friend_since: epoch;
};
