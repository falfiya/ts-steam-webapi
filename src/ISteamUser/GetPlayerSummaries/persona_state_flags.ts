export enum persona_state_flags {
   has_rich_presence       = 2 ** 0,
   in_joinable_game        = 2 ** 1,
   golden                  = 2 ** 2,
   remote_play_together    = 2 ** 3,
   client_type_web         = 2 ** 8,
   client_type_mobile      = 2 ** 9,
   client_type_tenfoot     = 2 ** 10,
   client_type_vr          = 2 ** 11,
   launch_type_gamepad     = 2 ** 12,
   launch_type_compat_tool = 2 ** 13,
};
