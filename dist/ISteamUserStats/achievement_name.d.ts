import { final, unique_symbol } from "../core/newtype";
declare type achievement_name_t = {
    [final]: "achievement_name";
    [unique_symbol]: achievement_name_t;
};
/** This is a game-local achievement name */
export declare type achievement_name = string & achievement_name_t;
export {};
