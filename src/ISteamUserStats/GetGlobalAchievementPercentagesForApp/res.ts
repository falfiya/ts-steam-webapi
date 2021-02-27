import {o_response} from "../../shared/o_response";
import {global_achievement_percent} from "./global_achievement_percent";

type res = o_response<{
   achievementpercentages: {
      achievements: global_achievement_percent[];
   };
}>;

export = res;
