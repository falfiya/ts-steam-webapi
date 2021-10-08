import {final, newtype} from "../core/newtype";

type api_method_t = {
   [final]: "api_method";
   [newtype]: api_method_t;
};
export type api_method = string & api_method_t;
