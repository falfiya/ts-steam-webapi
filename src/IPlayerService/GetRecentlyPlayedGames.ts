import {playtime} from "./playtime";
import {app_id} from "./app_id";
import {image_ids} from "./image_ids";

export type recently_played_game = playtime & app_id & image_ids;

export type response_0 = {
   response: {
      total_count: number,
   }
};
