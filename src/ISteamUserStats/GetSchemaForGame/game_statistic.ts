import {game_stat_name} from "../../api/game_stat_name";

export type game_statistic = {
   name: game_stat_name;
   defaultvalue: number;
   displayName: string;
};
