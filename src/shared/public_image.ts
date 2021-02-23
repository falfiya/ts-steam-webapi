import {ct} from "./ct";

export const public_image = ct("steamcommunity/public/images");
export type  public_image<H extends string, S extends string> =
   `${H}/${typeof public_image}/${S}`;
