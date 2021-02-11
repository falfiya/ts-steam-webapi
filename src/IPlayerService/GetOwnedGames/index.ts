import {o_app_id} from "../o_app_id";
import {o_playtime} from "../o_playtime";

type owned_game = o_app_id & o_playtime;

import {o_playtime2} from "../o_playtime2";
import {o_name} from "../o_name";
import {o_image_ids} from "../o_image_ids";
import {o_stat_visibility} from "../o_stat_visibility";

type owned_game_ex
   = owned_game
   & o_name
   & o_playtime2
   & o_image_ids
   & o_stat_visibility;

// function params
import {steam_session} from "../../steam_session";
import {steam_id} from "../../api/steam_id";
import {GetOwnedGames_options} from "./options";

// function return
import {o_total_count} from "../o_total_count";
import {o_has_owned_games} from "./o_has_owned_games";

type response<owned_game> =
   Promise<o_total_count & o_has_owned_games<owned_game>>;

// stuff used inside the function
import {IPlayerService} from "..";
import {m_GetOwnedGames} from "./method";

function GetOwnedGames(this: steam_session, user: steam_id):
response<owned_game>;

function GetOwnedGames(
   this: steam_session,
   user: steam_id,
   opts: GetOwnedGames_options & {include_appinfo?: false},
):
response<owned_game>;

function GetOwnedGames(
   this: steam_session,
   user: steam_id,
   opts: GetOwnedGames_options & {include_appinfo: true},
):
response<owned_game_ex>;

function GetOwnedGames(this: steam_session, user: steam_id, opts?: GetOwnedGames_options):
response<owned_game | owned_game_ex>
{
   var params = `steamid=${user}`;
   if (opts) {
      // is there a better way of doing this?
      // maybe, but I like how explicit it is
      const {
         include_appinfo,
         include_played_free_games,
         appids_filter,
         include_free_sub,
         skip_unvetted_apps,
      } = opts;

      if (include_appinfo !== undefined) {
         params += `&include_appinfo=${include_appinfo}`;
      }

      if (include_played_free_games !== undefined) {
         params += `&include_played_free_games=${include_played_free_games}`;
      }

      if (appids_filter !== undefined) {
         // if you mess this up, it's your fault anyways
         //if (!Array.isArray(appids_filter)) {
         //   throw new TypeError("GetOwnedGames_options.appids_filter must be an Array!");
         //}
         params += `&appids_filter=${appids_filter.join(',')}`;
      }

      if (include_free_sub !== undefined) {
         params += `&include_free_sub=${include_free_sub}`;
      }

      if (skip_unvetted_apps !== undefined) {
         params += `&skip_unvetted_apps=${skip_unvetted_apps}`;
      }
   }

   return this.api_call(IPlayerService, m_GetOwnedGames, "v1", params);
}

export {GetOwnedGames};
