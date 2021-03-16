import {final, unique_symbol} from "../core/newtype";

type achievement_name_t = {
   [final]: "achievement_name";
   [unique_symbol]: achievement_name_t;
};
/** This is a game-local achievement name */
export type achievement_name = string & achievement_name_t;
