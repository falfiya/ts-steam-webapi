import {final, newtype} from "../core/newtype";

type app_image_id_t = {
   [final]: "app_image_id";
   [newtype]: app_image_id_t;
};
export type app_image_id = string & app_image_id_t;
