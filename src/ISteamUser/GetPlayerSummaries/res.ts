import {o_response} from "../../shared/o_response";
import {player_summary} from "./player_summary";

type res = o_response<{players: player_summary[]}>;

export = res;
