import { app_id } from "../../shared/app_id";
export declare type opts = {
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
export declare const opts_default: opts;
export declare function opts_to_params(opts: opts): string;
