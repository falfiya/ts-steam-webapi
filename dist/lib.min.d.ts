declare const unique_symbol: unique symbol;
declare type unique_object<T = unknown> = {
    [unique_symbol]: T;
};
declare type unwrap<T extends unique_object> = T extends infer val & T[typeof unique_symbol] ? val : never;
declare type unwrap_maybe<T> = T extends unique_object ? unwrap<T> : T;
/** unique symbol for the final purpose and usage of a newtype */
declare const final: unique symbol;

declare type api_key_t = {
    [final]: "api_key";
    [unique_symbol]: api_key_t;
};
declare type api_key = string & api_key_t;
declare const api_key: (s: string) => api_key;

declare const data_type: unique symbol;
declare type uint_t = {
    [data_type]: "uint";
    [unique_symbol]: uint_t;
};
declare type int_t = {
    [data_type]: "int";
    [unique_symbol]: int_t;
};
declare type float_t = {
    [data_type]: "float";
    [unique_symbol]: float_t;
};
declare type uint = number & uint_t;
declare function uint<n extends number>(n: n): n & number & uint_t;
declare type int = number & int_t;
declare function int<n extends number>(n: n): n & number & uint_t;
declare type float = number & float_t;
declare const float: <n extends number>(n: n) => n & number & float_t;

declare type epoch_t = {
    [final]: "epoch";
    [unique_symbol]: epoch_t;
};
/** Unix Timestamp */
declare type epoch = uint & epoch_t;
declare const to_date: (seconds: epoch) => Date;
declare const from_date: (epoch: Date) => number;

declare type minutes_t = {
    [final]: "minutes";
    [unique_symbol]: minutes_t;
};
declare type minutes = uint & minutes_t;
declare const minutes: <min extends uint>(min: min) => min & minutes_t;

declare type app_id_t = {
    [final]: "app_id";
    [unique_symbol]: app_id_t;
};
declare type app_id = uint & app_id_t;
declare const app_id: <id extends uint>(id: id) => id & app_id_t;

declare type app_image_id_t = {
    [final]: "app_image_id";
    [unique_symbol]: app_image_id_t;
};
declare type app_image_id = string & app_image_id_t;

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

declare const apps = "apps";
declare type apps = typeof apps;
declare type app_image<host extends image_host, app extends app_id, id extends app_image_id> = `${unwrap<image_host>}/${apps}/${unwrap<app>}/${unwrap<id>}.jpg`;
declare const app_image: <host extends image_host<http_host>, app extends app_id, id extends app_image_id>(host: host, app: app, id: id) => `http://${string}/steamcommunity/public/images/apps/${unwrap<app>}/${unwrap<id>}.jpg` | `https://${string}/steamcommunity/public/images/apps/${unwrap<app>}/${unwrap<id>}.jpg`;

declare const h_steamcdn_akamihd: https<"steamcdn-a.akamaihd.net">;
declare type h_steamcdn_akamihd = typeof h_steamcdn_akamihd;
declare const h_media_steampowered: https<"media.steampowered.com">;
declare type h_media_steampowered = typeof h_media_steampowered;
declare const h_steamcommunity: https<"steamcommunity.com">;
declare type h_steamcommunity = typeof h_steamcommunity;
declare const h_cf_steamstatic: https<"cdn.cloudflare.steamstatic.com">;
declare type h_cf_steamstatic = typeof h_cf_steamstatic;

declare const ih_steamcdn_akamihd: image_host<https<"steamcdn-a.akamaihd.net">>;
declare type ih_steamcdn_akamihd = typeof ih_steamcdn_akamihd;
declare const ih_media_steampowered: image_host<https<"media.steampowered.com">>;
declare type ih_media_steampowered = typeof ih_media_steampowered;

declare type steam_id_t = {
    [final]: "steam_id";
    [unique_symbol]: steam_id_t;
};
declare type steam_id = string & steam_id_t;
declare const steam_id: (s: string) => steam_id;

