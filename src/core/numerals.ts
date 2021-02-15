/*
As I said, way too many newtypes.
These should be useful for people wanting to read this library to know what
"actual" types are being used under the hood. It's also nice to know if your
number is always positive, or if it's always an integer.
*/

declare const uint : unique symbol;
declare const int  : unique symbol;
declare const float: unique symbol;

export type uint  = number & {readonly [uint ]: unique symbol};
export type int   = number & {readonly [int  ]: unique symbol};
export type float = number & {readonly [float]: unique symbol};
