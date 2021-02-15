import {image_url} from "./image_url";

declare const avatar_url: unique symbol;
export type avatar_url = image_url & {readonly [avatar_url]: unique symbol};
