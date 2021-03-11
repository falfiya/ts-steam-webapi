import {final} from "../core/final";

export type achievement_name_t = {readonly [final]: "achievement_name"};
/** This is a game-local achievement name */
export type achievement_name = string & achievement_name_t;
