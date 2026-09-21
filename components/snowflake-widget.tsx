"use client"

import { useState } from "react"

export function SnowflakeWidget() {
  const [isLoaded, setIsLoaded] = useState(false)

  if (!isLoaded) {
    return (
      <div className="widget-card">
        <button
          className="button button-primary"
          onClick={() => setIsLoaded(true)}
          type="button"
        >
          Load the official widget
        </button>
        <p className="widget-note">
          This makes a direct request to embed-snowflake.torproject.org. Proxy
          service remains off until you enable it inside the Tor widget.
        </p>
      </div>
    )
  }

  return (
    <div className="widget-card">
      <div className="widget-frame">
        <iframe
          height="240"
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-same-origin allow-scripts"
          src="https://embed-snowflake.torproject.org/"
          title="Official Tor Project Snowflake proxy widget"
          width="320"
        />
      </div>
      <button
        className="button button-secondary"
        onClick={() => setIsLoaded(false)}
        type="button"
      >
        Unload the widget
      </button>
      <p className="widget-note">
        Unloading closes the embedded widget and stops this page from
        volunteering.
      </p>
    </div>
  )
}
