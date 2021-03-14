import {final} from "../../core/final";
import {unique_symbol} from "../../core/newtype";

type avatar_hash_t = {
   [final]: "avatar_hash";
   [unique_symbol]: avatar_hash_t;
};
export type avatar_hash = string & avatar_hash_t;
