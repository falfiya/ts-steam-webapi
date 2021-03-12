import {final} from "../../core/final";
import {unique_object} from "../../core/newtype";

type news_gid_t = {
   [final]: "news_gid";
   [unique_object]: news_gid_t;
};
export type news_gid = string & news_gid_t;
