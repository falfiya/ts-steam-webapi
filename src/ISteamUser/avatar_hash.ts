import {final} from "../core/final";
import {unique_object} from "../core/newtype";

type avatar_hash_t = {
   [final]: "avatar_hash";
   [unique_object]: avatar_hash_t;
};
export type avatar_hash = string & avatar_hash_t;
