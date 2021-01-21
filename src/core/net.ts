import fetch from "node-fetch";

export const baseurl = "api.steampowered.com";

export type api_interface =
   | "IPlayerService"
   | "ISteamApps"
   | "ISteamUser"
   | "ISteamUserStats"

export type api_method =
   string & {readonly _: unique symbol}

export type api_version =
   | "v1"
   | "v2"

export type api_param = [key: string, val: string | number];

export type api_params = api_param[];

const param_to_string  = (p: api_param)   => `${p[0]}=${p[1]}`;
const params_to_string = (ps: api_params) => ps.map(param_to_string).join('&');

export const api_call =
   (int: api_interface, met: api_method, ver: api_version, params: api_params = []) =>
      fetch(`https://${baseurl}/${int}/${met}/${ver}?${params_to_string(params)}`)
