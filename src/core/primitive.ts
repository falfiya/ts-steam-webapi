type primitives = string | number;
/**
 * Newtypes don't work in template literal types so we have to convert them to
 * their primitive values.
 */
export type primitive<T extends primitives> =
   T extends infer val & primitives ? val : never;
