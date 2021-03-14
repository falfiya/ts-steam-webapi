import {unwrap_maybe} from "../core/newtype";

export const url_concat = <A extends string, B extends string>(A: A, B: B) =>
   `${A}/${B}` as `${unwrap_maybe<A>}/${unwrap_maybe<B>}`;
