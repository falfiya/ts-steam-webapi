import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";

import {ITemplateService} from "..";
import {Template_method} from "./method";

function Template(this: steam_session, user: steam_id):
Promise<any>
{
   var params = `steamid=${user}`;

   return this.session_api_call(ITemplateService, Template_method, "v1", params);
}

export {Template};
