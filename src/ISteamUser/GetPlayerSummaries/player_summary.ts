import {steam_id} from "../../api/steam_id";
import {community_visibility_state} from "../../api/community_visibility_state";
import {profile_has_been_configured} from "../../api/profile_has_been_configured";
import {profile_url} from "../../api/profile_url";
import {akami_avatar_url} from "../../api/akami_avatar_url";

export type player_summary = {
   steamid: steam_id;
   communityvisibilitystate: community_visibility_state;
   profilestate: profile_has_been_configured;
   personaname: string;
   profileurl: profile_url;
   avatar: akami_avatar_url;
   avatarmedium: akami_avatar_url;
   avatarfull: akami_avatar_url;
};
