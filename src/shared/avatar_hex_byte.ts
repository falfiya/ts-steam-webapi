type hex =
   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
   | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export type avatar_hex_byte = `${hex}${hex}`;
