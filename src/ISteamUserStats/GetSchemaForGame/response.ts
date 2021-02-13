import {game_achievement} from "./game_achievement";
import {game_statistic} from "./game_statistic";

export type GetSchemaForGame_response = {
   game: {
      gameName: string;
      gameVersion: string;
      availableGameStats: {
         achievements: game_achievement[];
         stats: game_statistic[];
      };
   };
};
