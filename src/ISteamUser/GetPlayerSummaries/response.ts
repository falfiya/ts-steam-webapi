import {o_response} from "../../shared/o_response";
import {avatar_hash} from "../../shared/avatar_hash";
import {avatar_hex_byte} from "../../shared/avatar_hex_byte";
import {steam_id} from "../../shared/steam_id";
import {player_summary} from "./player_summary";

export type GetPlayerSummaries_response = o_response<{
   players: player_summary<
      steam_id,
      avatar_hex_byte,
      avatar_hash
   >[];
}>;
