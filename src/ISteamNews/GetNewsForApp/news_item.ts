import {epoch} from "../../core/epoch";
import {uint} from "../../core/numerals";
import {app_id} from "../../shared/app_id";
import {primitive} from "../../core/primitive";
import {news_gid} from "./news_gid";

export type news_item<
   id extends app_id,
   gid extends news_gid,
   feed extends string,
> = {
   gid: news_gid;
   title: string;
   url: `https://steamstore-a.akamaihd.net/news/externalpost/${primitive<feed>}/${primitive<gid>}`;
   is_external_url: boolean;
   author: string;
   contents: string;
   feedlabel: string;
   date: epoch;
   feedname: feed;
   feed_type: uint;
   appid: id;
};
