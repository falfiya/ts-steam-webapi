export type https<S extends string> = `https://${S}`;
export const https = <host extends string>(host: host) =>
   `https://${host}` as https<host>;
