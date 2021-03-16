import {uint} from "../../core/data_types";

type res = {
   response?: {
      player_count?: uint;
      result: number;
   };
};

export = res;
