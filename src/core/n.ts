declare const uint : unique symbol;
declare const int  : unique symbol;
declare const float: unique symbol;

export type uint  = number & {readonly [uint ]: unique symbol};
export type int   = number & {readonly [int  ]: unique symbol};
export type float = number & {readonly [float]: unique symbol};
