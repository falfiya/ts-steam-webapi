import {o_game_stat_name} from "../o_game_stat_name";
import {uint} from "../../core/numerals";

export type user_stat =
   & o_game_stat_name
   & {value: uint};
