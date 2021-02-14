import {o_user_achievement_base} from "../o_user_achievement_base";
import {o_unlock_time} from "./o_unlock_time";

export type user_achievement_unlock =
   & o_user_achievement_base<"apiname">
   & o_unlock_time;
