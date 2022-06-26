import {final, newtype} from "../core/newtype";

type steam_id_t = {
   [final]: "steam_id";
   [newtype]: steam_id_t;
};
type steam_id = bigint & steam_id_t;

const seventeen_digits = /^\d{17}$/;
const steam_id = <id extends bigint>(id: id) => {
   if (seventeen_digits.test(id.toString())) {
      return id as id & steam_id;
   }
   throw new TypeError("A Steam ID must be a string of 17 digits!");
}

export {steam_id};
