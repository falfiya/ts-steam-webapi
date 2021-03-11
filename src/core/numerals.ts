declare const data_type: unique symbol;

type uint_t  = {[data_type]: "uint"};
type int_t   = {[data_type]: "int"};
type float_t = {[data_type]: "float"};

type uint  = number & uint_t;
type int   = number & int_t;
type float = number & float_t;

export {
   uint_t,
   uint,
   int_t,
   int,
   float_t,
   float,
};
