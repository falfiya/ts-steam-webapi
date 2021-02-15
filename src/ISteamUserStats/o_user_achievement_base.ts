import {achievement_name} from "./achievement_name";

export type o_user_achievement_base<key extends string> =
   & {[achievement_key in key]: achievement_name}
   & {achieved: 0 | 1};
