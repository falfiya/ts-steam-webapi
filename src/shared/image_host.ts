import {final, newtype, unwrap} from "../core/newtype";
import {http_host} from "./http_host";

type image_host_t = {
   [final]: "image_host";
   [newtype]: image_host_t;
};

const images = "steamcommunity/public/images";
type  images = typeof images;

export type image_host<host extends http_host = http_host> =
   `${unwrap<host>}/${images}` & image_host_t;

export const image_host = <host extends http_host>(host: host) =>
   `${host}/${images}` as image_host<host>;
