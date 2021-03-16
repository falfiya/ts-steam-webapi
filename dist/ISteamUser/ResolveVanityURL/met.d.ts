import { session } from "../../shared/session";
declare function ResolveVanityURL(this: session, vanity_url: string): Promise<import("../../shared/steam_id").steam_id>;
export { ResolveVanityURL };
