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
import {user_url} from "../../shared/user_url";

export type player_summary<
   id extends steam_id,
   byte extends avatar_hex_byte,
   hash extends avatar_hash
> = {
   steamid: id;

   communityvisibilitystate: community_visibility_state;
   profilestate: profile_has_been_configured;
   personaname: string;
   profileurl: user_url<id>;

   avatar: avatar<steamcdn_akami, byte, hash>;
   avatarmedium: avatar<steamcdn_akami, byte, hash, "_medium">;
   avatarfull: avatar<steamcdn_akami, byte, hash, "_full">;
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
