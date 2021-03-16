import { unique_symbol } from "./newtype";
declare const data_type: unique symbol;
declare type uint_t = {
    [data_type]: "uint";
    [unique_symbol]: uint_t;
};
declare type int_t = {
    [data_type]: "int";
    [unique_symbol]: int_t;
};
declare type float_t = {
    [data_type]: "float";
    [unique_symbol]: float_t;
};
declare type uint = number & uint_t;
declare type int = number & int_t;
declare type float = number & float_t;
declare function uint<n extends number>(n: n): n & number & uint_t;
declare function int<n extends number>(n: n): n & number & uint_t;
declare const float: <n extends number>(n: n) => n & number & float_t;
export { uint, int, float };
