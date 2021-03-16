import {uint} from "../../core/data_types";
import {badge} from "./badge";

type res = {
   response?: {
      badges: badge[];
      player_xp: uint;
      player_level: uint;
      player_xp_needed_to_level_up: uint;
      player_xp_needed_current_level: uint;
   };
};

export = res;
