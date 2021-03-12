import {final} from "../core/final";
import {unique_object} from "../core/newtype";

type app_name_t = {
   [final]: "app_name";
   [unique_object]: app_name_t;
};
export type app_name = string & app_name_t;
