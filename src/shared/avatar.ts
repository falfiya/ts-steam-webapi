import {ct} from "../core/ct";
import {avatar_hex_byte, avatar_hex_byte_t} from "./avatar_hex_byte";
import {public_image} from "./public_image";
import {avatar_hash} from "./avatar_hash";
import {primitive} from "../core/primitive";

export type avatar_size = "" | "_medium" | "_full";

export const avatar = ct("avatars");

export type  avatar<
   host extends string,
   byte extends avatar_hex_byte,
   size extends avatar_size = "",
> = `${public_image<
   host,
   // what is this or for?
   // hard to explain but basically allows this to work nicely when you don't
   // actually know the hex_byte or the hash
   `${typeof avatar}/${byte extends infer T & avatar_hex_byte_t ? T : never}/${/*primitive<hash>*/1}${size}.jpg`
>}`;

type e = avatar<"eeeee", "03" & avatar_hex_byte, "">;
