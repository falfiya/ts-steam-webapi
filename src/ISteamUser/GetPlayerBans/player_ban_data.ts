import {steam_id} from "../../shared/steam_id";
import {uint} from "../../core/numerals";

export type player_ban_data = {
   SteamId: steam_id;
   CommunityBanned: boolean;
   VACBanned: boolean;
   NumberOfVACBans: uint;
   DaysSinceLastBan: uint;
   NumberOfGameBans: uint;
   EconomyBan: "none" | string;
};
