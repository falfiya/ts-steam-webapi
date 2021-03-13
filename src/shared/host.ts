import {final} from "../core/final";
import {unique_object} from "../core/newtype";

type host_t = {
   [final]: "host",
   [unique_object]: host_t;
};
type http_either = `http${"" | "s"}://${string}`
export type host = http_either & host_t;

export const http = <host extends string>(host: host) =>
   `http://${host}` as `http://${host}` & host;

export const https = <host extends string>(host: host) =>
   `https://${host}` as `${}`
