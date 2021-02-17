# @coalpha/steam-webapi

![If anyone wants to make me an icon, I'd be glad](misc/icon.png)

*A somewhat obsessively typed frontend to the Steam Web API*

## Supported

- IPlayerService
   - GetRecentlyPlayedGames
   - GetOwnedGames
   - GetSteamLevel
   - GetBadges
   - GetCommunityBadgeProgress
   - ~~IsPlayingSharedGame~~
- ISteamUser
   - GetFriendList
   - GetPlayerBans
   - GetPlayerSummaries
   - GetUserGroupList
   - ResolveVanityURL
- ISteamUserStats
   - GetGlobalAchievementPercentagesForApp
   - GetNumberOfCurrentPlayers
   - GetPlayerAchievements
   - GetSchemaForGame
   - GetUserStatsForGame
- ~~ISteamNews~~
   - ~~GetNewsForApp~~

# Info

This library is essentially a thin, mid-level wrapper around the Steam WebAPI.

The primary focus of this library is correctness and parity with the Steam
WebAPI. In situations where I feel like I have to make a tradeoff between
correctness and speed, I will choose the former. If you're looking for speed,
write it in C++ anyways.

Even if you don't end up using this library, the types themselves are better
documentation than what Steam has left behind. Hopefully someone will find it
educational.

Some of this code might be a bit DRY for some, which is understandable. I did go a bit overboard with sum types.
