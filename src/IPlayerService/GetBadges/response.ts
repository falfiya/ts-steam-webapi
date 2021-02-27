import {o_response} from "../../shared/o_response";
import {o_player_level} from "../o_player_level";
import {o_badges} from "./o_badges";
import {o_player_xp} from "./o_player_xp";

export type GetBadge_response = o_response<o_badges & o_player_xp & o_player_level>;
