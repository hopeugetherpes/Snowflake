"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function SnowflakePage() {
  const [isActive, setIsActive] = useState(false)
  const [connectionCount, setConnectionCount] = useState(0)

  useEffect(() => {
    // Simulate connection activity when active
    let interval: NodeJS.Timeout
    if (isActive) {
      interval = setInterval(() => {
        setConnectionCount((prev) => Math.max(0, prev + Math.floor(Math.random() * 3) - 1))
      }, 2000)
    } else {
      setConnectionCount(0)
    }
    return () => clearInterval(interval)
  }, [isActive])

  const toggleSnowflake = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header with Tor Logo */}
        <div className="text-center mb-8">
          <div className="w-[150px] h-[150px] mx-auto mb-4 flex items-center justify-center">
            <a
              href="https://snowflake.anatole.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/tor-logo.png"
                alt="Tor Onion Logo"
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />
            </a>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Snowflake <span className="font-normal text-gray-600 dark:text-gray-400">Proxy</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-balance">
            Censorship is no longer a distant problem — it's a lived reality for millions. In countries with repressive
            regimes, accessing free information is a dangerous act.
          </p>

          <p className="text-balance">
            The internet, once a tool of connection and liberation, is increasingly weaponized by authoritarian
            governments to surveil, block, and silence dissent. But you can help change that — right now, and with
            minimal effort — thanks to{" "}
            <a
              href="https://snowflake.torproject.org/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snowflake
            </a>
            .
          </p>

          <section>
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">What is Snowflake?</h2>
            <div className="space-y-4">
              <p>
                Snowflake is a lightweight, volunteer-powered proxy system that helps people bypass internet censorship.
                It works by using{" "}
                <a
                  href="https://webrtc.org/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WebRTC
                </a>{" "}
                (a peer-to-peer communication technology) to create a temporary bridge between users living under
                censorship and the{" "}
                <a
                  href="https://www.torproject.org/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tor network
                </a>{" "}
                — the global system for anonymous, uncensored browsing.
              </p>

              <p>
                When you activate Snowflake in your browser, you temporarily turn your device into a proxy node.
                Censored users can connect through your Snowflake, and from there, reach the open internet via{" "}
                <a
                  href="https://www.torproject.org/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tor
                </a>{" "}
                — securely and anonymously.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Why does this matter?</h2>
            <div className="space-y-4">
              <p>
                In places like Iran, Russia, China, and many others, people are routinely cut off from essential
                services, news outlets, and communication platforms.
              </p>

              <p>
                These aren't just inconveniences — they're life-altering restrictions that limit access to truth,
                connection, and safety. For activists, journalists, artists, students, and everyday citizens, tools like{" "}
                <a
                  href="https://www.torproject.org/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tor
                </a>{" "}
                are often the only way to stay informed and speak freely.
              </p>

              <p>
                But Tor needs{" "}
                <a
                  href="https://bridges.torproject.org/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bridges
                </a>{" "}
                — access points that are hard to block and easy to use. Snowflake offers just that: thousands of small,
                temporary proxies that are nearly impossible for censors to detect or block en masse.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">What do I do, exactly?</h2>
            <div className="space-y-4">
              <p>
                By running{" "}
                <a
                  href="https://snowflake.torproject.org/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Snowflake
                </a>{" "}
                on your device, you're simply donating a small slice of your internet connection to help someone else
                reach the open web.{" "}
                <strong>
                  You don't host any content, you're not responsible for what others do, and your own internet usage is
                  not impacted in any noticeable way.
                </strong>
              </p>

              <p>
                <strong>You remain anonymous. The person on the other end remains anonymous.</strong> It's a
                privacy-respecting, risk-free way to make a real-world difference — especially for those of us
                privileged enough to live beyond the reach of digital oppression.
              </p>
            </div>
          </section>

          {/* Snowflake Widget */}
          <section>
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              The widget below is a Snowflake Proxy
            </h2>
            <div className="space-y-4">
              <p>
                Right now, this very page can help someone in need connect to Tor and escape censorship.{" "}
                <strong>As long as you keep this page open</strong>, you're acting as a temporary bridge for freedom.
                You don't need to install anything, sign up, or configure your computer. Just by visiting, you're
                enabling someone else's voice to be heard.
              </p>

              <p>
                Alternatively, you can also install Snowflake as an extension for{" "}
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firefox
                </a>{" "}
                or{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome
                </a>{" "}
                to turn your everyday browser into a Snowflake Proxy with peace of mind without even noticing!
              </p>

              
            </div>
          </section>

          {/* Interactive Snowflake Control */}
          <Card className="p-6 bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${isActive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
                ></div>
                <span className="font-medium">{isActive ? "Snowflake Proxy Active" : "Snowflake Proxy Inactive"}</span>
              </div>

              {isActive && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    Connections served: <span className="font-mono font-medium">{connectionCount}</span>
                  </p>
                  <p className="mt-1">You are helping people bypass censorship right now!</p>
                </div>
              )}

              <Button
                onClick={toggleSnowflake}
                className={`px-8 py-2 font-medium transition-colors ${
                  isActive ? "bg-red-600 hover:bg-red-700 text-white" : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {isActive ? "Stop Snowflake" : "Start Snowflake"}
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                {isActive
                  ? "Your browser is now acting as a Snowflake proxy. Keep this tab open to continue helping."
                  : "Click to start helping people in censored countries access the free internet."}
              </p>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 space-y-2">
          <p>
            This project is independently maintained and is not affiliated with the{" "}
            <a
              href="https://www.torproject.org/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tor Project
            </a>
            .
          </p>
          <p>
            <a
              href="https://github.com/hopeugetherpes/Snowflake"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source
            </a>
            {" - No copyright / public domain ("}
            <a
              href="https://creativecommons.org/public-domain/cc0/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC0
            </a>
            )
          </p>
        </footer>
      </div>
    </div>
  )
}
