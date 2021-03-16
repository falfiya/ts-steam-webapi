import { app_id } from "../../shared/app_id";
import { opts } from "./opts";
declare function GetNewsForApp<id extends app_id>(app_id: id, opts?: opts): Promise<import("./news_item").news_item<id, import("./news_gid").news_gid, string>[]>;
export { GetNewsForApp };
