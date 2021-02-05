declare const api_method: unique symbol;
export type api_method = string & {readonly [api_method]: unique symbol};
