import {steam_id} from "../../api/steam_id";
import {uint} from "../../core/basetypes";

export type player_ban_data = {
   SteamId: steam_id;
   CommunityBanned: boolean;
   VACBanned: boolean;
   NumberOfVACBans: uint;
   DaysSinceLastBan: uint;
   NumberOfGameBans: uint;
   EconomyBan: "none" | string;
};
