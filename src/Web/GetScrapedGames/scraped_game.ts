import {epoch} from "../../core/epoch";
import {unwrap} from "../../core/newtype";
import {app_id} from "../../shared/app_id";
import {h_cf_steamstatic} from "../../shared/http_hosts";
import {avail_stat_links} from "./avail_stat_links";

export type scraped_game<id extends app_id = app_id> = {
   appid: id;
   name: string;
   logo: `${unwrap<h_cf_steamstatic>}/steam/apps/${unwrap<id>}/capsule_184x69.jpg`;
   friendlyURL: id;
   availStatLinks: avail_stat_links;
   /** convertable to float */
   hours?: string;
   hours_forever: string;
   last_played: epoch;
   client_summary: {
      state: string;
      status: string;
      localContentSize: string;
   };
};
