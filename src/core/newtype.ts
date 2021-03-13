export declare const unique_object: unique symbol;
type unique_object<T = unknown> = {[unique_object]: T};

export type unwrap<T extends unique_object> =
   T extends infer val & T[typeof unique_object] ? val : never;

