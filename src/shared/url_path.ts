import {url} from "./url_domain";

export declare const url_path: unique symbol;

export type url_path<P extends string> = string & {readonly [url_path]: P};

export const make_url_path = <P extends string>(path: P) =>
   // why do I have to do `as string`? No freaking idea.
   path as string as url_path<P>;
