import {o_game_stat_name} from "../o_game_stat_name";

export type game_stat =
   & o_game_stat_name
   & {defaultvalue: number; displayName: string};
