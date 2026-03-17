import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { buildSiteMetadata, siteSeo } from "@/lib/seo/site"

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteSeo.canonicalOrigin),
  ...buildSiteMetadata(),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        bodyFont.variable,
        displayFont.variable
      )}
    >
      <body>
        <style>{`
          :is(a, button, input, select, textarea):focus-visible {
            outline: 2px solid var(--pathfinder-maroon);
            outline-offset: 3px;
          }

          :is(input, select, textarea):focus-visible {
            box-shadow: 0 0 0 3px color-mix(in oklab, var(--pathfinder-gold) 25%, transparent);
          }
        `}</style>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
