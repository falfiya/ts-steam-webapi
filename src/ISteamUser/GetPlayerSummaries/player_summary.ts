import {steam_id} from "../../shared/steam_id";

import {community_visibility_state} from "./community_visibility_state";
import {profile_has_been_configured} from "./profile_has_been_configured";

import {avatar_hash} from "../../shared/avatar_hash";

import {epoch} from "../../core/epoch";
import {persona_state} from "./persona_state";
import {clan_id} from "./clan_id";
import {persona_state_flags} from "./persona_state_flags";
import {steamcdn_akami} from "../../shared/steamcdn_akami";
import {avatar_hex_byte} from "../../shared/avatar_hex_byte";
import {avatar} from "../../shared/avatar";
import {profile_url} from "../../shared/profile_url";

export type player_summary<
   id extends steam_id,
   a_byte extends avatar_hex_byte,
   a_hash extends avatar_hash
> = {
   steamid: steam_id;

   communityvisibilitystate: community_visibility_state;
   profilestate: profile_has_been_configured;
   personaname: string;
   profileurl: profile_url<id>;

   avatar: avatar<steamcdn_akami, a_byte, a_hash>;
   avatarmedium: avatar<steamcdn_akami, a_byte, a_hash, "_medium">;
   avatarfull: avatar<steamcdn_akami, a_byte, a_hash, "_full">;
   avatarhash: avatar_hash;

   lastlogoff: epoch;
   personastate: persona_state;
   realname?: string;
   primaryclanid: clan_id;
   timecreated: epoch;
   personastateflags: persona_state_flags,
   /** @link https://github.com/RudeySH/SteamCountries */
   loccountrycode: string;
   /** @link https://github.com/RudeySH/SteamCountries */
   locstatecode: string;
};
