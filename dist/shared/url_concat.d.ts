import { unwrap_maybe } from "../core/newtype";
export declare const url_concat: <A extends string, B extends string>(A: A, B: B) => `${unwrap_maybe<A>}/${unwrap_maybe<B>}`;
