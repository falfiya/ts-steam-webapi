declare const url_host: unique symbol;

export type url_host<H = unknown> = string & {readonly [url_host]: H};

export const make_url_host = <H extends string>(host: H) =>
   host as string as url_host<H>;

export const is_url_host = <H extends string>(host: url_host<H>, s: string) =>
   s.startsWith(`https://${host}`);

export const to_url_host = <H extends string>(host: url_host<H>, s: string) => {
   if (is_url_host(host, s)) {
      return s as url_host<H>;
   }

   throw new Error(`Cannot convert "${s}" to url_host<"${host}">!`);
}
