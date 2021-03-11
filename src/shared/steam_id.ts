import {final} from "../core/final";

export type steam_id_t = {readonly [final]: "steam_id"};
export type steam_id = string & steam_id_t;

const seventeen_digits = /^\d{17}$/;
export const to_steam_id = (s: string) => {
   if (seventeen_digits.test(s)) {
      return s as steam_id;
   }
   throw new Error("A Steam ID must be a string of 17 digits!");
}
