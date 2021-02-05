import fetch from "node-fetch";

import {steam_session} from "../steam_session";

import {api_interface} from "./interface";
import {api_method} from "./method";
import {api_version} from "./version";

const host = "api.steampowered.com";

export function api_call(
   this: steam_session,
   int: api_interface,
   met: api_method,
   ver: api_version,
   params: string
) {
   const url = `https://${host}/${int}/${met}/${ver}?key=${this.key}&${params}`;
   console.log(`API CALL: ${url}`);
   return (
      fetch(url)
         .then(res => res.json())
   );
}
