# 🧅 Snowflake Proxy

A privacy-conscious landing page for the [Tor Project's Snowflake](https://snowflake.torproject.org/) volunteer proxy widget.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhopeugetherpes%2FSnowflake)


## What this repository does

This site explains Snowflake and lets a visitor load the official Tor Project widget only after explicit consent. Loading the widget connects the browser to `embed-snowflake.torproject.org`; enabling it there donates bandwidth through WebRTC.

## Start and stop a real proxy

1. Click **Load the official widget**. This loads the Tor Project's [official embedded widget](https://embed-snowflake.torproject.org/), as described on the [Snowflake website](https://snowflake.torproject.org/).
2. Turn **Enabled** on **inside the Tor widget**. Its own code starts the Snowflake proxy and reports the real status, connection counts, and any connection errors.
3. Keep the tab open, the computer awake, and the internet connection available. WebRTC must be enabled. No connected users can simply mean that the proxy is waiting for a client.
4. Turn **Enabled** off, or click **Stop and close the widget** to remove the iframe and stop this page's proxy. A separately opened widget or installed extension is controlled separately.

The page never claims that loading the iframe has enabled the proxy. There is no simulated activity, random connection counter, or separate fake start switch. If an iframe is blocked by the browser, the page links directly to the official widget in a new tab.

Saving a page locally does not make Snowflake work without internet access. The official widget and its proxy connections still need network access.

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

Use the button at the top of this README, or import the repository into Vercel. The included `vercel.json` explicitly selects a static deployment, installs the lockfile with `npm ci --ignore-scripts`, runs `npm run build`, and serves `out/`. No dashboard build overrides, environment variables, API keys, database, or backend are required.

The production build emits a static `out/` directory. Vercel automatically serves it and applies the security headers from `vercel.json`. The content security policy permits the official widget origin; connections made inside that cross-origin iframe are managed by the Tor Project. The visitor's browser runs the proxy, not Vercel.

The live site at `https://snowflake.anatole.co` is currently published separately with Sites. Updating this GitHub repository does not automatically publish that separate hosting project; its published files must be updated too. A Vercel project connected to this repository can use Vercel's normal Git deployment integration.

## License

[MIT](LICENSE)
