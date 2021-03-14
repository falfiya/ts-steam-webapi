/** unique symbol for the final purpose and usage of a newtype */
declare const final: unique symbol;

declare const unique_symbol: unique symbol;
declare type unique_object<T = unknown> = {
    [unique_symbol]: T;
};
declare type unwrap<T extends unique_object> = T extends infer val & T[typeof unique_symbol] ? val : never;

declare type api_key_t = {
    [final]: "api_key";
    [unique_symbol]: api_key_t;
};
declare type api_key = string & api_key_t;

/** supported interfaces */
declare type api_interface = "IPlayerService" | "ISteamApps" | "ISteamUser" | "ISteamUserStats" | "ISteamNews";

declare type api_method_t = {
    [final]: "api_method";
    [unique_symbol]: api_method_t;
};
declare type api_method = string & api_method_t;

declare type api_version = "v1" | "v2";

interface isteam_session {
    key: api_key;
    api_call<T>(int: api_interface, met: api_method, ver: api_version, params: string): Promise<T>;
}

declare const data_type: unique symbol;
declare type uint_t = {
    [data_type]: "uint";
    [unique_symbol]: uint_t;
};
declare type float_t = {
    [data_type]: "float";
    [unique_symbol]: float_t;
};
declare type uint = number & uint_t;
declare type float = number & float_t;

declare type app_id_t = {
    [final]: "app_id";
    [unique_symbol]: app_id_t;
};
declare type app_id = uint & app_id_t;

declare type o_app_id = {
    appid: app_id;
};

declare type app_name_t = {
    [final]: "app_name";
    [unique_symbol]: app_name_t;
};
declare type app_name = string & app_name_t;

declare type o_name = {
    name: app_name;
};

declare type minutes_t = {
    [final]: "minutes";
    [unique_symbol]: minutes_t;
};
declare type minutes = uint & minutes_t;

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

declare type app_image_id_t = {
    [final]: "app_image_id";
    [unique_symbol]: app_image_id_t;
};
declare type app_image_id = string & app_image_id_t;

declare type o_app_image_icon_ids = {
    img_icon_url: app_image_id;
    img_logo_url: app_image_id;
};

declare type recently_played_game = o_app_id & o_name & o_playtime2 & o_playtime & o_app_image_icon_ids;

declare type steam_id_t = {
    [final]: "steam_id";
    [unique_symbol]: steam_id_t;
};
declare type steam_id = string & steam_id_t;
declare const steam_id: (s: string) => steam_id;

declare function GetRecentlyPlayedGames(this: isteam_session, user: steam_id, count?: uint): Promise<recently_played_game[]>;

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

declare function GetSteamLevel(this: isteam_session, user: steam_id): Promise<uint>;

declare type o_player_level = {
    player_level: uint;
};

declare type o_player_xp = {
    player_xp: uint;
    player_level: uint;
    player_xp_needed_to_level_up: uint;
    player_xp_needed_current_level: uint;
};

declare type community_item_id_t = {
    [final]: "community_item_id";
    [unique_symbol]: community_item_id_t;
};
declare type community_item_id = string & community_item_id_t;

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

declare function GetBadges(this: isteam_session, user: steam_id): Promise<o_badges & o_player_xp & o_player_level>;

declare type quest_id_t = {
    [final]: "quest_id";
    [unique_symbol]: quest_id_t;
};
declare type quest_id = uint & quest_id_t;

declare type quest = {
    questid: quest_id;
    completed: boolean;
};

declare function GetCommunityBadgeProgress(this: isteam_session, user: steam_id): Promise<quest[]>;

declare type user_relationship = "all" | "friend";

declare type epoch_t = {
    [final]: "epoch";
    [unique_symbol]: epoch_t;
};
/** Unix Timestamp */
declare type epoch = uint & epoch_t;

declare type friend = {
    steamid: steam_id;
    relationship: user_relationship;
    friend_since: epoch;
};

declare function GetFriendList(this: isteam_session, user: steam_id, relationship?: user_relationship): Promise<friend[]>;

