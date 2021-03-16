import {final, unique_symbol} from "../../core/newtype";

type news_gid_t = {
   [final]: "news_gid";
   [unique_symbol]: news_gid_t;
};
export type news_gid = string & news_gid_t;
