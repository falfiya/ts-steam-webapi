import {epoch} from "../core/epoch";
import {app_id} from "../shared/app_id";
import {avail_stat_links} from "./avail_stat_links";
import {primitive} from "../core/primitive";

export type scraped_game<id extends app_id = app_id> = {
   appid: id;
   name: string;
   logo: `https://cdn.cloudflare.steamstatic.com/steam/apps/${primitive<id>}/capsule_184x69.jpg`;
   friendlyURL: id;
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
