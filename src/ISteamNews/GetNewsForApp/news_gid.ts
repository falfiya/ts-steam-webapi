declare const news_gid: unique symbol;

export type news_gid = string & {readonly [news_gid]: void};
