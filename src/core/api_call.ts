import * as http2 from "http2";
import {gunzipSync} from "zlib";
import {uint} from "./n";
import {consumer} from "./consumer";

export type api_interface =
   | "IPlayerService"
   | "ISteamApps"
   | "ISteamUser"
   | "ISteamUserStats";

declare const api_method: unique symbol;
export type api_method = string & {readonly [api_method]: unique symbol};

export type api_version =
   | "v1"
   | "v2";

const host = "api.steampowered.com";

declare const api_key: unique symbol;
export type api_key = string & {readonly [api_key]: unique symbol};

var current_api_key: api_key | null;

export function set_api_key(to: api_key) {
   current_api_key = to;
}

// type connection_and_refcount = {
//    conn: http2.ClientHttp2Session;
//    refcount: uint;
// }

// var c_and_r: connection_and_refcount | null;

export function api_call(
   int: api_interface,
   met: api_method,
   ver: api_version,
   params: string,
   cb: consumer<object>,
) {
   // if (c_and_r === null) {
   //    c_and_r = {conn: http2.connect(host), refcount: 0 as uint};
   // }

   // c_and_r.refcount++;

   // const {conn} = c_and_r;
   const conn = http2.connect(host);

   const req = conn.request({
      "user-agent": "@coalpha/steam-webapi",
      "accept-encoding": "gzip",
      ":path": `/${int}/${met}/${ver}?key=${current_api_key}&${params}`,
   });

   var res: Buffer;

   req.once("response", headers => {
      const content_length = headers["content-length"];
      const content_encoding = headers["content-encoding"];

      if (content_length == null || content_encoding == null) {
         throw new TypeError("Not Implemented rip");
      }

      res = Buffer.allocUnsafe(+content_length);
      let pos = 0;
      req.on("data", (chunk: Buffer) => {
         chunk.copy(res, pos);
         pos += chunk.byteLength;
      });
   });
}

// export const api_call =
//    (int: api_interface, met: api_method, ver: api_version, params: string) =>
//       fetch(`https://${baseurl}/${int}/${met}/${ver}?${params_to_string(params)}`)
