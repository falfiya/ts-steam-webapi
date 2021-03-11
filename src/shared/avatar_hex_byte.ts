// while this is the-right-way to do it,
// it destroys type hovering
// type _hex =
//    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
//    | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
// type _avatar_hex_byte = `${_hex}${_hex}`;

import {final} from "../core/final";

export type avatar_hex_byte_t = {readonly [final]: "avatar_hex_byte"};
export type avatar_hex_byte = string & avatar_hex_byte_t
