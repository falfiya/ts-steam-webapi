import {uint} from "../core/n";

import {playtime} from "./playtime";
import {app_id} from "./app_id";
import {image_ids} from "./image_ids";
import {user_id} from "../core/user_id";

import {api_call, api_method} from "../core/net";
import {IPlayerService} from "./common";
import {api_key} from "../core/api_key";

export type recently_played_game = playtime & app_id & image_ids;

export type recently_played_games_response = {
   response: {
      total_count: uint;
      games: recently_played_game[];
   };
};

export async function GetRecentlyPlayedGames(key: api_key, user: user_id, count?: uint) {
   const res = await api_call(
      IPlayerService,
      "GetRecentlyPlayedGames" as api_method,
      "v1",
      {key, user, count},
   );
   return (await res.json()) as recently_played_games_response;
}
