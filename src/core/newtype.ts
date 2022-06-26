declare const newtype: unique symbol;
type unique_object<T = unknown> = {[newtype]: T};

type unwrap<T extends unique_object> =
   T extends infer val & T[typeof newtype] ? val : never;

const unwrap = <T, U extends unique_object<T>>(U: U): T => U as any;

type unwrap_maybe<T> = T extends unique_object ? unwrap<T> : T;

/** unique symbol for the final purpose and usage of a newtype */
declare const final: unique symbol;

export type {newtype, unwrap, unwrap_maybe, final};
