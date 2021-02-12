# @coalpha/steam-webapi

![If anyone wants to make me an icon, I'd be glad](misc/icon.png)

*A TypeScript frontend to the Steam WebAPI with just enough newtypes.*

## Supported

- IPlayerService
   - GetRecentlyPlayedGames
   - GetOwnedGames
   - GetSteamLevel
   - GetBadges
   - GetCommunityBadgeProgress
   - ~~IsPlayingSharedGame~~

## To Support

- GetNewsForApp
- GetGlobalAchievementPercentagesForApp
- GetPlayerSummaries
- GetFriendList
- GetPlayerAchievements
- GetUserStatsForGame
- GetOwnedGames
- GetRecentlyPlayedGames

## General notes

The primary focus of this library is correctness, not speed.
That's not to say that this library is slow but in situations where I feel like
I have to make a tradeoff between the two, I will choose correctness over speed.
