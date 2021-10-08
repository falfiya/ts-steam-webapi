import {final, newtype} from "../core/newtype";

type achievement_name_t = {
   [final]: "achievement_name";
   [newtype]: achievement_name_t;
};
/** This is a game-local achievement name */
export type achievement_name = string & achievement_name_t;
