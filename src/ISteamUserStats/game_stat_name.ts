import {final, newtype} from "../core/newtype";

type game_stat_name_t = {
   [final]: "game_stat_name";
   [newtype]: game_stat_name_t;
};
/** This is a game-local statistic name */
export type game_stat_name = string & game_stat_name_t;
