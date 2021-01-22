declare const url: unique symbol;
export type url = string & {readonly [url]: unique symbol};
