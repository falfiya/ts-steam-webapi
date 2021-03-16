import { epoch } from "../../core/epoch";
import { uint } from "../../core/data_types";
import { app_id } from "../../shared/app_id";
import { news_gid } from "./news_gid";
import { unwrap } from "../../core/newtype";
export declare type news_item<id extends app_id, gid extends news_gid = news_gid, feed extends string = string> = {
    gid: news_gid;
    title: string;
    url: `https://steamstore-a.akamaihd.net/news/externalpost/${feed}/${unwrap<gid>}`;
    is_external_url: boolean;
    author: string;
    contents: string;
    feedlabel: string;
    date: epoch;
    feedname: feed;
    feed_type: uint;
    appid: id;
};
