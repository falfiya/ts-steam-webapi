declare const api_key: unique symbol;
declare type api_key = string & {
    readonly [api_key]: void;
};

/** supported interfaces */
declare type api_interface = "IPlayerService" | "ISteamApps" | "ISteamUser" | "ISteamUserStats" | "ISteamNews";

declare const api_method: unique symbol;
declare type api_method = string & {
    readonly [api_method]: void;
};

declare type api_version = "v1" | "v2";

declare const numeral: unique symbol;
declare enum numerals {
    uint = 0,
    int = 1,
    float = 2
}
declare type uint = number & {
    [numeral]: numerals.uint;
};
declare type float = number & {
    [numeral]: numerals.float;
};

declare const app_id: unique symbol;
declare type app_id = uint & {
    readonly [app_id]: void;
};

declare type o_app_id = {
    appid: app_id;
};

declare const app_name: unique symbol;
declare type app_name = string & {
    readonly [app_name]: void;
};

declare type o_name = {
    name: app_name;
};

declare const minutes: unique symbol;
declare type minutes = uint & {
    readonly [minutes]: void;
};

declare type o_playtime2 = {
    playtime_2weeks: minutes;
};

/**
 * For whatever reason, platform specific playtimes may not be accurate.
 * `playtime_forever` does not always equal
 * `playtime_windows_forever + playtime_mac_forever + playtime_linux_forever`.
 * It's best to only use `playtime_forever`.
 */
declare type o_playtime = {
    playtime_forever: minutes;
    /** May not be accurate */
    playtime_windows_forever: minutes;
    /** May not be accurate */
    playtime_mac_forever: minutes;
    /** May not be accurate */
    playtime_linux_forever: minutes;
};

declare const app_image_id: unique symbol;
declare type app_image_id = string & {
    readonly [app_image_id]: void;
};

declare type o_app_image_icon_ids = {
    img_icon_url: app_image_id;
    img_logo_url: app_image_id;
};

declare type recently_played_game = o_app_id & o_name & o_playtime2 & o_playtime & o_app_image_icon_ids;

declare const steam_id: unique symbol;
declare type steam_id = string & {
    readonly [steam_id]: void;
};

declare function GetRecentlyPlayedGames(this: steam_session, user: steam_id, count?: uint): Promise<recently_played_game[]>;

declare type GetOwnedGames_options = {
    /** @default false */
    include_appinfo?: boolean;
    /** @default false */
    include_played_free_games?: boolean;
    /** @default [] */
    appids_filter?: app_id[];
    /** @default false */
    include_free_sub?: boolean;
    /** @default false */
    skip_unvetted_apps?: boolean;
};

/**
 * Basic information about an owned game.
 * To get the full record, call `GetOwnedGames` with the `appinfo` option set
 * to `true`.
 */
declare type owned_game = o_app_id & o_playtime;

declare type o_stat_visibility = {
    has_community_visible_stats: boolean;
};

/** Full information about an owned game */
declare type owned_game_ex = owned_game & o_name & o_playtime2 & o_app_image_icon_ids & o_stat_visibility;

declare function GetOwnedGames(user: steam_id): Promise<owned_game[]>;
declare function GetOwnedGames(user: steam_id, opts: GetOwnedGames_options & {
    include_appinfo?: false;
}): Promise<owned_game[]>;
declare function GetOwnedGames(user: steam_id, opts: GetOwnedGames_options & {
    include_appinfo: true;
}): Promise<owned_game_ex[]>;

declare function GetSteamLevel(this: steam_session, user: steam_id): Promise<uint>;

declare type o_player_level = {
    player_level: uint;
};

declare type o_player_xp = {
    player_xp: uint;
    player_level: uint;
    player_xp_needed_to_level_up: uint;
    player_xp_needed_current_level: uint;
};

declare const community_item_id: unique symbol;
declare type community_item_id = string & {
    readonly [community_item_id]: void;
};

