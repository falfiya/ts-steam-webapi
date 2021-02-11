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

const newline = /\n/g;
/**
 * Match any <pre> or </pre>
 * Match any html tag who's innerHTML begins with another html tag or EOF
 */
const pre_or_useless_html_tags = /(?:<\/?pre>)|(?:<\/?\w+>(?=<|$))/g;
const html_tags_except_first = /(?<=\/?\w+>[^>]*)<\/?\w+>/g;
const first_tag = /^<\/?\w+>/;

// https://stackoverflow.com/questions/1732348
function render_html(html: string): string {
   console.log(html);
   return html
      .replace(newline, "")
      .replace(pre_or_useless_html_tags, "")
      .replace(html_tags_except_first, ", ")
      .replace(first_tag, "")
}
