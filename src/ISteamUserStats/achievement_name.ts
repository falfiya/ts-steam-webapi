declare const achievement_name: unique symbol;
/** This is a game-local achievement name */
export type achievement_name = string & {readonly [achievement_name]: void};
