import { final, unique_symbol } from "../core/newtype";
declare type api_key_t = {
    [final]: "api_key";
    [unique_symbol]: api_key_t;
};
declare type api_key = string & api_key_t;
declare const api_key: (s: string) => api_key;
export { api_key };
