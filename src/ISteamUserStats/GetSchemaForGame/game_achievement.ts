import {url_akami} from "../../shared/url_akami";
import {url_app_image} from "../../shared/url_app_image";
import {achievement_name} from "../achievement_name";

export type game_achievement = {
   name: achievement_name;
   defaultvalue: number;
   displayName: string;
   hidden: 0 | 1;
   description: string;
   icon: url_akami & url_app_image;
   icongray: url_akami & url_app_image;
};
