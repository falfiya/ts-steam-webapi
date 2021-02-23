declare const group_id: unique symbol;
/** 8 decimal digits */
export type group_id = string & {readonly [group_id]: void};
