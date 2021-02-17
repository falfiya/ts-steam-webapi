/*
As I said, way too many newtypes.
These should be useful for people wanting to read this library to know what
"actual" types are being used under the hood. It's also nice to know if your
number is always positive, or if it's always an integer.
*/

declare const numeral: unique symbol;

enum numerals {uint, int, float};

export type uint  = number & {[numeral]: numerals.uint};
export type int   = number & {[numeral]: numerals.float};
export type float = number & {[numeral]: numerals.float};
