import {steam_session} from "../../steam_session";

import {IPlayerService} from "..";
import {m_GetOwnedGames} from "./method";

import {steam_id} from "../../api/steam_id";

import {o_total_count} from "../o_total_count";
import {o_app_id} from "../o_app_id";
import {o_playtime} from "../o_playtime";
import {app_id} from "../../api/app_id";

export type GetOwnedGames_options = {
   /** @default false */
   include_appinfo?: boolean;
   /** @default false */
   include_played_free_games?: boolean;
   /** @default [] */
   appids_filter?: app_id[];
   /** @default false */
   include_free_sub?: boolean;
   /** @default false */
   skip_unvetted_apps?: boolean;
};

/** This is not actually used in here. */
export const GetOwnedGames_options_default: GetOwnedGames_options = {
   include_appinfo: false,
   include_played_free_games: false,
   appids_filter: [],
   include_free_sub: false,
   skip_unvetted_apps: false,
};

type o_has_owned_games<T> = {
   games: T[];
};

function GetOwnedGames(this: steam_session, user: steam_id):
Promise<o_total_count & o_has_owned_games<o_app_id & o_playtime>>;

function GetOwnedGames(this: steam_session, user: steam_id, opts: GetOwnedGames_options):
Promise<o_total_count & o_has_owned_games<o_app_id & o_playtime>>;

function GetOwnedGames(this: steam_session, user: steam_id, opts?: GetOwnedGames_options):
Promise<o_total_count & o_has_owned_games<o_app_id & any>>
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
