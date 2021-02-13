import {achievement_name} from "../../api/achievement_name";
import {akami_app_image_url} from "../../api/akami_app_image_url";

export type game_achievement = {
   name: game_achievement;
   defaultvalue: number;
   displayName: string;
   hidden: 0 | 1;
   description: string;
   icon: akami_app_image_url;
   icongray: akami_app_image_url;
};
