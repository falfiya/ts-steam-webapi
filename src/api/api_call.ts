import fetch from "node-fetch";

import {api_interface} from "./api_interface";
import {api_method} from "./api_method";
import {api_version} from "./api_version";

const host = "api.steampowered.com";

async function api_call<T>
(int: api_interface, met: api_method, ver: api_version, params: string): Promise<T>
{
   const url = `https://${host}/${int}/${met}/${ver}?${params}`;
   const res = await fetch(url);
   if (res.status !== 200) {
      const err = new Error(render_html(await res.text()));
      err.name = `${res.status}, ${res.statusText}`;
      throw err;
   }

   return res.json();
}

export {api_call};

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
