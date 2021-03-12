import {final} from "../core/final";
import {unique_object} from "../core/newtype";

type game_stat_name_t = {
   [final]: "game_stat_name";
   [unique_object]: game_stat_name_t;
};
/** This is a game-local statistic name */
export type game_stat_name = string & game_stat_name_t;
