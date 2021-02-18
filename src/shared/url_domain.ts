// there's no good noun for protocol + domain so I'm just calling it domain

export declare const url_domain: unique symbol;

export type url_domain<T = unknown> = string & {readonly [url_domain]: T};

export const make_url_front = <T extends string>(domain: T) =>
   `https://${domain}` as url_domain<T>;

export const is_url_domain = <T extends string>(domain: T, s: string) =>
   s.startsWith(domain);

export const to_url_domain = <T extends string>(domain: T, s: string) => {
   if (is_url_domain(domain, s)) {
      return s as url_domain<T>;
   }

   throw new Error(`${s} is not in the domain ${domain}!`);
}
