import {final, unique_symbol} from "../core/newtype";

type api_method_t = {
   [final]: "api_method";
   [unique_symbol]: api_method_t;
};
export type api_method = string & api_method_t;
