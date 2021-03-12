import {final} from "../core/final";
import {unique_object} from "../core/newtype";

type api_method_t = {
   [final]: "api_method";
   [unique_object]: api_method_t;
};
export type api_method = string & api_method_t;
