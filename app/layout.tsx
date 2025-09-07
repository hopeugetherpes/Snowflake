import type React from "react"
import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "Snowflake Proxy - Help Fight Censorship",
  description:
    "Help people in repressive countries bypass internet censorship by running a Snowflake proxy in your browser. Support digital freedom and privacy rights.",
  keywords: ["Snowflake", "Tor", "censorship", "privacy", "proxy", "freedom", "internet"],
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${archivo.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
