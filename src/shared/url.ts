import {is_url_host, url_host} from "./url_host";
import {url_path} from "./url_path";

export type url<H extends string, P extends string> =
   & url_host<H>
   & url_path<P>;

export const is_url = <H extends string, P extends string>(
   h: url_host<H>,
   p: url_path<P>,
   s: string
) => is_url_host(h, s) && s.indexOf(`/${p}/`) === h.length;

export const to_url = <H extends string, P extends string>(
   h: url_host<H>,
   p: url_path<P>,
   s: string
) => {
   if (is_url(h, p, s)) {
      return s as url<H, P>;
   }

   throw new Error(`${s} cannot be converted to url<${h}, ${p}>`);
};
