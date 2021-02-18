import {uint} from "../../core/numerals";
import {community_item_id} from "./community_item_id";

export interface badge {
   badgeid: uint;
   level: uint;
   completion_time: uint;
   xp: uint;
   scarcity: uint;
   communityitemid?: community_item_id;
   /** No idea if this is RRGGBB */
   border_color?: uint;
};
