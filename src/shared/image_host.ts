import {final} from "../core/final"
import {unique_object} from "../core/newtype";

type image_host_t = {
   [final]: "image_host";
   [unique_object]: image_host_t;
};
export type image_host = string & image_host_t;
