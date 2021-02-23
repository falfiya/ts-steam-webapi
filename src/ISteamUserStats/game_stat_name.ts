declare const game_stat_name: unique symbol;
/** This is a game-local statistic name */
export type game_stat_name = string & {readonly [game_stat_name]: void};
