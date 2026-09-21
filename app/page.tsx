import Image from "next/image"

import { SnowflakeWidget } from "@/components/snowflake-widget"

const externalLinkProps = {
  className: "external-link",
  rel: "noreferrer noopener",
  target: "_blank",
} as const

export default function SnowflakePage() {
  return (
    <div className="site-shell">
      <main className="container">
        <header className="site-header">
          <a aria-label="Snowflake Proxy home" className="logo-link" href="/">
            <Image
              alt="Tor onion logo"
              height={150}
              priority
              src="/tor-logo.png"
              width={150}
            />
          </a>
          <h1>
            Snowflake <span>Proxy</span>
          </h1>
        </header>

        <div className="content">
          <section aria-labelledby="what-is-snowflake">
            <h2 id="what-is-snowflake">What is Snowflake?</h2>
            <p>
              <a
                href="https://snowflake.torproject.org/"
                {...externalLinkProps}
              >
                Snowflake
              </a>{" "}
              is a volunteer-powered proxy system from the Tor Project. It uses
              WebRTC to create short-lived bridges that help people reach the
              Tor network where direct access is blocked.
            </p>
            <p>
              A volunteer is an entry proxy, not a Tor exit relay. Destination
              websites see a Tor exit address rather than the volunteer&apos;s
              address, and the volunteer cannot see the user&apos;s final
              destination or the content of their Tor traffic.
            </p>
          </section>

          <section aria-labelledby="why-it-matters">
            <h2 id="why-it-matters">Why does it matter?</h2>
            <p>
              Censorship can block public Tor relays. Snowflake distributes the
              entry point across many temporary volunteer proxies, making that
              kind of blocking more difficult.
            </p>
          </section>

          <section aria-labelledby="before-you-enable">
            <h2 id="before-you-enable">Before you enable it</h2>
            <p>
              The official widget can donate some of this browser&apos;s
              bandwidth while it remains open and enabled. It does not make
              this browser a Tor exit, but the network connection and public IP
              address participate in WebRTC proxying.
            </p>
            <p>
              No network tool is literally risk-free. Check local law, your
              organisation&apos;s network policy, and any data limits before
              volunteering.
            </p>
          </section>

          <section aria-labelledby="official-widget">
            <h2 id="official-widget">Official Tor Project widget</h2>
            <p>
              For privacy, the third-party iframe is not contacted until you
              choose to load it. The Tor widget then asks separately before
              enabling proxy service.
            </p>
            <SnowflakeWidget />
            <p>
              Tor also offers official{" "}
              <a
                href="https://snowflake.torproject.org/"
                {...externalLinkProps}
              >
                browser-extension and standalone options
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="privacy">
            <h2 id="privacy">Privacy notice</h2>
            <div className="privacy-card">
              <ul>
                <li>
                  This site has no analytics, advertising, accounts, first-party
                  cookies, local storage, database, or application backend.
                </li>
                <li>
                  The hosting provider may retain ordinary access logs under
                  its own policy.
                </li>
                <li>
                  Loading the widget makes a direct request to the Tor Project.
                  Enabling it there uses WebRTC and shares network metadata
                  needed to operate the proxy.
                </li>
                <li>
                  The iframe receives no referrer and runs inside a restrictive
                  browser sandbox.
                </li>
              </ul>
            </div>
          </section>
        </div>

        <footer>
          <p>
            Independent open-source interface for the official Tor Project
            widget. Not an official Tor Project website.
          </p>
          <p>
            <a
              href="https://github.com/hopeugetherpes/Snowflake"
              {...externalLinkProps}
            >
              Source code
            </a>{" "}
            · MIT licensed
          </p>
        </footer>
      </main>
    </div>
  )
}
