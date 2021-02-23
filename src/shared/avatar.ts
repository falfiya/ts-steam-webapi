import {ct} from "./ct";
import {avatar_hex_byte} from "./avatar_hex_byte";
import {public_image} from "./public_image";
import {avatar_hash} from "./avatar_hash";
import {or} from "./or";

export type avatar_size = "" | "_medium" | "_full";

export const avatar = ct("avatars");

export type  avatar<
   host extends string,
   byte extends avatar_hex_byte,
   hash extends avatar_hash,
   size extends avatar_size = "",
> = `${public_image<
   host,
   // what is this or for?
   // hard to explain but basically allows this to work nicely when you don't
   // actually know the hex_byte or the hash
   `${typeof avatar}/${or<byte, string>}/${or<hash, string>}${size}.jpg`
>}`;
