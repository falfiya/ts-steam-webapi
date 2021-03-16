import {isteam_session} from "./shared/isteam_session";

import {api_key} from "./api/api_key";
import {api_call} from "./api/api_call";
import {api_interface} from "./api/api_interface";
import {api_method} from "./api/api_method";
import {api_version} from "./api/api_version";

// IPlayerService
import {GetRecentlyPlayedGames} from "./IPlayerService/GetRecentlyPlayedGames";
import {GetOwnedGames} from "./IPlayerService/GetOwnedGames";
import {GetSteamLevel} from "./IPlayerService/GetSteamLevel";
import {GetBadges} from "./IPlayerService/GetBadges";
import {GetCommunityBadgeProgress} from "./IPlayerService/GetCommunityBadgeProgress";

// ISteamNews
import {GetNewsForApp} from "./ISteamNews/GetNewsForApp";

// ISteamUser
import {GetFriendList} from "./ISteamUser/GetFriendList";
import {GetPlayerBans} from "./ISteamUser/GetPlayerBans";
import {GetPlayerSummaries} from "./ISteamUser/GetPlayerSummaries";
import {GetUserGroupList} from "./ISteamUser/GetUserGroupList";
import {ResolveVanityURL} from "./ISteamUser/ResolveVanityURL";

// ISteamUserStats
import {GetPlayerAchievements} from "./ISteamUserStats/GetPlayerAchievements";
import {GetSchemaForGame} from "./ISteamUserStats/GetSchemaForGame";
import {GetUserStatsForGame} from "./ISteamUserStats/GetUserStatsForGame";

export class steam_session implements isteam_session {
   key: api_key;

   constructor (key: string) {
      this.key = api_key(key);
   }

   api_call<T>(
      int: api_interface,
      met: api_method,
      ver: api_version,
      params: string
   ) {
      return api_call<T>(int, met, ver, `key=${this.key}&${params}`);
   };

   // IPlayerService
   GetRecentlyPlayedGames=
   GetRecentlyPlayedGames;
   GetOwnedGames=
   GetOwnedGames;
   GetSteamLevel=
   GetSteamLevel;
   GetBadges=
   GetBadges;
   GetCommunityBadgeProgress=
   GetCommunityBadgeProgress;

   // ISteamNews
   GetNewsForApp=
   GetNewsForApp

   // ISteamUser
   GetFriendList=
   GetFriendList;
   GetPlayerBans=
   GetPlayerBans;
   GetPlayerSummaries=
   GetPlayerSummaries;
   GetUserGroupList=
   GetUserGroupList;
   ResolveVanityURL=
   ResolveVanityURL;

   // ISteamUserStats
   GetPlayerAchievements=
   GetPlayerAchievements;
   GetSchemaForGame=
   GetSchemaForGame;
   GetUserStatsForGame=
   GetUserStatsForGame;
}
