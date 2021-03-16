import {steam_id} from "../../shared/steam_id";

import {community_visibility_state} from "./community_visibility_state";
import {profile_has_been_configured} from "./profile_has_been_configured";

import {avatar_hash} from "./avatar_hash";

import {epoch} from "../../core/epoch";
import {persona_state} from "./persona_state";
import {clan_id} from "./clan_id";
import {persona_state_flags} from "./persona_state_flags";
import {avatar_hex_byte} from "./avatar_hex_byte";
import {avatar} from "./avatar";
import {user_url} from "../../shared/user_url";
import {ih_steamcdn_akamihd} from "../../shared/image_hosts";

export type player_summary<
   id extends steam_id = steam_id,
   byte extends avatar_hex_byte = avatar_hex_byte,
   hash extends avatar_hash = avatar_hash,
   vanity extends string = string,
> = {
   steamid: id;

   communityvisibilitystate: community_visibility_state;
   profilestate: profile_has_been_configured;
   personaname: string;
   profileurl: user_url<id, vanity>;

   avatar: avatar<ih_steamcdn_akamihd, byte, hash>;
   avatarmedium: avatar<ih_steamcdn_akamihd, byte, hash, "_medium">;
   avatarfull: avatar<ih_steamcdn_akamihd, byte, hash, "_full">;
   avatarhash: avatar_hash;

   lastlogoff: epoch;
   personastate: persona_state;
   realname?: string;
   primaryclanid: clan_id;
   timecreated: epoch;
   personastateflags: persona_state_flags,
   /** @link https://github.com/RudeySH/SteamCountries */
   loccountrycode?: string;
   /** @link https://github.com/RudeySH/SteamCountries */
   locstatecode?: string;
};
