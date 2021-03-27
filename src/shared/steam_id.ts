import {final, unique_symbol} from "../core/newtype";

type steam_id_t = {
   [final]: "steam_id";
   [unique_symbol]: steam_id_t;
};
type steam_id = bigint & steam_id_t;

const seventeen_digits = /^\d{17}$/;
const steam_id = (s: bigint) => {
   if (seventeen_digits.test(s.toString())) {
      return s as steam_id;
   }
   throw new TypeError("A Steam ID must be a string of 17 digits!");
}

export {steam_id};
