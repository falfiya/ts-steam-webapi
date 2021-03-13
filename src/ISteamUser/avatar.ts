import {avatar_hex_byte} from "./avatar_hex_byte";
import {public_image} from "../shared/public_image";
import {avatar_hash} from "./avatar_hash";
import {unwrap} from "../core/newtype";

export type avatar_size = "" | "_medium" | "_full";

const avatars = "avatars";
type  avatars = typeof avatars;

export type avatar<
   host extends string,
   byte extends avatar_hex_byte,
   hash extends avatar_hash,
   size extends avatar_size = "",
> = `${public_image<host,`${avatars}/${unwrap<byte>}/${unwrap<hash>}${size}.jpg`>}`;
