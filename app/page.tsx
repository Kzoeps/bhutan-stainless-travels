import type { Metadata } from "next"

import AboutSection from "@/components/pathfinder/about-section"
import ContactSection from "@/components/pathfinder/contact-section"
import DestinationsSection from "@/components/pathfinder/destinations-section"
import Footer from "@/components/pathfinder/footer"
import HeroSection from "@/components/pathfinder/hero-section"
import Navbar from "@/components/pathfinder/navbar"
import PackagesSection from "@/components/pathfinder/packages-section"
import { buildSiteMetadata, siteSeo } from "@/lib/seo/site"
import { buildHomepageSchemas } from "@/lib/seo/schema"

const homepageTitle = "Bhutan Tours | Tailor-Made Journeys by Dragon Pathfinder"
const homepageDescription =
  "Plan a Bhutan tour with local hosts, custom pacing, and curated stays across Paro, Thimphu, Punakha, and Bumthang."

export const metadata: Metadata = buildSiteMetadata({
  title: homepageTitle,
  description: homepageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    url: siteSeo.canonicalOrigin,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
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
