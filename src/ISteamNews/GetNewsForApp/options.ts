import {epoch} from "../../core/epoch";
import {uint} from "../../core/numerals";

export type GetNewsForApp_options = {
   max_length?: uint;
   end_date?: epoch;
   count?: uint;
   feeds?: string[];
   tags?: string[];
};

export const ISteamNews_options_default: GetNewsForApp_options = {
   max_length: Infinity as uint,
   end_date: 0 as epoch,
   count: 20 as uint,
   feeds: [],
   tags: [],
};

export function opts_to_params(opts: GetNewsForApp_options): string {
   var params = "";

   const {
      max_length,
      end_date,
      count,
      feeds,
      tags,
   } = opts;

   if (max_length !== undefined) {
      params += `&maxlength=${max_length}`;
   }

   if (end_date !== undefined) {
      params += `&enddate=${end_date}`;
   }

   if (count !== undefined) {
      params += `&count=${count}`;
   }

   if (feeds !== undefined) {
      params += `&feeds=${feeds.join(',')}`;
   }

   if (tags !== undefined) {
      params += `&tags=${tags.join(',')}`;
   }

   return params;
}
