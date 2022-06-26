import {final, newtype} from "../../core/newtype";

type news_gid_t = {
   [final]: "news_gid";
   [newtype]: news_gid_t;
};
export type news_gid = string & news_gid_t;
