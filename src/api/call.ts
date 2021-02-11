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
      const err = new Error(render_html(await res.text()));
      err.name = `${res.status}, ${res.statusText}`;
      throw err;
   }
   return (await res.json()).response;
}

// https://stackoverflow.com/questions/1732348
function render_html(html: string): string {
   // match inner text of html tags
   // man, this is beautiful
   const inner_texts = html.match(/(?<=<(\w+)>)[^<]*(?=<\/\1>)/g);
   if (inner_texts === null) {
      return html;
   }
   return inner_texts.join(", ").replace(/[\s\n]+/g, ' ');
}
