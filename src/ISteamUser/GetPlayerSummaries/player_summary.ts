import {steam_id} from "../../shared/steam_id";
import {community_visibility_state} from "./community_visibility_state";
import {profile_has_been_configured} from "./profile_has_been_configured";
import {profile_url} from "../../shared/profile_url";
import {akami_avatar_url} from "../../image/akami_avatar_url";
import {avatar_hash} from "../../image/avatar_hash";
import {epoch} from "../../core/epoch";
import {persona_state} from "./persona_state";
import {clan_id} from "./clan_id";
import {persona_state_flags} from "./persona_state_flags";

export type player_summary = {
   steamid: steam_id;
   communityvisibilitystate: community_visibility_state;
   profilestate: profile_has_been_configured;
   personaname: string;
   profileurl: profile_url;
   avatar: akami_avatar_url;
   avatarmedium: akami_avatar_url;
   avatarfull: akami_avatar_url;
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
