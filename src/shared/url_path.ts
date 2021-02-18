export declare const url_path: unique symbol;

export type url_path<P = unknown> = string & {readonly [url_path]: P};

export const make_url_path = <P extends string>(path: P) =>
   path as string as url_path<P>;
