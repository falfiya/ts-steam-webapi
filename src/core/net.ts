import fetch from "node-fetch";

export const baseurl = "api.steampowered.com";

export type api_interface =
   | "IPlayerService"
   | "ISteamApps"
   | "ISteamUser"
   | "ISteamUserStats"

declare const api_method: unique symbol;
export type api_method =
   string & {readonly [api_method]: unique symbol}

export type api_version =
   | "v1"
   | "v2"

export type api_params = {[param_name: string]: string | number};

const params_to_string = (ps: api_params) =>
   Object.entries(ps)
      .map(([key, val]) => `${key}=${val}`)
      .join('&');

export const api_call =
   (int: api_interface, met: api_method, ver: api_version, params: api_params) =>
      fetch(`https://${baseurl}/${int}/${met}/${ver}?${params_to_string(params)}`)
