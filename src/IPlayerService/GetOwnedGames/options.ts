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

/**
 * This is not actually used.
 * This is a representation of how what Steam will interpret missing parameters
 * as.
 */
export const GetOwnedGames_options_default: GetOwnedGames_options = {
   include_appinfo: false,
   include_played_free_games: false,
   appids_filter: [],
   include_free_sub: false,
   skip_unvetted_apps: false,
};
