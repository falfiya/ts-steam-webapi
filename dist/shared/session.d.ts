import { api_key } from "../api/api_key";
import { api_interface } from "../api/api_interface";
import { api_method } from "../api/api_method";
import { api_version } from "../api/api_version";
export interface session {
    key: api_key;
    api_call<T>(int: api_interface, met: api_method, ver: api_version, params: string): Promise<T>;
}