declare type badge = {
    badgeid: uint;
    level: uint;
    completion_time: uint;
    xp: uint;
    scarcity: uint;
    communityitemid?: community_item_id;
    /** No idea if this is RRGGBB */
    border_color?: uint;
};

declare type o_badges = {
    bages: badge[];
};

declare function GetBadges(this: steam_session, user: steam_id): Promise<o_badges & o_player_xp & o_player_level>;

declare const quest_id: unique symbol;
declare type quest_id = uint & {
    readonly [quest_id]: void;
};

declare type quest = {
    questid: quest_id;
    completed: boolean;
};

declare function GetCommunityBadgeProgress(this: steam_session, user: steam_id): Promise<quest[]>;

declare type user_relationship = "all" | "friend";

declare const epoch: unique symbol;
/** Unix Timestamp */
declare type epoch = uint & {
    readonly [epoch]: void;
};

declare type friend = {
    steamid: steam_id;
    relationship: user_relationship;
    friend_since: epoch;
};

declare function GetFriendList(this: steam_session, user: steam_id, relationship?: user_relationship): Promise<friend[]>;

declare type player_ban_data = {
    SteamId: steam_id;
    CommunityBanned: boolean;
    VACBanned: boolean;
    NumberOfVACBans: uint;
    DaysSinceLastBan: uint;
    NumberOfGameBans: uint;
    EconomyBan: "none" | string;
};

declare function GetPlayerBans(this: steam_session, users: steam_id[]): Promise<player_ban_data[]>;

declare enum community_visibility_state {
    private = 1,
    friends_only = 2,
    public = 3
}

declare type profile_has_been_configured = 0 | 1;

declare const avatar_hash: unique symbol;
declare type avatar_hash = string & {
    readonly [avatar_hash]: void;
};

declare enum persona_state {
    offline = 0,
    online = 1,
    busy = 2,
    away = 3,
    snooze = 4,
    looking_to_trade = 5,
    looking_to_play = 6
}

declare const clan_id: unique symbol;
/**
 * String that when parsed, only the lowest 32 bits matter.
 * 103582791429521408 is returned for invalid
 */
declare type clan_id = string & {
    readonly [clan_id]: void;
};

declare enum persona_state_flags {
    has_rich_presence = 1,
    in_joinable_game = 2,
    golden = 4,
    remote_play_together = 8,
    client_type_web = 256,
    client_type_mobile = 512,
    client_type_tenfoot = 1024,
    client_type_vr = 2048,
    launch_type_gamepad = 4096,
    launch_type_compat_tool = 8192
}

declare const steamcdn_akami: "https://steamcdn-a.akamaihd.net";
declare type steamcdn_akami = typeof steamcdn_akami;

declare type hex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
declare type avatar_hex_byte = `${hex}${hex}`;

declare const public_image = "steamcommunity/public/images";
declare type public_image<H extends string, S extends string> = `${H}/${typeof public_image}/${S}`;

declare type or<T, other> = T extends unknown ? other : T;

declare type avatar_size = "" | "_medium" | "_full";
declare const avatar = "avatars";
declare type avatar<host extends string, byte extends avatar_hex_byte, hash extends avatar_hash, size extends avatar_size = ""> = `${public_image<host, `${typeof avatar}/${or<byte, string>}/${or<hash, string>}${size}.jpg`>}`;

declare const profile_url: "https://steamcommunity.com/profiles";
declare type profile_url<id extends steam_id> = `${typeof profile_url}/${or<id, number>}`;
declare const id_url: "https://steamcommunity.com/id";
declare type id_url<vanity extends string> = `${typeof id_url}/${or<vanity, string>}`;
declare type user_url<id extends steam_id = steam_id, vanity extends string = string> = profile_url<id> | id_url<vanity>;

