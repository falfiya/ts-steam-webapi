import { final, unique_symbol, unwrap } from "../core/newtype";
import { http_host } from "./http_host";
declare type image_host_t = {
    [final]: "image_host";
    [unique_symbol]: image_host_t;
};
declare const images = "steamcommunity/public/images";
declare type images = typeof images;
export declare type image_host<host extends http_host = http_host> = `${unwrap<host>}/${images}` & image_host_t;
export declare const image_host: <host extends http_host>(host: host) => image_host<host>;
export {};
