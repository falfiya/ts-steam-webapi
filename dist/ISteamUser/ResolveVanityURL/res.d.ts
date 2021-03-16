import { steam_id } from "../../shared/steam_id";
declare type err = {
    success: number;
    message: string;
};
declare type ok = {
    steamid: steam_id;
    success: 1;
};
export declare type res = {
    response?: ok | err;
};
export declare const is_err: (res: ok | err) => res is err;
export {};
