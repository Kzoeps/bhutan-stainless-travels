import { HeroSection } from "@/components/travel/hero-section"
import CulturalHighlights from "@/components/travel/cultural-highlights"
import ItineraryGrid from "@/components/travel/itinerary-grid"
import PlanningEssentials from "@/components/travel/planning-essentials"
import TrustBand from "@/components/travel/trust-band"
import PageFooter from "@/components/travel/page-footer"
import TopNav from "@/components/travel/top-nav"
import { practicalFacts, testimonials } from "@/lib/bhutan-travel-content"

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

      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Travel essentials
          </p>
          <h2 className="text-3xl font-semibold">Plan with confidence</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {practicalFacts.map((fact) => (
            <div
              key={fact.id}
              className="flex flex-col gap-2 rounded-3xl border border-border/60 bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{fact.title}</h3>
              <p className="text-sm text-muted-foreground">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PlanningEssentials />

      <TrustBand testimonials={testimonials} />

      <PageFooter />
    </main>
  )
}
