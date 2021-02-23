import {achievement_name} from "../achievement_name";
import {steamcdn_akami} from "../../shared/steamcdn_akami";
import {app_id} from "../../shared/app_id";
import {app_image_id} from "../../shared/app_image_id";
import {app_image} from "../../shared/app_image";

export type game_achievement<
   game_id extends app_id,
   icon_id extends app_image_id,
   icon_grey_id extends app_image_id,
> = {
   name: achievement_name;
   defaultvalue: number;
   displayName: string;
   hidden: 0 | 1;
   description: string;
   icon: app_image<steamcdn_akami, game_id, icon_id>;
   icongray: app_image<steamcdn_akami, game_id, icon_grey_id>;
};
