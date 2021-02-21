import {and} from "./and";
import {url_host} from "./url_host";

declare const url_image_host: unique symbol;

export type url_image_host = {readonly [url_image_host]: true};

export const make_url_image_host = <h extends string>(host: h) =>
   host as string as and<url_host<h>, url_image_host>;
