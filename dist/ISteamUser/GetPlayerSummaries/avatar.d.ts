import { final, unique_symbol, unwrap } from "../../core/newtype";
import { image_host } from "../../shared/image_host";
declare type avatar_hex_byte_t = {
    [final]: "avatar_hex_byte";
    [unique_symbol]: avatar_hex_byte_t;
};
export declare type avatar_hex_byte = string & avatar_hex_byte_t;
declare type avatar_hash_t = {
    [final]: "avatar_hash";
    [unique_symbol]: avatar_hash_t;
};
export declare type avatar_hash = string & avatar_hash_t;
export declare type avatar_size = "" | "_medium" | "_full";
declare const avatars = "avatars";
declare type avatars = typeof avatars;
export declare type avatar<host extends image_host, byte extends avatar_hex_byte, hash extends avatar_hash, size extends avatar_size = ""> = `${unwrap<host>}/${avatars}/${unwrap<byte>}/${unwrap<hash>}${size}.jpg`;
export declare const avatar: <host extends image_host<import("../../shared/http_host").http_host>, byte extends avatar_hex_byte, hash extends avatar_hash, size extends avatar_size = "">(host: host, byte: byte, hash: hash, size: size) => `${unwrap<host>}/avatars/${unwrap<byte>}/${unwrap<hash>}${size}.jpg`;
export {};
