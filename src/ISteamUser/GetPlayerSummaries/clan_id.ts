declare const clan_id: unique symbol;
/**
 * String that when parsed, only the lowest 32 bits matter.
 * 103582791429521408 is returned for invalid
 */
export type clan_id = string & {readonly [clan_id]: void};
