import { uint } from "../../core/data_types";
import { game } from "../game";
declare type res = {
    response?: {
        total_count: uint;
        games: game[];
    };
};
export = res;
