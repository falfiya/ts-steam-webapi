import {final, unique_symbol} from "../core/newtype";

type steam_id_t = {
   [final]: "steam_id";
   [unique_symbol]: steam_id_t;
};
type steam_id = string & steam_id_t;

const seventeen_digits = /^\d{17}$/;
const steam_id = (s: string) => {
   if (seventeen_digits.test(s)) {
      return s as steam_id;
   }
   throw new Error("A Steam ID must be a string of 17 digits!");
}

export {steam_id};
