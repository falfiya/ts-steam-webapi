import {epoch} from "../../core/epoch";
import {uint} from "../../core/data_types";

export type opts = {
   max_length?: uint;
   end_date?: epoch;
   count?: uint;
   feeds?: string[];
   tags?: string[];
};

export const opts_default: opts = {
   max_length: Infinity as uint,
   end_date: 0 as epoch,
   count: 20 as uint,
   feeds: [],
   tags: [],
};

export function opts_to_params(opts: opts): string {
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
