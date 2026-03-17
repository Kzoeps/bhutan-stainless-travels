import type { Metadata } from "next"

import AboutSection from "@/components/pathfinder/about-section"
import ContactSection from "@/components/pathfinder/contact-section"
import DestinationsSection from "@/components/pathfinder/destinations-section"
import Footer from "@/components/pathfinder/footer"
import HeroSection from "@/components/pathfinder/hero-section"
import Navbar from "@/components/pathfinder/navbar"
import PackagesSection from "@/components/pathfinder/packages-section"
import { buildCanonicalUrl, buildSiteMetadata } from "@/lib/seo/site"
import { buildHomepageSchemas } from "@/lib/seo/schema"

const homepageDescription =
  "Plan a Bhutan tour with Bhutan Stainless Travels for local hosts, custom pacing, and curated stays across Paro, Thimphu, Punakha, and Bumthang."
const homepageOgImage = buildCanonicalUrl("/og/bhutan-stainless-travels-og.png")

export const metadata: Metadata = buildSiteMetadata({
  description: homepageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    description: homepageDescription,
    url: buildCanonicalUrl("/"),
    type: "website",
    images: [homepageOgImage],
  },
  twitter: {
    card: "summary_large_image",
    description: homepageDescription,
    images: [homepageOgImage],
  },
})

export default function Page() {
  const schemas = buildHomepageSchemas()

  return (
    <main
      id="top"
      className="motion-root min-h-svh bg-background text-foreground"
    >
      {schemas.map((schema) => (
        <script
          key={String(schema["@id"] ?? schema["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <PackagesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
