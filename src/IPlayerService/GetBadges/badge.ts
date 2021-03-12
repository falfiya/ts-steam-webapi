import {uint} from "../../core/data_types";
import {community_item_id} from "./community_item_id";

export type badge = {
   badgeid: uint;
   level: uint;
   completion_time: uint;
   xp: uint;
   scarcity: uint;
   communityitemid?: community_item_id;
   /** No idea if this is RRGGBB */
   border_color?: uint;
};
