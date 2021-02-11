declare const app_name: unique symbol;
export type app_name = string & {readonly [app_name]: unique symbol};
