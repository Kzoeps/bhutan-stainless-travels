import type { Metadata } from "next"
import { Cormorant_Garamond, Lora } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const bodyFont = Lora({
  subsets: ["latin"],
  variable: "--font-sans",
})

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Druk Path Journeys | Bhutan Travel Design Studio",
  description:
    "Design a custom Bhutan journey with local guides, sacred valley stays, and careful pacing across Paro, Punakha, and Bumthang.",
  openGraph: {
    title: "Druk Path Journeys | Bhutan Travel Design Studio",
    description:
      "Design a custom Bhutan journey with local guides, sacred valley stays, and careful pacing across Paro, Punakha, and Bumthang.",
    type: "website",
  },
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
            outline: 2px solid var(--bhutan-terracotta);
            outline-offset: 3px;
          }

          :is(input, select, textarea):focus-visible {
            box-shadow: 0 0 0 3px color-mix(in oklab, var(--bhutan-terracotta) 20%, transparent);
          }
        `}</style>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
