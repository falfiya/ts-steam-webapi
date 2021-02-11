declare const steam_id: unique symbol;
export type steam_id = string & {readonly [steam_id]: unique symbol};

const all_digits = /^\d+$/;
export const is_steam_id = (s: string) => 1
   && s.length === 17
   && all_digits.test(s);

export const to_steam_id = (s: string) => {
   if (is_steam_id(s)) {
      return s as steam_id;
   }
   throw new Error("A Steam ID must be a string of 17 digits!");
}
