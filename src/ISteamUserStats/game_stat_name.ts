import {final} from "../core/final";

export type game_stat_name_t = {readonly [final]: "game_stat_name"};
/** This is a game-local statistic name */
export type game_stat_name = string & game_stat_name_t;
