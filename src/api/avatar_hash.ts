declare const avatar_hash: unique symbol;
export type avatar_hash = string & {readonly [avatar_hash]: unique symbol};
