
import {app_id} from "../../shared/app_id";
import {GetNewsForApp_options, opts_to_params} from "./options";

import {ISteamNews} from "..";
import {GetNewsForApp_method} from "./method";
import {api_call} from "../../api/api_call";

function GetNewsForApp(app_id: app_id, opts?: GetNewsForApp_options):
Promise<any>
{
   var params = `appid=${app_id}`;

   if (opts !== undefined) {
      params += opts_to_params(opts);
   }

   return api_call(ISteamNews, GetNewsForApp_method, "v2", params);
}

export {GetNewsForApp};
