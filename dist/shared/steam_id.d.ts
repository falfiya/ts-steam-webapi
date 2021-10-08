import { final, unique_symbol } from "../core/newtype";
declare type steam_id_t = {
    [final]: "steam_id";
    [unique_symbol]: steam_id_t;
};
declare type steam_id = bigint & steam_id_t;
declare const steam_id: <id extends bigint>(id: id) => id & bigint & steam_id_t;
export { steam_id };
