import fetch from "node-fetch";
import {unwrap, unwrap_maybe} from "../core/newtype";

import {api_interface} from "./api_interface";
import {api_method} from "./api_method";
import {api_version} from "./api_version";

function unwrap_val<T>(val: T): unwrap_maybe<T> {
   return val as unwrap_maybe<T>;
}

declare const met: api_method;

const url = `https://api.steampowered.com/${unwrap_val(met)}/` as const;

async function api_call<T>
(int: api_interface, met: api_method, ver: api_version, params: string): Promise<T>
{
   /** you know, this should really have a better type than string */
   const url = `https://api.steampowered.com/${int}/${met}/${ver}?${params}`;
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
const render_html = (html: string) =>
   html
      .replace(newline, "")
      .replace(pre_or_useless_html_tags, "")
      .replace(html_tags_except_first, ", ")
      .replace(first_tag, "");
