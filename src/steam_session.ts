import {session} from "./shared/session";

import {api_key} from "./api/api_key";
import {api_call} from "./api/api_call";
import {api_interface} from "./api/api_interface";
import {api_method} from "./api/api_method";
import {api_version} from "./api/api_version";

// IPlayerService
import {GetRecentlyPlayedGames} from "./IPlayerService/GetRecentlyPlayedGames/met";
import {GetOwnedGames} from "./IPlayerService/GetOwnedGames/met";
import {GetSteamLevel} from "./IPlayerService/GetSteamLevel/met";
import {GetBadges} from "./IPlayerService/GetBadges/met";
import {GetCommunityBadgeProgress} from "./IPlayerService/GetCommunityBadgeProgress/met";

// ISteamNews
import {GetNewsForApp} from "./ISteamNews/GetNewsForApp/met";

// ISteamUser
import {GetFriendList} from "./ISteamUser/GetFriendList/met";
import {GetPlayerBans} from "./ISteamUser/GetPlayerBans/met";
import {GetPlayerSummaries} from "./ISteamUser/GetPlayerSummaries/met";
import {GetUserGroupList} from "./ISteamUser/GetUserGroupList/met";
import {ResolveVanityURL} from "./ISteamUser/ResolveVanityURL/met";

// ISteamUserStats
import {GetPlayerAchievements} from "./ISteamUserStats/GetPlayerAchievements/met";
import {GetSchemaForGame} from "./ISteamUserStats/GetSchemaForGame/met";
import {GetUserStatsForGame} from "./ISteamUserStats/GetUserStatsForGame/met";

export class steam_session implements session {
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
