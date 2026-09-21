import type { Metadata } from "next"
import type { ReactNode } from "react"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://snowflake.anatole.co"),
  title: "Snowflake Proxy — Help people access the Tor network",
  description:
    "Learn about Tor Snowflake and choose whether to load the official volunteer proxy widget.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    follow: true,
    index: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
