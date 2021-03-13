import {final} from "../core/final"
import {unique_object} from "../core/newtype";

type image_host_t = {
   [final]: "image_host";
   [unique_object]: image_host_t;
};

export type image_host = string & image_host_t;

const images = "steamcommunity/public/images";
type  images = typeof images;

export const make_image_host = <host extends string>(host: host) =>
   `${host}/${images}` as `${host}/${images}`;
