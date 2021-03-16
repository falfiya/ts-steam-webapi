import { app_id } from "../../shared/app_id";
import { news_item } from "./news_item";
export declare type res<id extends app_id> = {
    appnews?: {
        appid: id;
        newsitems: news_item<id>[];
    };
};
