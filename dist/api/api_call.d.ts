import { api_interface } from "./api_interface";
import { api_method } from "./api_method";
import { api_version } from "./api_version";
declare function api_call<T>(int: api_interface, met: api_method, ver: api_version, params: string): Promise<T>;
export { api_call };
