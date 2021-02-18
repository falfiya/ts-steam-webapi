# S U F F E R I N G

![](misc/death_108.png)
![](misc/scrange_100.png)
![](misc/death_108.png)
![](misc/scrange_100.png)
![](misc/scrange_100.png)
![](misc/scrange_100.png)
![](misc/death_108.png)
![](misc/death_108.png)

## nested types and `never`

```ts
type thing<a, b> = ({val: a} & {val: b}) extends a & b ? true : false;

// what the fuck
type a = thing<1, 2>;
type b = thing<{val: 1}, {val: 2}>;
```

## `never`

```ts
// why the fuck
const a: number = "aaaaaaaaaaaaaaaa" as never;
```

## type inference with `declaration: true`???

```ts
/*
Exported variable 'url_media' has or is using name 'url_host' from external module "C:/Users/Alf/Desktop/steam-webapi/src/shared/url_host" but cannot be named.
*/
export const url_media = make_url_image_host("media.steampowered.com");

/*
Type inference? Hardly know her!
*/
export const url_media: url_host<"media.steampowered.com"> & url_image_host =
   make_url_image_host("media.steampowered.com");
```
