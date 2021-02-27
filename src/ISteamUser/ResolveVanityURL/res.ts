import {o_response} from "../../shared/o_response";
import {steam_id} from "../../shared/steam_id";

type err = {
   success: number,
   message: string;
};

type ok = {
   steamid: steam_id;
   success: 1;
};

export type res = o_response<ok | err>;

export const is_err = (res: ok | err): res is err => res.success !== 1;
