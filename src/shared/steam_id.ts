import {final} from "../core/final";
import {unique_object} from "../core/newtype";

type steam_id_t = {
   [final]: "steam_id";
   [unique_object]: steam_id_t;
};
export type steam_id = string & steam_id_t;

const seventeen_digits = /^\d{17}$/;
export const to_steam_id = (s: string) => {
   if (seventeen_digits.test(s)) {
      return s as steam_id;
   }
   throw new Error("A Steam ID must be a string of 17 digits!");
}
