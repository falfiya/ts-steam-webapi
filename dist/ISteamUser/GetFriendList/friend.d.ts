import { steam_id } from "../../shared/steam_id";
import { user_relationship } from "./user_relationship";
import { epoch } from "../../core/epoch";
export declare type friend = {
    steamid: steam_id;
    relationship: user_relationship;
    friend_since: epoch;
};
