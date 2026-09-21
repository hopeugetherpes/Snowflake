# 🧅 Snowflake Proxy

A privacy-conscious landing page for the [Tor Project's Snowflake](https://snowflake.torproject.org/) volunteer proxy widget.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhopeugetherpes%2FSnowflake)


## What this repository does

This site explains Snowflake and lets a visitor load the official Tor Project widget only after explicit consent. Loading the widget connects the browser to `embed-snowflake.torproject.org`; enabling it there donates bandwidth through WebRTC.

A Snowflake volunteer is an entry proxy, not a Tor exit relay. Even so, volunteering uses the browser's network connection and public IP address. Check local law, network policy, and data limits before enabling it.

## Privacy and security

- No analytics, advertising, account system, first-party cookies, local storage, database, or application backend.
- The Tor widget is not requested until the visitor clicks **Load the official widget**.
- The iframe uses a no-referrer policy and a restrictive sandbox.
- The site is a static export with no server-side application runtime.
- Security headers are defined in `vercel.json`.
- Image metadata that exposed an author name and Canva/Facebook identifiers has been removed without re-encoding the pixels.
- Dependencies are intentionally minimal and pinned by `package-lock.json`.
- Dependabot and CI check future dependency updates, types, builds, and production advisories.
- No environment variables are required.

The hosting provider may still retain ordinary access logs under its own policy. The Tor Project receives a request only after the widget is loaded.

## Local development

Requires Node.js 20.9 or newer and npm.

```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Deploy with Vercel

Use the button at the top of this README. It clones this public repository into your GitHub account and creates a Vercel project using the included `vercel-build` script. No environment variables or external services are required.

The production build emits a static `out/` directory. Vercel automatically serves it and applies the security headers from `vercel.json`.

## License

[MIT](LICENSE)
