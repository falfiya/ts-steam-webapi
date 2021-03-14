declare const unique_symbol: unique symbol;
type unique_object<T = unknown> = {[unique_symbol]: T};

type unwrap<T extends unique_object> =
   T extends infer val & T[typeof unique_symbol] ? val : never;

type unwrap_maybe<T> = T extends unique_object ? unwrap<T> : T;

export type {unique_symbol, unwrap, unwrap_maybe};
