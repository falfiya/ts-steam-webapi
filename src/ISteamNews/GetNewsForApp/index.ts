
import {app_id} from "../../shared/app_id";
import {GetNewsForApp_options, opts_to_params} from "./options";

import {ISteamNews} from "..";
import {api_call} from "../../api/api_call";
import {api_method} from "../../api/api_method";
const method = "GetNewsForApp" as api_method;

function GetNewsForApp(app_id: app_id, opts?: GetNewsForApp_options):
Promise<any>
{
   var params = `appid=${app_id}`;

   if (opts !== undefined) {
      params += opts_to_params(opts);
   }

   return api_call(ISteamNews, method, "v2", params);
}

export {GetNewsForApp};
