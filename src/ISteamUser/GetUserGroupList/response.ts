import {o_response} from "../../shared/o_response";
import {group} from "./group";

export type GetUserGroupList_response = o_response<{
   success: true;
   groups: group[];
}>;
