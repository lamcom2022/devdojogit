---
title: Software Requirements
description: List of must have and optional softwares used in the development of  platform
category: Software libraries
position: 7
---

## Softwares

### Must have

### Optional

- [Argo http tunnel from cloudflare](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation) - Make your localhost in public internet
- [Surge](www.surge.sh) - For SPA Deployment
- [Traefik](www.surge.sh) - Reverse proxy

Run `Argo tunnel`

<code-group>
  <code-block label="Bash" active>

```bash
./cloudflared tunnel --url http://localhost:8000
```

  </code-block>
  <code-block label="Go">

```bash
./cloudflared tunnel --url http://localhost:8000
```

  </code-block>
</code-group>

### Run in development mode

<code-group>
  
  <code-block label="NPM" active>

```bash
npm run dev
```

  </code-block>
<code-block label="Yarn">

```bash
yarn dev
```

  </code-block>
  
</code-group>

## TypeScript

Add the types to your "types" array in tsconfig.json after the `@nuxt/types` (Nuxt 2.9.0+) or `@nuxt/vue-app` entry.

**tsconfig.json**

```json
{
  "compilerOptions": {
    "types": ["@nuxt/types", "@nuxt/content"]
  }
}
```

> **Why?**
>
> Because of the way nuxt works the `$content` property on the context has to be merged into the nuxt `Context` interface via [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html). Adding `@nuxt/content` to your types will import the types from the package and make typescript aware of the additions to the `Context` interface.
