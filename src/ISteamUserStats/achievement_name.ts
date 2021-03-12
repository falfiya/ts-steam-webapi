import {final} from "../core/final";
import {unique_object} from "../core/newtype";

type achievement_name_t = {
   [final]: "achievement_name";
   [unique_object]: achievement_name_t;
};
/** This is a game-local achievement name */
export type achievement_name = string & achievement_name_t;
