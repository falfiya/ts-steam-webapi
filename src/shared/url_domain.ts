export declare const url_front: unique symbol;

export type url<T = unknown> = string & {readonly [url_front]: T};

export const make_url_front = <T extends string>(domain: T) =>
   `https://${domain}` as url<T>;

export const is_url_domain = <T extends string>(domain: T, s: string) =>
   s.startsWith(domain);

export const to_url_domain = <T extends string>(domain: T, s: string) => {
   if (is_url_domain(domain, s)) {
      return s as url<T>;
   }

   throw new Error(`${s} is not in the domain ${domain}!`);
}