declare const profiles: "https://steamcommunity.com/profiles";
declare type profiles = typeof profiles;
declare const id: "https://steamcommunity.com/id";
declare type id = typeof id;
declare type profile_url<user_id extends steam_id> = `${profiles}/${unwrap<user_id>}`;
declare const profile_url: <user_id extends steam_id>(user_id: user_id) => `https://steamcommunity.com/profiles/${unwrap<user_id>}`;
declare type vanity_url<vanity extends string> = `${id}/${vanity}`;
declare const vanity_url: <vanity extends string>(vanity: vanity) => `https://steamcommunity.com/id/${vanity}`;
declare type user_url<id extends steam_id, vanity extends string> = profile_url<id> | vanity_url<vanity>;

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

type index_d$f_badge = badge;
type index_d$f_community_item_id = community_item_id;
declare namespace index_d$f {
  export {
    index_d$f_badge as badge,
    index_d$f_community_item_id as community_item_id,
  };
}

declare type quest_id_t = {
    [final]: "quest_id";
    [unique_symbol]: quest_id_t;
};
declare type quest_id = uint & quest_id_t;

declare type quest = {
    questid: quest_id;
    completed: boolean;
};

type index_d$e_quest_id = quest_id;
type index_d$e_quest = quest;
declare namespace index_d$e {
  export {
    index_d$e_quest_id as quest_id,
    index_d$e_quest as quest,
  };
}

