"use client"

import { useState } from "react"

const widgetUrl = "https://embed-snowflake.torproject.org/"

export function SnowflakeWidget() {
  const [isLoaded, setIsLoaded] = useState(false)

  if (!isLoaded) {
    return (
      <div className="widget-card">
        <button
          aria-describedby="snowflake-instructions"
          className="button button-primary"
          onClick={() => setIsLoaded(true)}
          type="button"
        >
          Load the official widget
        </button>
        <p className="widget-note" id="snowflake-instructions">
          First load the official widget, then switch Enabled on inside it to
          start the Snowflake proxy. Loading alone does not start sharing your
          connection. Internet access and WebRTC are required.
        </p>
        <noscript>
          JavaScript is required. You can also open the official widget using
          the link below.
        </noscript>
        <WidgetLink />
      </div>
    )
  }

  return (
    <div className="widget-card">
      <p className="widget-note" id="snowflake-instructions">
        Switch Enabled on in the Tor widget below to start sharing your
        connection. The widget shows the real proxy status and connection
        counts. Keep this tab open and your computer connected to the internet.
      </p>
      <div className="widget-frame">
        <iframe
          aria-describedby="snowflake-instructions"
          height="240"
          referrerPolicy="no-referrer"
          sandbox="allow-same-origin allow-scripts"
          src={widgetUrl}
          title="Official Tor Project Snowflake proxy widget"
          width="320"
        />
      </div>
      <button
        className="button button-secondary"
        onClick={() => setIsLoaded(false)}
        type="button"
      >
        Stop and close the widget
      </button>
      <p className="widget-note">
        To stop, switch Enabled off inside the widget, or close it with the
        button above. Only the Tor widget can report whether someone is
        connected; zero connections can simply mean it is waiting for a user.
      </p>
      <WidgetLink />
    </div>
  )
}

function WidgetLink() {
  return (
    <a
      className="external-link widget-note"
      href={widgetUrl}
      rel="noreferrer noopener"
      target="_blank"
    >
      Widget blocked or not loading? Open the official widget in a new tab.
    </a>
  )
}
