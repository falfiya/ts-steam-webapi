declare const user_id: unique symbol;
export type user_id = number & {readonly [user_id]: unique symbol};
