import {api_key, to_api_key} from "./api/key";
import {api_call} from "./api/call";
import {api_interface} from "./api/interface";
import {api_method} from "./api/method";
import {api_version} from "./api/version";

// IPlayerService
import {GetRecentlyPlayedGames} from "./IPlayerService/GetRecentlyPlayedGames";
import {GetOwnedGames} from "./IPlayerService/GetOwnedGames";
import {GetSteamLevel} from "./IPlayerService/GetSteamLevel";
import {GetBadges} from "./IPlayerService/GetBadges";
import {GetCommunityOwnedBadges} from "./IPlayerService/GetCommunityOwnedBadges";

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

export class steam_session {
   key: api_key;

   constructor (key: string) {
      this.key = to_api_key(key);
   }

   session_api_call(int: api_interface, met: api_method, ver: api_version, params: string):
   Promise<any>
   {
      return api_call(int, met, ver, `key=${this.key}&${params}`);
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
   GetCommunityOwnedBadges=
   GetCommunityOwnedBadges;

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
