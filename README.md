# @coalpha/ts-steam-webapi

![If anyone wants to make me an icon, I'd be glad](misc/icon.png)

This library is an obsessively typed frontend to the Steam Web API.
At times, it might look like it goes overboard with types but that's pretty much
the entire point.

## Install

This library is not published on npm yet but you can still install it:

```
npm i git+https://github.com/coalpha/ts-steam-webapi.git
```

## Tree

- IPlayerService
   - GetRecentlyPlayedGames
   - GetOwnedGames
   - GetSteamLevel
   - GetBadges
   - GetCommunityBadgeProgress
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
- ISteamNews
   - GetNewsForApp

### IPlayerService

### ISteamUser

### ISteamUserStats

## Other

Large thanks to [https://steamwebapi.azurewebsites.net/](https://steamwebapi.azurewebsites.net/).
Not as much of a thanks to Valve, who's documentation could be better.
