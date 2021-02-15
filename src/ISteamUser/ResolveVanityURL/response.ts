import {steam_id} from "../../api/steam_id"

type success = {
   steamid: steam_id;
   success: 1;
};

type fail = {
   success: number;
   message: string;
};

export type ResolveVanityUrl_response = success | fail;
