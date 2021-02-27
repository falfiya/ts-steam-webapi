import {o_response} from "../../shared/o_response";
import {steam_id} from "../../shared/steam_id"

type ok = {
   steamid: steam_id;
   success: 1;
};

type err = {
   success: number,
   message: string;
};

type res = ok | err;

export type ResolveVanityUrl_response = o_response<res>;

export const ResolveVanityUrl_is_err = (res: res): res is err => res.success !== 1;
