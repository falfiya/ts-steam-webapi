import {group} from "./group";

type res = {
   response?: {
      success: true;
      groups: group[];
   };
};

export = res;
