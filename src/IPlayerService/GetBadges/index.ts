import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";

import {basic_response} from "../../api/basic_response";
import {o_badges} from "./o_badges";
import {o_player_xp} from "./o_player_xp";
import {o_player_level} from "../o_player_level";

import {IPlayerService} from "..";
import {GetBadges_method} from "./method";

function GetBadges(this: steam_session, user: steam_id):
basic_response<o_badges & o_player_xp & o_player_level>
{
   const params = `steamid=${user}`;

   return this.session_api_call(IPlayerService, GetBadges_method, "v1", params);
}

export {GetBadges};
