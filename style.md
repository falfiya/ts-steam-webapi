# style

## snake_case

snake_case for most things except Steam WebAPI method names.

## braces hug contents in objects

good:

```ts
{key: value};
```

bad:

```ts
{ key: value };
```

## export named only

I'm not dealing with default export shenannigans.

## export multiple

good:

```ts
export {a, b};
```

bad:

```ts
export const a;
export const b;
```
