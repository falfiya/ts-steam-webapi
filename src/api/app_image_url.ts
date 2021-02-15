import {image_url} from "./image_url";

declare const app_image_url: unique symbol;
export type app_image_url = image_url & {readonly [app_image_url]: unique symbol};
