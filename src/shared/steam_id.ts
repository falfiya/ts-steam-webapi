declare const steam_id: unique symbol;
export type steam_id = string & {readonly [steam_id]: void};

const seventeen_digits = /^\d{17}$/;
export const to_steam_id = (s: string) => {
   if (seventeen_digits.test(s)) {
      return s as steam_id;
   }
   throw new Error("A Steam ID must be a string of 17 digits!");
}
