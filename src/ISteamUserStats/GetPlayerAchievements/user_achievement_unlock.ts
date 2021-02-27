import {epoch} from "../../core/epoch";
import {achievement_name} from "../achievement_name";

export type user_achievement_unlock = {
   apiname: achievement_name;
   achieved: 0 | 1;
   unlocktime: epoch;
};
