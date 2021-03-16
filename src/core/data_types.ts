import {unique_symbol} from "./newtype";

declare const data_type: unique symbol;

// these are just to make hover-type less cluttered
type uint_t  = {[data_type]: "uint" , [unique_symbol]: uint_t};
type int_t   = {[data_type]: "int"  , [unique_symbol]: int_t};
type float_t = {[data_type]: "float", [unique_symbol]: float_t};

type uint  = number & uint_t;
type int   = number & int_t;
type float = number & float_t;

function uint<n extends number>(n: n) {
   if (Number.isInteger(n) && n > 0) {
      return n as n & uint;
   }

   throw new TypeError(`${n} is not a uint!`);
}

function int<n extends number>(n: n) {
   if (Number.isInteger(n)) {
      return n as n & uint;
   }

   throw new TypeError(`${n} is not an int!`);
}

const float = <n extends number>(n: n) => n as n & float;

export {uint, int, float};
