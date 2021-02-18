import {make_url_image, url_image} from "./url_image";
import {url_path} from "./url_path";

export type url_avatar = url_image & url_path<"steamcommunity/public/images/avatars">;
export const url_avatar: url_avatar = make_url_image("avatars");
