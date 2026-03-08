import { HeroSection } from "@/components/travel/hero-section"
import CulturalHighlights from "@/components/travel/cultural-highlights"
import ItineraryGrid from "@/components/travel/itinerary-grid"
import PlanningEssentials from "@/components/travel/planning-essentials"
import TrustBand from "@/components/travel/trust-band"
import PageFooter from "@/components/travel/page-footer"
import TopNav from "@/components/travel/top-nav"
import { testimonials } from "@/lib/bhutan-travel-content"

export default function Page() {
  return (
    <main
      id="top"
      className="motion-root min-h-svh bg-background text-foreground"
    >
      <TopNav />
      <HeroSection />

      <ItineraryGrid />

      <CulturalHighlights />

      <PlanningEssentials />

      <TrustBand testimonials={testimonials} />

      <PageFooter />
    </main>
  )
}
