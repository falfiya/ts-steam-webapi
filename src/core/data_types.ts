import {unique_symbol} from "./newtype";

declare const data_type: unique symbol;

// ok so I could do it like this but there's not really a good point
//type data_type<type> = {[data_type]: type, [unique_symbol]: data_type<type>};

// these are just to make hover-type less cluttered
type uint_t  = {[data_type]: "uint",   [unique_symbol]: uint_t};
type int_t   = {[data_type]: "int",    [unique_symbol]: int_t};
type float_t = {[data_type]: "float",  [unique_symbol]: float_t};

type uint  = number & uint_t;
type int   = number & int_t;
type float = number & float_t;

export type {uint, int, float};
