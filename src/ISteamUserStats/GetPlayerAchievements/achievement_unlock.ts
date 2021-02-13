import {achievement_name} from "../../api/achievement_name";
import {epoch} from "../../core/epoch";

export type achievement_unlock = {
   apiname: achievement_name;
   achieved: 0 | 1;
   unlocktime: epoch;
};