declare type player_summary<id extends steam_id, a_byte extends avatar_hex_byte, a_hash extends avatar_hash> = {
    steamid: id;
    communityvisibilitystate: community_visibility_state;
    profilestate: profile_has_been_configured;
    personaname: string;
    profileurl: user_url<id>;
    avatar: avatar<steamcdn_akami, a_byte, a_hash>;
    avatarmedium: avatar<steamcdn_akami, a_byte, a_hash, "_medium">;
    avatarfull: avatar<steamcdn_akami, a_byte, a_hash, "_full">;
    avatarhash: avatar_hash;
    lastlogoff: epoch;
    personastate: persona_state;
    realname?: string;
    primaryclanid: clan_id;
    timecreated: epoch;
    personastateflags: persona_state_flags;
    /** @link https://github.com/RudeySH/SteamCountries */
    loccountrycode: string;
    /** @link https://github.com/RudeySH/SteamCountries */
    locstatecode: string;
};

declare function GetPlayerSummaries(this: steam_session, users: steam_id[]): Promise<player_summary<steam_id, "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "0a" | "0b" | "0c" | "0d" | "0e" | "0f" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "1a" | "1b" | "1c" | "1d" | "1e" | "1f" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "2a" | "2b" | "2c" | "2d" | "2e" | "2f" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "3a" | "3b" | "3c" | "3d" | "3e" | "3f" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "4a" | "4b" | "4c" | "4d" | "4e" | "4f" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "5a" | "5b" | "5c" | "5d" | "5e" | "5f" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "6a" | "6b" | "6c" | "6d" | "6e" | "6f" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "7a" | "7b" | "7c" | "7d" | "7e" | "7f" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "8a" | "8b" | "8c" | "8d" | "8e" | "8f" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99" | "9a" | "9b" | "9c" | "9d" | "9e" | "9f" | "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "a7" | "a8" | "a9" | "aa" | "ab" | "ac" | "ad" | "ae" | "af" | "b0" | "b1" | "b2" | "b3" | "b4" | "b5" | "b6" | "b7" | "b8" | "b9" | "ba" | "bb" | "bc" | "bd" | "be" | "bf" | "c0" | "c1" | "c2" | "c3" | "c4" | "c5" | "c6" | "c7" | "c8" | "c9" | "ca" | "cb" | "cc" | "cd" | "ce" | "cf" | "d0" | "d1" | "d2" | "d3" | "d4" | "d5" | "d6" | "d7" | "d8" | "d9" | "da" | "db" | "dc" | "dd" | "de" | "df" | "e0" | "e1" | "e2" | "e3" | "e4" | "e5" | "e6" | "e7" | "e8" | "e9" | "ea" | "eb" | "ec" | "ed" | "ee" | "ef" | "f0" | "f1" | "f2" | "f3" | "f4" | "f5" | "f6" | "f7" | "f8" | "f9" | "fa" | "fb" | "fc" | "fd" | "fe" | "ff", avatar_hash>[]>;

declare const group_id: unique symbol;
/** 8 decimal digits */
declare type group_id = string & {
    readonly [group_id]: void;
};

declare type group = {
    gid: group_id;
};

declare function GetUserGroupList(this: steam_session, user: steam_id): Promise<group[]>;

declare function ResolveVanityURL(this: steam_session, vanity_url: string): Promise<steam_id>;

declare const achievement_name: unique symbol;
/** This is a game-local achievement name */
declare type achievement_name = string & {
    readonly [achievement_name]: void;
};

declare type user_achievement_unlock = {
    apiname: achievement_name;
    achieved: 0 | 1;
    unlocktime: epoch;
};

declare function GetPlayerAchievements(this: steam_session, user: steam_id, game_id: app_id): Promise<{
    gameName: string;
    steamID: steam_id;
    achievements: user_achievement_unlock[];
    success: true;
}>;

declare const game_stat_name: unique symbol;
/** This is a game-local statistic name */
declare type game_stat_name = string & {
    readonly [game_stat_name]: void;
};

declare type game_stat = {
    name: game_stat_name;
    defaultvalue: number;
    displayName: string;
};

declare const app_image = "apps";
declare type app_image<host extends string, app extends app_id, id extends app_image_id> = `${public_image<host, `${typeof app_image}/${or<app, number>}/${or<id, string>}.jpg`>}`;

