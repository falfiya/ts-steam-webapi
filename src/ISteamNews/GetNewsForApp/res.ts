import {app_id} from "../../shared/app_id";

type res<id extends app_id> = {
   appnews?: {
      appid: id;
      newsitems: 
   };
};

export = res;
