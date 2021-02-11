import fetch from "node-fetch";

import {steam_session} from "../steam_session";

import {api_interface} from "./interface";
import {api_method} from "./method";
import {api_version} from "./version";

const host = "api.steampowered.com";

export async function api_call(
   this: steam_session,
   int: api_interface,
   met: api_method,
   ver: api_version,
   params: string
) {
   const url = `https://${host}/${int}/${met}/${ver}?key=${this.key}&${params}`;
   const res = await fetch(url);
   if (res.status !== 200) {
      const err = new Error(await res.text());
      err.name = `${res.status}, ${res.statusText}`;
      throw err;
   }
   return (await res.json()).response;
}
