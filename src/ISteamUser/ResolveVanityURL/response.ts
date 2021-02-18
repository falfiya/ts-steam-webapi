import {basic_response} from "../../api/basic_response";
import {steam_id} from "../../shared/steam_id"

export type maybe_response = {
   response: {
      steamid?: steam_id;
      success: number;
      message: string;
   };
};

export type ResolveVanityUrl_response = {
   steamid: steam_id;
   success: 1;
};
