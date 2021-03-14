import {final} from "../core/final";
import {unique_symbol} from "../core/newtype";

type app_image_id_t = {
   [final]: "app_image_id";
   [unique_symbol]: app_image_id_t;
};
export type app_image_id = string & app_image_id_t;
