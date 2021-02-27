import {steam_id} from "../../shared/steam_id";
import {user_achievement} from "./user_achievement";
import {user_stat} from "./user_stat";

type res = {
   playerstats?: {
      gameName: string;
      steamID: steam_id;
      achievements: user_achievement[];
      stats: user_stat[]
   };
};

export = res;
