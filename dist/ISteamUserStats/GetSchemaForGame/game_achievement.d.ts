import { achievement_name } from "../achievement_name";
import { app_id } from "../../shared/app_id";
import { app_image_id } from "../../shared/app_image_id";
import { app_image } from "../../shared/app_image";
import { ih_steamcdn_akamihd } from "../../shared/image_hosts";
export declare type game_achievement<game_id extends app_id, icon_id extends app_image_id, icon_grey_id extends app_image_id> = {
    name: achievement_name;
    defaultvalue: number;
    displayName: string;
    hidden: 0 | 1;
    description: string;
    icon: app_image<ih_steamcdn_akamihd, game_id, icon_id>;
    icongray: app_image<ih_steamcdn_akamihd, game_id, icon_grey_id>;
};