declare type opts$1 = {
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
 * This is not actually used.
 * This is a representation of how what Steam will interpret missing parameters
 * as.
 */
declare const opts_default$1: opts$1;

declare namespace index_d$d {
  export {
    opts$1 as opts,
    opts_default$1 as opts_default,
  };
}

/**
 * For whatever reason, platform specific playtimes may not be accurate.
 * `playtime_forever` does not always equal
 * `playtime_windows_forever + playtime_mac_forever + playtime_linux_forever`.
 * It's best to only use `playtime_forever`.
 */
declare type game_base = {
    appid: app_id;
    playtime_forever: minutes;
    /** May not be accurate */
    playtime_windows_forever: minutes;
    /** May not be accurate */
    playtime_mac_forever: minutes;
    /** May not be accurate */
    playtime_linux_forever: minutes;
};
declare type game = game_base & {
    name: string;
    playtime_2weeks: minutes;
    img_icon_url: app_image_id;
    img_logo_url: app_image_id;
};

type index_d$c_game = game;
declare namespace index_d$c {
  export {
    index_d$f as GetBadges,
    index_d$e as GetCommunityBadgeProgress,
    index_d$d as GetOwnedGames,
    index_d$c_game as game,
  };
}

declare type news_gid_t = {
    [final]: "news_gid";
    [unique_symbol]: news_gid_t;
};
declare type news_gid = string & news_gid_t;

declare type news_item<id extends app_id, gid extends news_gid = news_gid, feed extends string = string> = {
    gid: news_gid;
    title: string;
    url: `https://steamstore-a.akamaihd.net/news/externalpost/${feed}/${unwrap<gid>}`;
    is_external_url: boolean;
    author: string;
    contents: string;
    feedlabel: string;
    date: epoch;
    feedname: feed;
    feed_type: uint;
    appid: id;
};

declare type opts = {
    max_length?: uint;
    end_date?: epoch;
    count?: uint;
    feeds?: string[];
    tags?: string[];
};
declare const opts_default: opts;

type index_d$b_news_gid = news_gid;
type index_d$b_news_item<_0, _1, _2> = news_item<_0, _1, _2>;
type index_d$b_opts = opts;
declare const index_d$b_opts_default: typeof opts_default;
declare namespace index_d$b {
  export {
    index_d$b_news_gid as news_gid,
    index_d$b_news_item as news_item,
    index_d$b_opts as opts,
    index_d$b_opts_default as opts_default,
  };
}

declare namespace index_d$a {
  export {
    index_d$b as GetNewsForApp,
  };
}

declare type user_relationship = "all" | "friend";

declare type friend = {
    steamid: steam_id;
    relationship: user_relationship;
    friend_since: epoch;
};

declare type friends_list = {
    friends: friend[];
};

type index_d$9_friend = friend;
type index_d$9_friends_list = friends_list;
type index_d$9_user_relationship = user_relationship;
declare namespace index_d$9 {
  export {
    index_d$9_friend as friend,
    index_d$9_friends_list as friends_list,
    index_d$9_user_relationship as user_relationship,
  };
}

declare type player_ban_data = {
    SteamId: steam_id;
    CommunityBanned: boolean;
    VACBanned: boolean;
    NumberOfVACBans: uint;
    DaysSinceLastBan: uint;
    NumberOfGameBans: uint;
    EconomyBan: "none" | string;
};

type index_d$8_player_ban_data = player_ban_data;
declare namespace index_d$8 {
  export {
    index_d$8_player_ban_data as player_ban_data,
  };
}

declare type avatar_hex_byte_t = {
    [final]: "avatar_hex_byte";
    [unique_symbol]: avatar_hex_byte_t;
};
declare type avatar_hex_byte = string & avatar_hex_byte_t;
declare type avatar_hash_t = {
    [final]: "avatar_hash";
    [unique_symbol]: avatar_hash_t;
};
declare type avatar_hash = string & avatar_hash_t;
declare type avatar_size = "" | "_medium" | "_full";
declare const avatars = "avatars";
declare type avatars = typeof avatars;
declare type avatar<host extends image_host, byte extends avatar_hex_byte, hash extends avatar_hash, size extends avatar_size = ""> = `${unwrap<host>}/${avatars}/${unwrap<byte>}/${unwrap<hash>}${size}.jpg`;
declare const avatar: <host extends image_host<http_host>, byte extends avatar_hex_byte, hash extends avatar_hash, size extends avatar_size = "">(host: host, byte: byte, hash: hash, size: size) => `${unwrap<host>}/avatars/${unwrap<byte>}/${unwrap<hash>}${size}.jpg`;

declare type clan_id_t = {
    [final]: "clan_id";
    [unique_symbol]: clan_id_t;
};
/**
 * String that when parsed, only the lowest 32 bits matter.
 * 103582791429521408 is returned for invalid
 */
declare type clan_id = string & clan_id_t;

declare enum community_visibility_state {
    private = 1,
    friends_only = 2,
    public = 3
}

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

declare enum persona_state {
    offline = 0,
    online = 1,
    busy = 2,
    away = 3,
    snooze = 4,
    looking_to_trade = 5,
    looking_to_play = 6
}

declare type player_summary<id extends steam_id = steam_id, byte extends avatar_hex_byte = avatar_hex_byte, hash extends avatar_hash = avatar_hash, vanity extends string = string> = {
    steamid: id;
    communityvisibilitystate: community_visibility_state;
    profilestate: 0 | 1;
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

declare const index_d$7_avatar: typeof avatar;
type index_d$7_avatar_hex_byte = avatar_hex_byte;
type index_d$7_avatar_hash = avatar_hash;
type index_d$7_clan_id = clan_id;
type index_d$7_community_visibility_state = community_visibility_state;
declare const index_d$7_community_visibility_state: typeof community_visibility_state;
type index_d$7_persona_state_flags = persona_state_flags;
declare const index_d$7_persona_state_flags: typeof persona_state_flags;
type index_d$7_persona_state = persona_state;
declare const index_d$7_persona_state: typeof persona_state;
type index_d$7_player_summary<_0, _1, _2, _3> = player_summary<_0, _1, _2, _3>;
declare namespace index_d$7 {
  export {
    index_d$7_avatar as avatar,
    index_d$7_avatar_hex_byte as avatar_hex_byte,
    index_d$7_avatar_hash as avatar_hash,
    index_d$7_clan_id as clan_id,
    index_d$7_community_visibility_state as community_visibility_state,
    index_d$7_persona_state_flags as persona_state_flags,
    index_d$7_persona_state as persona_state,
    index_d$7_player_summary as player_summary,
  };
}

declare type group_id_t = {
    [final]: "group_id";
    [unique_symbol]: group_id_t;
};
/** 8 decimal digits */
declare type group_id = string & group_id_t;

declare type group = {
    gid: group_id;
};

type index_d$6_group_id = group_id;
type index_d$6_group = group;
declare namespace index_d$6 {
  export {
    index_d$6_group_id as group_id,
    index_d$6_group as group,
  };
}

declare namespace index_d$5 {
  export {
    index_d$9 as GetFriendList,
    index_d$8 as GetPlayerBans,
    index_d$7 as GetPlayerSummaries,
    index_d$6 as GetUserGroupList,
  };
}

declare type achievement_name_t = {
    [final]: "achievement_name";
    [unique_symbol]: achievement_name_t;
};
/** This is a game-local achievement name */
declare type achievement_name = string & achievement_name_t;

declare type percent_t = {
    [final]: "percent";
    [unique_symbol]: percent_t;
};
declare type percent = float & percent_t;

declare type global_achievement_percent = {
    name: achievement_name;
    percent: percent;
};

type index_d$4_global_achievement_percent = global_achievement_percent;
declare namespace index_d$4 {
  export {
    index_d$4_global_achievement_percent as global_achievement_percent,
  };
}

declare type user_achievement_unlock = {
    apiname: achievement_name;
    achieved: 0 | 1;
    unlocktime: epoch;
};

type index_d$3_user_achievement_unlock = user_achievement_unlock;
declare namespace index_d$3 {
  export {
    index_d$3_user_achievement_unlock as user_achievement_unlock,
  };
}

declare type game_achievement<game_id extends app_id, icon_id extends app_image_id, icon_grey_id extends app_image_id> = {
    name: achievement_name;
    defaultvalue: number;
    displayName: string;
    hidden: 0 | 1;
    description: string;
    icon: app_image<ih_steamcdn_akamihd, game_id, icon_id>;
    icongray: app_image<ih_steamcdn_akamihd, game_id, icon_grey_id>;
};

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

declare type l10n = "arabic" | "bulgarian" | "schinese" | "tchinese" | "czech" | "danish" | "dutch" | "english" | "finnish" | "french" | "german" | "greek" | "hungarian" | "italian" | "japanese" | "koreana" | "norwegian" | "polish" | "portuguese" | "brazilian" | "romanian" | "russian" | "spanish" | "latam" | "swedish" | "thai" | "turkish" | "ukrainian" | "vietnamese";

type index_d$2_game_achievement<_0, _1, _2> = game_achievement<_0, _1, _2>;
type index_d$2_game_stat = game_stat;
type index_d$2_l10n = l10n;
declare namespace index_d$2 {
  export {
    index_d$2_game_achievement as game_achievement,
    index_d$2_game_stat as game_stat,
    index_d$2_l10n as l10n,
  };
}

/** Very similar to ISteamUserStats/GetPlayerAchievements/user_achievement_unlock */
declare type user_achievement = {
    name: achievement_name;
    achieved: 0 | 1;
};

declare type user_stat = {
    name: game_stat_name;
    value: uint;
};

type index_d$1_user_achievement = user_achievement;
type index_d$1_user_stat = user_stat;
declare namespace index_d$1 {
  export {
    index_d$1_user_achievement as user_achievement,
    index_d$1_user_stat as user_stat,
  };
}

type index_d_achievement_name = achievement_name;
type index_d_game_stat_name = game_stat_name;
declare namespace index_d {
  export {
    index_d$4 as GetGlobalAchievementPercentagesForApp,
    index_d$3 as GetPlayerAchievements,
    index_d$2 as GetSchemaForGame,
    index_d$1 as GetUserStatsForGame,
    index_d_achievement_name as achievement_name,
    index_d_game_stat_name as game_stat_name,
  };
}

declare function GetGlobalAchievementPercentagesForApp(game_id: app_id): Promise<global_achievement_percent[]>;

declare function GetNumberOfCurrentPlayers(app_id: app_id): Promise<{
    player_count?: uint | undefined;
    result: number;
}>;

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
    logo: `${unwrap<h_cf_steamstatic>}/steam/apps/${unwrap<id>}/capsule_184x69.jpg`;
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

/** supported interfaces */
declare type api_interface = "IPlayerService" | "ISteamApps" | "ISteamUser" | "ISteamUserStats" | "ISteamNews";

declare type api_method_t = {
    [final]: "api_method";
    [unique_symbol]: api_method_t;
};
declare type api_method = string & api_method_t;

declare type api_version = "v1" | "v2";

interface session {
    key: api_key;
    api_call<T>(int: api_interface, met: api_method, ver: api_version, params: string): Promise<T>;
}

declare function GetRecentlyPlayedGames(this: session, user: steam_id, count?: uint): Promise<game[]>;

/**
 * Basic information about an owned game.
 * To get the full record, call `GetOwnedGames` with the `appinfo` option set
 * to `true`.
 */
declare type owned_game = game_base;
declare type owned_game_ex = game & {
    has_community_visible_stats: boolean;
};

declare function GetOwnedGames(user: steam_id): Promise<owned_game[]>;
declare function GetOwnedGames(user: steam_id, opts: opts$1 & {
    include_appinfo?: false;
}): Promise<owned_game[]>;
declare function GetOwnedGames(user: steam_id, opts: opts$1 & {
    include_appinfo: true;
}): Promise<owned_game_ex[]>;

declare function GetSteamLevel(this: session, user: steam_id): Promise<uint>;

declare function GetBadges(this: session, user: steam_id): Promise<{
    badges: badge[];
    player_xp: uint;
    player_level: uint;
    player_xp_needed_to_level_up: uint;
    player_xp_needed_current_level: uint;
}>;

declare function GetCommunityBadgeProgress(this: session, user: steam_id): Promise<quest[]>;

declare type res<id extends app_id> = {
    appnews?: {
        appid: id;
        newsitems: news_item<id>[];
    };
};

declare function GetNewsForApp<id extends app_id>(app_id: id, opts?: opts): Promise<res<id>>;

declare function GetFriendList(this: session, user: steam_id, relationship?: user_relationship): Promise<friend[]>;

declare function GetPlayerBans(this: session, users: steam_id[]): Promise<player_ban_data[]>;

declare function GetPlayerSummaries<A extends steam_id>(users: [A]): Promise<[player_summary<A>]>;
declare function GetPlayerSummaries<A extends steam_id, B extends steam_id>(users: [A, B]): Promise<[player_summary<A>, player_summary<B>]>;
declare function GetPlayerSummaries<A extends steam_id, B extends steam_id, C extends steam_id>(users: [A, B, C]): Promise<[player_summary<A>, player_summary<B>, player_summary<C>]>;

declare function GetUserGroupList(this: session, user: steam_id): Promise<group[]>;

declare function ResolveVanityURL(this: session, vanity_url: string): Promise<steam_id>;

declare function GetPlayerAchievements(this: session, user: steam_id, game_id: app_id): Promise<{
    gameName: string;
    steamID: steam_id;
    achievements: user_achievement_unlock[];
    success: true;
}>;

declare function GetSchemaForGame(this: session, game_id: app_id, localization?: l10n): Promise<{
    gameName: string;
    gameVersion: string;
    availableGameStats: {
        achievements: game_achievement<app_id, app_image_id, app_image_id>[];
        stats: game_stat[];
    };
}>;

declare function GetUserStatsForGame(this: session, user: steam_id, game_id: app_id): Promise<{
    gameName: string;
    steamID: steam_id;
    achievements: user_achievement[];
    stats: user_stat[];
}>;

declare class steam_session implements session {
    key: api_key;
    constructor(key: string);
    api_call<T>(int: api_interface, met: api_method, ver: api_version, params: string): Promise<T>;
    GetRecentlyPlayedGames: typeof GetRecentlyPlayedGames;
    GetOwnedGames: typeof GetOwnedGames;
    GetSteamLevel: typeof GetSteamLevel;
    GetBadges: typeof GetBadges;
    GetCommunityBadgeProgress: typeof GetCommunityBadgeProgress;
    GetNewsForApp: typeof GetNewsForApp;
    GetFriendList: typeof GetFriendList;
    GetPlayerBans: typeof GetPlayerBans;
    GetPlayerSummaries: typeof GetPlayerSummaries;
    GetUserGroupList: typeof GetUserGroupList;
    ResolveVanityURL: typeof ResolveVanityURL;
    GetPlayerAchievements: typeof GetPlayerAchievements;
    GetSchemaForGame: typeof GetSchemaForGame;
    GetUserStatsForGame: typeof GetUserStatsForGame;
}

export { GetGlobalAchievementPercentagesForApp, GetNumberOfCurrentPlayers, GetScrapedGames, index_d$c as IPlayerService, index_d$a as ISteamNews, index_d$5 as ISteamUser, index_d as ISteamUserStats, api_key, app_id, app_image, app_image_id, epoch, float, from_date, h_media_steampowered, h_steamcdn_akamihd, h_steamcommunity, http_host, ih_media_steampowered, ih_steamcdn_akamihd, image_host, int, minutes, steam_id, steam_session, to_date, uint, unwrap, unwrap_maybe, user_url };