declare type player_ban_data = {
    SteamId: steam_id;
    CommunityBanned: boolean;
    VACBanned: boolean;
    NumberOfVACBans: uint;
    DaysSinceLastBan: uint;
    NumberOfGameBans: uint;
    EconomyBan: "none" | string;
};

declare function GetPlayerBans(this: isteam_session, users: steam_id[]): Promise<player_ban_data[]>;

declare enum community_visibility_state {
    private = 1,
    friends_only = 2,
    public = 3
}

declare type profile_has_been_configured = 0 | 1;

declare type avatar_hash_t = {
    [final]: "avatar_hash";
    [unique_symbol]: avatar_hash_t;
};
declare type avatar_hash = string & avatar_hash_t;

declare enum persona_state {
    offline = 0,
    online = 1,
    busy = 2,
    away = 3,
    snooze = 4,
    looking_to_trade = 5,
    looking_to_play = 6
}

declare type clan_id_t = {
    [final]: "clan_id";
    [unique_symbol]: clan_id_t;
};
/**
 * String that when parsed, only the lowest 32 bits matter.
 * 103582791429521408 is returned for invalid
 */
declare type clan_id = string & clan_id_t;

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

declare type avatar_hex_byte_t = {
    [final]: "avatar_hex_byte";
    [unique_symbol]: avatar_hex_byte_t;
};
declare type avatar_hex_byte = string & avatar_hex_byte_t;

declare type http_host_t = {
    [final]: "http_host";
    [unique_symbol]: http_host_t;
};
declare type http_host = `http${"" | "s"}://${string}` & http_host_t;
declare type https<host extends string = string> = `https://${host}` & http_host_t;
declare const https: <host extends string>(host: host) => https<host>;

declare type image_host_t = {
    [final]: "image_host";
    [unique_symbol]: image_host_t;
};
declare const images = "steamcommunity/public/images";
declare type images = typeof images;
declare type image_host<host extends http_host = http_host> = `${unwrap<host>}/${images}` & image_host_t;
declare const image_host: <host extends http_host>(host: host) => image_host<host>;

declare type avatar_size = "" | "_medium" | "_full";
declare const avatars = "avatars";
declare type avatars = typeof avatars;
declare type avatar<host extends image_host, byte extends avatar_hex_byte, hash extends avatar_hash, size extends avatar_size = ""> = `${unwrap<host>}/${avatars}/${unwrap<byte>}/${unwrap<hash>}${size}.jpg`;
declare const avatar: <host extends image_host<http_host>, byte extends avatar_hex_byte, hash extends avatar_hash, size extends avatar_size = "">(host: host, byte: byte, hash: hash, size: size) => `${unwrap<host>}/avatars/${unwrap<byte>}/${unwrap<hash>}${size}.jpg`;

declare const profiles: "https://steamcommunity.com/profiles";
declare type profiles = typeof profiles;
declare const id: "https://steamcommunity.com/id";
declare type id = typeof id;
declare type profile_url<user_id extends steam_id> = `${profiles}/${unwrap<user_id>}`;
declare const profile_url: <user_id extends steam_id>(user_id: user_id) => `https://steamcommunity.com/profiles/${unwrap<user_id>}`;
declare type vanity_url<vanity extends string> = `${id}/${vanity}`;
declare const vanity_url: <vanity extends string>(vanity: vanity) => `https://steamcommunity.com/id/${vanity}`;
declare type user_url<id extends steam_id, vanity extends string> = profile_url<id> | vanity_url<vanity>;

declare const ih_steamcdn_akamihd: image_host<https<"steamcdn-a.akamaihd.net">>;
declare type ih_steamcdn_akamihd = typeof ih_steamcdn_akamihd;

declare type player_summary<id extends steam_id, byte extends avatar_hex_byte, hash extends avatar_hash, vanity extends string> = {
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
    personastateflags: persona_state_flags;
    /** @link https://github.com/RudeySH/SteamCountries */
    loccountrycode?: string;
    /** @link https://github.com/RudeySH/SteamCountries */
    locstatecode?: string;
};

declare function GetPlayerSummaries(this: isteam_session, users: steam_id[]): Promise<player_summary<steam_id, avatar_hex_byte, avatar_hash, string>[]>;

