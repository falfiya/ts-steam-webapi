import {o_response} from "../../shared/o_response";
import {group} from "./group";

type res = o_response<{
   success: true;
   groups: group[];
}>;

export = res;
