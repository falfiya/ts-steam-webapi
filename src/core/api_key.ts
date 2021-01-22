declare const api_key: unique symbol;
export type api_key = string & {readonly [api_key]: unique symbol};
