import {image_host} from "../../shared/image_host";
import {avatar_hex_byte} from "./avatar_hex_byte";
import {avatar_hash} from "./avatar_hash";
import {unwrap} from "../../core/newtype";

export type avatar_size = "" | "_medium" | "_full";

const avatars = "avatars";
type  avatars = typeof avatars;

export type avatar<
   host extends image_host,
   byte extends avatar_hex_byte,
   hash extends avatar_hash,
   size extends avatar_size = "",
> = `${unwrap<host>}/${avatars}/${unwrap<byte>}/${unwrap<hash>}${size}.jpg`;

export const avatar = <
   host extends image_host,
   byte extends avatar_hex_byte,
   hash extends avatar_hash,
   size extends avatar_size = "",
>(host: host, byte: byte, hash: hash, size: size) =>
   `${host}/${avatars}/${byte}/${hash}${size}.jpg` as (
      avatar<host, byte, hash, size>
   );
