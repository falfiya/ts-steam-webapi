import {global_achievement_percent} from "./global_achievement_percent";

type res = {
   response?: {
      achievementpercentages: {
         achievements: global_achievement_percent[];
      };
   };
};

export = res;
