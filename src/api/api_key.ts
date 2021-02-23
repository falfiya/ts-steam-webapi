declare const api_key: unique symbol;
export type api_key = string & {readonly [api_key]: void};
export const to_api_key = (s: string) => {
   const buf = Buffer.from(s, "hex");

   if (buf.toString("hex") !== s) {
      throw new Error(`Could not parse '${s}' as hex!`);
   }

   if (buf.byteLength !== 16) {
      throw new Error("The API key should be a 32 character hex string or 16 bytes!");
   }

   return s as api_key;
};
