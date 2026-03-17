import type { Metadata } from "next"
import Image from "next/image"

import Footer from "@/components/pathfinder/footer"
import Navbar from "@/components/pathfinder/navbar"
import { buildCanonicalUrl } from "@/lib/seo/site"

const canonicalUrl = buildCanonicalUrl("/bhutan-destinations")

export const metadata: Metadata = {
  title: "Bhutan Destinations | Dragon Pathfinder",
  description:
    "Explore Punakha, Phobjikha, and Bumthang with local insight, seasonal timing, and flexible routes built around how you travel.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Bhutan Destinations | Dragon Pathfinder",
    description:
      "Explore Punakha, Phobjikha, and Bumthang with local insight, seasonal timing, and flexible routes built around how you travel.",
    url: canonicalUrl,
    type: "website",
  },
}

const destinations = [
  {
    id: "punakha",
    name: "Punakha",
    image: "/punakha.webp",
    label: "Riverside capital of old Bhutan",
    description:
      "Punakha blends warm valley weather with riverside footpaths, making it a natural slow-down point between Paro and central Bhutan. Walk the suspension bridge at sunrise, wander the dzong courtyard with a guide, and spend an evening in nearby farm villages for a quieter view of daily life.",
    highlights: [
      "Golden-hour walks at the Mo Chhu and Pho Chhu confluence",
      "Punakha Dzong with time for the riverside trail",
      "Village meals and farmhouse stays outside the town center",
    ],
  },
  {
    id: "phobjikha",
    name: "Phobjikha Valley",
    image: "/phobjikha.webp",
    label: "High valley known for cranes",
    description:
      "Phobjikha is defined by open sky and quiet mornings. The Gangtey trail is gentle and wide, and winter brings black-necked cranes to the marsh. Build in extra time here if you want a reset between longer drives or prefer homestays over hotels.",
    highlights: [
      "Gangtey monastery visits timed around prayer",
      "Valley walks with wide-open views and pine forests",
      "Seasonal crane spotting and conservation center stops",
    ],
  },
  {
    id: "bumthang",
    name: "Bumthang",
    image: "/bumthang.webp",
    label: "Cultural heartland and farm valleys",
    description:
      "Bumthang's valleys are a mix of quiet temples, meadows, and farm life. It is the place to slow the itinerary for cooking lessons, storytelling evenings, and time inside small monasteries. Visitors often stay longer than planned once they reach Jakar.",
    highlights: [
      "Jakar village walks with market time",
      "Temple circuit with Jambay Lhakhang and Kurjey",
      "Cooking lessons with buckwheat and local cheese",
    ],
  },
]

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <Navbar />
      <section className="bg-editorial-surface relative overflow-hidden pt-20 pb-12 sm:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(115,53,33,0.18),_transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="font-body text-gold eyebrow-compact mb-3">
            Bhutan destinations
          </p>
          <h1 className="font-display mb-4 text-4xl text-foreground sm:text-5xl md:text-6xl">
            Choose the valleys that match your pace
          </h1>
          <p className="font-body text-slate mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
            These are the places we return to with guests again and again. Each
            valley has its own rhythm, from Punakha's riverside warmth to
            Phobjikha's open skies and Bumthang's temple-lined farms.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/bhutan-tours"
              className="font-body bg-maroon text-cream hover:bg-gold rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground"
            >
              View Bhutan tours
            </a>
            <a
              href="/bhutan-itineraries"
              className="font-body border-maroon text-maroon hover:bg-maroon hover:text-cream rounded-lg border px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300"
            >
              Browse itineraries
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row">
          <div className="md:w-1/3">
            <h2 className="font-display text-2xl text-foreground">
              Destinations at a glance
            </h2>
            <p className="font-body text-slate mt-3 text-sm leading-relaxed">
              Jump to a valley, then read how it fits into a multi-day route.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="bhutan-card bg-cream grid gap-4 rounded-[var(--pathfinder-card-radius)] p-6 sm:grid-cols-3">
              {destinations.map((destination) => (
                <a
                  key={destination.id}
                  href={`#${destination.id}`}
                  className="font-body text-maroon hover:text-gold flex items-center justify-between text-sm font-medium transition-all duration-300"
                >
                  <span>{destination.name}</span>
                  <span aria-hidden="true">v</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 pb-16">
        {destinations.map((destination, index) => (
          <section
            key={destination.id}
            id={destination.id}
            className="bg-background"
          >
            <div
              className={`mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative h-64 w-full overflow-hidden rounded-[var(--pathfinder-card-radius)] md:h-80 md:w-1/2">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <p className="font-body text-gold eyebrow-compact mb-2">
                  {destination.label}
                </p>
                <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                  {destination.name}
                </h2>
                <p className="font-body text-slate mt-4 text-sm leading-relaxed sm:text-base">
                  {destination.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {destination.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="font-body text-slate flex items-start gap-3 text-sm"
                    >
                      <span className="text-gold mt-1">-</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </main>
  )
}
