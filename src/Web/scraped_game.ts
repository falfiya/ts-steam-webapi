import {epoch} from "../core/epoch";
import {app_id} from "../shared/app_id";
import {or} from "../shared/or";
import {avail_stat_links} from "./avail_stat_links";

export type scraped_game<game_id extends app_id> = {
   appid: game_id;
   name: string;
   logo: `https://cdn.cloudflare.steamstatic.com/steam/apps/${or<game_id, number>}capsule_184x69.jpg`;
   friendlyURL: game_id;
   availStatLinks: avail_stat_links;
   /// convertable to float
   hours?: string;
   hours_forever: string;
   last_played: epoch;
   client_summary: {
      state: string;
      status: string;
      localContentSize: string;
   };
};