declare type game_achievement<game_id extends app_id, icon_id extends app_image_id, icon_grey_id extends app_image_id> = {
    name: achievement_name;
    defaultvalue: number;
    displayName: string;
    hidden: 0 | 1;
    description: string;
    icon: app_image<steamcdn_akami, game_id, icon_id>;
    icongray: app_image<steamcdn_akami, game_id, icon_grey_id>;
};

declare type l10n = "arabic" | "bulgarian" | "schinese" | "tchinese" | "czech" | "danish" | "dutch" | "english" | "finnish" | "french" | "german" | "greek" | "hungarian" | "italian" | "japanese" | "koreana" | "norwegian" | "polish" | "portuguese" | "brazilian" | "romanian" | "russian" | "spanish" | "latam" | "swedish" | "thai" | "turkish" | "ukrainian" | "vietnamese";

declare function GetSchemaForGame(this: steam_session, game_id: app_id, localization?: l10n): Promise<{
    gameName: string;
    gameVersion: string;
    availableGameStats: {
        achievements: game_achievement<app_id, app_image_id, app_image_id>[];
        stats: game_stat[];
    };
}>;

declare type user_stat = {
    name: game_stat_name;
    value: uint;
};

/** Very similar to ISteamUserStats/GetPlayerAchievements/user_achievement_unlock */
declare type user_achievement = {
    name: achievement_name;
    achieved: 0 | 1;
};

declare function GetUserStatsForGame(this: steam_session, user: steam_id, game_id: app_id): Promise<{
    gameName: string;
    steamID: steam_id;
    achievements: user_achievement[];
    stats: user_stat[];
}>;

declare class steam_session {
    key: api_key;
    constructor(key: string);
    api_call<T>(int: api_interface, met: api_method, ver: api_version, params: string): Promise<T>;
    GetRecentlyPlayedGames: typeof GetRecentlyPlayedGames;
    GetOwnedGames: typeof GetOwnedGames;
    GetSteamLevel: typeof GetSteamLevel;
    GetBadges: typeof GetBadges;
    GetCommunityBadgeProgress: typeof GetCommunityBadgeProgress;
    GetFriendList: typeof GetFriendList;
    GetPlayerBans: typeof GetPlayerBans;
    GetPlayerSummaries: typeof GetPlayerSummaries;
    GetUserGroupList: typeof GetUserGroupList;
    ResolveVanityURL: typeof ResolveVanityURL;
    GetPlayerAchievements: typeof GetPlayerAchievements;
    GetSchemaForGame: typeof GetSchemaForGame;
    GetUserStatsForGame: typeof GetUserStatsForGame;
}

declare const percent: unique symbol;
declare type percent = float & {
    readonly [percent]: void;
};

declare type global_achievement_percent = {
    name: achievement_name;
    percent: percent;
};

declare function GetGlobalAchievementPercentagesForApp(game_id: app_id): Promise<global_achievement_percent[]>;

declare type current_players = {
    player_count?: uint;
    result: number;
};

declare function GetNumberOfCurrentPlayers(app_id: app_id): Promise<current_players>;

declare type avail_stat_links = {
    achievements: boolean;
    global_achievements: boolean;
    stats: boolean;
    gcpd: boolean;
    leaderboards: true;
    global_leaderboards: true;
};

declare type scraped_game<game_id extends app_id = app_id> = {
    appid: game_id;
    name: string;
    logo: `https://cdn.cloudflare.steamstatic.com/steam/apps/${or<game_id, number>}/capsule_184x69.jpg`;
    friendlyURL: game_id;
    availStatLinks: avail_stat_links;
    hours?: string;
    hours_forever: string;
    last_played: epoch;
    client_summary: {
        state: string;
        status: string;
        localContentSize: string;
    };
};

declare function GetScrapedGames(profile: user_url): Promise<scraped_game[]>;

export { GetGlobalAchievementPercentagesForApp, GetNumberOfCurrentPlayers, GetScrapedGames, steam_session };
