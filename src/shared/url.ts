import {url_domain} from "./url_domain";
import {url_path} from "./url_path";

export type url<D extends string, P extends string> =
   & url_domain<D>
   & url_path<P>;

export function is_url<D extends string, P extends string>(domain: D, path: P, s: string) {
   if (s.startsWith(domain)) {
      throw new Error(`${s} is not in the domain ${domain}!`);
   }

   if (s.indexOf(`/${path}`) !== domain.length) {
      throw new Error(`${s} does not have the path ${path}!`);
   }

   // return s as url<D> & url_path<P>;
}