declare type group_id_t = {
    [final]: "group_id";
    [unique_symbol]: group_id_t;
};
/** 8 decimal digits */
declare type group_id = string & group_id_t;

declare type group = {
    gid: group_id;
};

declare function GetUserGroupList(this: isteam_session, user: steam_id): Promise<group[]>;

declare function ResolveVanityURL(this: isteam_session, vanity_url: string): Promise<steam_id>;

declare type achievement_name_t = {
    [final]: "achievement_name";
    [unique_symbol]: achievement_name_t;
};
/** This is a game-local achievement name */
declare type achievement_name = string & achievement_name_t;

declare type user_achievement_unlock = {
    apiname: achievement_name;
    achieved: 0 | 1;
    unlocktime: epoch;
};

declare function GetPlayerAchievements(this: isteam_session, user: steam_id, game_id: app_id): Promise<{
    gameName: string;
    steamID: steam_id;
    achievements: user_achievement_unlock[];
    success: true;
}>;

declare type game_stat_name_t = {
    [final]: "game_stat_name";
    [unique_symbol]: game_stat_name_t;
};
/** This is a game-local statistic name */
declare type game_stat_name = string & game_stat_name_t;

declare type game_stat = {
    name: game_stat_name;
    defaultvalue: number;
    displayName: string;
};

declare const apps = "apps";
declare type apps = typeof apps;
declare type app_image<host extends image_host, app extends app_id, id extends app_image_id> = `${unwrap<image_host>}${apps}/${unwrap<app>}/${unwrap<id>}.jpg`;
declare const app_image: <host extends image_host<http_host>, app extends app_id, id extends app_image_id>(host: host, app: app, id: id) => `http://${string}/steamcommunity/public/imagesapps/${unwrap<app>}/${unwrap<id>}.jpg` | `https://${string}/steamcommunity/public/imagesapps/${unwrap<app>}/${unwrap<id>}.jpg`;

declare type game_achievement<game_id extends app_id, icon_id extends app_image_id, icon_grey_id extends app_image_id> = {
    name: achievement_name;
    defaultvalue: number;
    displayName: string;
    hidden: 0 | 1;
    description: string;
    icon: app_image<ih_steamcdn_akamihd, game_id, icon_id>;
    icongray: app_image<ih_steamcdn_akamihd, game_id, icon_grey_id>;
};

declare type l10n = "arabic" | "bulgarian" | "schinese" | "tchinese" | "czech" | "danish" | "dutch" | "english" | "finnish" | "french" | "german" | "greek" | "hungarian" | "italian" | "japanese" | "koreana" | "norwegian" | "polish" | "portuguese" | "brazilian" | "romanian" | "russian" | "spanish" | "latam" | "swedish" | "thai" | "turkish" | "ukrainian" | "vietnamese";

declare function GetSchemaForGame(this: isteam_session, game_id: app_id, localization?: l10n): Promise<{
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

declare function GetUserStatsForGame(this: isteam_session, user: steam_id, game_id: app_id): Promise<{
    gameName: string;
    steamID: steam_id;
    achievements: user_achievement[];
    stats: user_stat[];
}>;

declare class steam_session implements isteam_session {
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

declare type percent_t = {
    [final]: "percent";
    [unique_symbol]: percent_t;
};
declare type percent = float & percent_t;

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

declare type scraped_game<id extends app_id = app_id> = {
    appid: id;
    name: string;
    logo: `https://cdn.cloudflare.steamstatic.com/steam/apps/${unwrap<id>}/capsule_184x69.jpg`;
    friendlyURL: id;
    availStatLinks: avail_stat_links;
    /** convertable to float */
    hours?: string;
    hours_forever: string;
    last_played: epoch;
    client_summary: {
        state: string;
        status: string;
        localContentSize: string;
    };
};

declare function GetScrapedGames(profile: user_url<steam_id, string>): Promise<scraped_game[]>;

export { GetGlobalAchievementPercentagesForApp, GetNumberOfCurrentPlayers, GetScrapedGames, steam_session };
