import { final, unique_symbol } from "../core/newtype";
declare type http_host_t = {
    [final]: "http_host";
    [unique_symbol]: http_host_t;
};
declare type http_host = `http${"" | "s"}://${string}` & http_host_t;
declare type http<host extends string = string> = `http://${host}` & http_host_t;
declare const http: <host extends string>(host: host) => http<host>;
declare type https<host extends string = string> = `https://${host}` & http_host_t;
declare const https: <host extends string>(host: host) => https<host>;
export { http_host, http, https };
