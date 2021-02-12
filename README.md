# @coalpha/steam-webapi

![If anyone wants to make me an icon, I'd be glad](misc/icon.png)

*A TypeScript frontend to the Steam WebAPI with just enough newtypes.*

The primary focus of this library is correctness, not speed.
That's not to say that this library is slow but in situations where I feel like
I have to make a tradeoff between the two, I will choose correctness over speed.

Even if you don't end up using this library, the types themselves are better
documentation than what Steam has left behind. Hopefully someone will find it
educational.

## Supported

- IPlayerService
   - GetRecentlyPlayedGames
   - GetOwnedGames
   - GetSteamLevel
   - GetBadges
   - GetCommunityBadgeProgress
   - ~~IsPlayingSharedGame~~
- ISteamUserStats
   - 

## To Support

- GetNewsForApp
- GetPlayerSummaries
- GetFriendList
- GetPlayerAchievements
- GetUserStatsForGame
