import {final} from "../core/final";
import {unique_symbol} from "../core/newtype";

type http_host_t = {
   [final]: "http_host",
   [unique_symbol]: http_host_t;
};

type http_host = `http${"" | "s"}://${string}` & http_host_t;

type http<host extends string = string> = `http://${host}` & http_host_t;
const http = <host extends string>(host: host) =>
   `http://${host}` as http<host>;

type https<host extends string = string> = `https://${host}` & http_host_t;
const https = <host extends string>(host: host) =>
   `https://${host}` as https<host>;

export {http_host, http, https};
