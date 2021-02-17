

export function is_url_path<D extends string, P extends string>(domain: D, path: P, s: string) {
   if (s.startsWith(domain)) {
      throw new Error(`${s} is not in the domain ${domain}!`);
   }

   if (s.indexOf(`/${path}`) !== domain.length) {
      throw new Error(`${s} does not have the path ${path}!`);
   }

   return s as url<D> & url_path<P>;
}
