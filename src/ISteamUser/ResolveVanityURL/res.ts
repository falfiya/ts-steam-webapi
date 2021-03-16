import {steam_id} from "../../shared/steam_id";

type err = {
   success: number,
   message: string;
};

type ok = {
   steamid: steam_id;
   success: 1;
};

export type res = {response?: ok | err};

export const is_err = (res: ok | err): res is err => res.success !== 1;
