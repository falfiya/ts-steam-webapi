import {api_key, to_api_key} from "./api/key";
import {api_call} from "./api/call";

import {GetRecentlyPlayedGames} from "./IPlayerService/GetRecentlyPlayedGames";
import {GetOwnedGames} from "./IPlayerService/GetOwnedGames";
import {GetSteamLevel} from "./IPlayerService/GetSteamLevel";
import {GetBadges} from "./IPlayerService/GetBadges";

export class steam_session {
   key: api_key;

   constructor (key: string) {
      this.key = to_api_key(key);
   }

   api_call = api_call;

   GetRecentlyPlayedGames = GetRecentlyPlayedGames;
   GetOwnedGames = GetOwnedGames;
   GetSteamLevel = GetSteamLevel;
   GetBadges = GetBadges
}
