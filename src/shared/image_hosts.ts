import {h_steamcdn_akamihd, h_media_steampowered} from "./http_hosts";
import {image_host} from "./image_host";

const ih_steamcdn_akamihd = image_host(h_steamcdn_akamihd);
type  ih_steamcdn_akamihd = typeof ih_steamcdn_akamihd;

const ih_media_steampowered = image_host(h_media_steampowered);
type  ih_media_steampowered = typeof ih_media_steampowered;

export {ih_steamcdn_akamihd, ih_media_steampowered};
