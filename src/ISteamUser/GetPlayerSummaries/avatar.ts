import {final, newtype, unwrap} from "../../core/newtype";
import {image_host} from "../../shared/image_host";

// while this is the-right-way to do it,
// it destroys type hovering
// type _hex =
//    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
//    | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
// type _avatar_hex_byte = `${_hex}${_hex}`;

type avatar_hex_byte_t = {
   [final]: "avatar_hex_byte";
   [newtype]: avatar_hex_byte_t;
};
export type avatar_hex_byte = string & avatar_hex_byte_t

type avatar_hash_t = {
   [final]: "avatar_hash";
   [newtype]: avatar_hash_t;
};
export type avatar_hash = string & avatar_hash_t;

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
