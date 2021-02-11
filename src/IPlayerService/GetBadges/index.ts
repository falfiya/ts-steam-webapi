import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";

import {o_has_badges} from "./o_has_badges";
import {o_player_xp} from "./o_player_xp";
import {o_player_level} from "../o_player_level";

import {IPlayerService} from "..";
import {GetBadges_method} from "./method";

function GetBadges(this: steam_session, user: steam_id):
Promise<o_has_badges & o_player_xp & o_player_level>
{
   var params = `steamid=${user}`;

   return this.api_call(IPlayerService, GetBadges_method, "v1", params);
}

export {GetBadges};