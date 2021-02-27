import {achievement_name} from "../achievement_name";

/** Very similar to ISteamUserStats/GetPlayerAchievements/user_achievement_unlock */
export type user_achievement = {name: achievement_name; achieved: 0 | 1};
