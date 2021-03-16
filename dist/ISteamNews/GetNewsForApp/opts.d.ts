import { epoch } from "../../core/epoch";
import { uint } from "../../core/data_types";
export declare type opts = {
    max_length?: uint;
    end_date?: epoch;
    count?: uint;
    feeds?: string[];
    tags?: string[];
};
export declare const opts_default: opts;
export declare function opts_to_params(opts: opts): string;
