import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { buildCanonicalUrl } from "@/lib/seo/site"

const canonicalUrl = buildCanonicalUrl("/bhutan-itineraries")

export const metadata: Metadata = {
  title: "Bhutan Itineraries | Sample Journeys by Length & Style",
  description:
    "Explore Bhutan itinerary ideas for 5 to 14 days, from cultural valleys to alpine escapes. Compare trip lengths and travel styles, then request a custom route.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Bhutan Itineraries | Sample Journeys by Length & Style",
    description:
      "Explore Bhutan itinerary ideas for 5 to 14 days, from cultural valleys to alpine escapes. Compare trip lengths and travel styles, then request a custom route.",
    url: canonicalUrl,
    type: "website",
  },
}

const lengthItineraries = [
  {
    label: "5-6 days",
    title: "Paro + Thimphu highlights",
    description:
      "Temple walks, the Paro valley, and a full day in Bhutan's capital with time for local markets.",
    highlights: ["Tiger's Nest hike", "Rinpung Dzong", "Thimphu craft trail"],
  },
  {
    label: "7-9 days",
    title: "Cultural heartlands",
    description:
      "Add Punakha and Dochula for river valley monasteries, rice terraces, and gentle hikes.",
    highlights: ["Punakha Dzong", "Chimi Lhakhang", "Dochula pass"],
  },
  {
    label: "10-12 days",
    title: "Western to central Bhutan",
    description:
      "Travel onward to Bumthang for sacred sites, family-run farms, and slower pacing.",
    highlights: ["Bumthang valleys", "Jakar heritage", "Hot stone bath"],
  },
  {
    label: "13-14 days",
    title: "Highland extension",
    description:
      "Blend culture with alpine scenery through Phobjikha or a short trek add-on.",
    highlights: ["Gangtey monastery", "Crane refuge", "Himalayan vistas"],
  },
]

const styleItineraries = [
  {
    title: "Family-friendly rhythms",
    description:
      "Short drives, interactive craft stops, and animal sanctuaries with plenty of rest time.",
  },
  {
    title: "Wellness and slow travel",
    description:
      "Meditation sessions, village stays, and extra time in each valley for quiet walks.",
  },
  {
    title: "Hiker's highlights",
    description:
      "Day hikes in Paro and Haa plus a light trekking extension if you want altitude.",
  },
  {
    title: "Festivals and culture",
    description:
      "Schedule dates around major tsechus with curated viewing access and temple visits.",
  },
]

const planningSteps = [
  {
    title: "Share your pace",
    description:
      "Tell us if you prefer relaxed mornings, long drives, or a balance of both.",
  },
  {
    title: "Select focus regions",
    description:
      "Choose western highlights or add central Bhutan for deeper cultural immersion.",
  },
  {
    title: "Confirm travel style",
    description:
      "We match stays, guides, and transport to your comfort and travel goals.",
  },
]

export default function BhutanItinerariesPage() {
  return (
    <main className="motion-root min-h-svh bg-background text-foreground">
      <header className="bg-maroon-deep/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
              <Image
                src="/stainless-travels-logo.png"
                alt="Bhutan Stainless Travels"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-display text-cream text-base">
              Bhutan Stainless
            </span>
          </Link>
          <nav className="text-cream/80 hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="/bhutan-tours"
              className="hover:text-gold transition-colors"
            >
              Bhutan tours
            </Link>
            <Link
              href="/bhutan-destinations"
              className="hover:text-gold transition-colors"
            >
              Bhutan destinations
            </Link>
            <Link
              href="/#contact"
              className="hover:text-gold transition-colors"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      </header>

      <section className="hero-sunrise relative overflow-hidden">
        <div className="bhutan-section mx-auto flex max-w-6xl flex-col gap-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow-compact text-maroon">
              Bhutan itinerary planning
            </p>
            <h1 className="text-ink text-4xl font-semibold sm:text-5xl">
              Bhutan itineraries designed around your pace, not a template
            </h1>
            <p className="text-slate text-base sm:text-lg">
              Start with proven route ideas, then tailor the sequence, hotel
              mix, and daily rhythm. Each sample below shows how trip length or
              travel style changes the experience.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
            <div className="bhutan-card card-tight space-y-3">
              <h2 className="text-ink text-2xl font-semibold">
                Build your itinerary around the highlights
              </h2>
              <p className="text-slate">
                Most guests pair Paro and Thimphu, then choose to extend toward
                Punakha or Bumthang. Our planners can align the route with
                cultural festivals, gentle hikes, or family time.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/bhutan-tours"
                  className="bg-maroon text-cream hover:bg-maroon-deep rounded-full px-5 py-2 text-sm font-semibold transition-colors"
                >
                  See guided tours
                </Link>
                <Link
                  href="/bhutan-destinations"
                  className="border-maroon text-maroon hover:bg-cream/10 rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
                >
                  Browse destinations
                </Link>
              </div>
            </div>
            <div className="motif-frame text-cream rounded-[1.6rem] p-6">
              <h3 className="text-xl font-semibold">
                Planning notes from local hosts
              </h3>
              <ul className="text-cream/90 mt-4 space-y-3 text-sm">
                <li>Balance travel days with at least one full valley stay.</li>
                <li>
                  Schedule a buffer day to absorb weather or festival shifts.
                </li>
                <li>
                  Let the guide handle permits while you focus on experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bhutan-section bg-background">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-3">
            <p className="eyebrow-compact text-maroon">Trip length ideas</p>
            <h2 className="text-ink text-3xl font-semibold">
              Compare itineraries by number of days
            </h2>
            <p className="text-slate">
              Use these samples as a starting point, then adjust the number of
              nights and transfer times to match your energy level.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {lengthItineraries.map((itinerary) => (
              <article
                key={itinerary.title}
                className="bhutan-card card-tight space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-cream/10 text-maroon rounded-full px-3 py-1 text-xs font-semibold">
                    {itinerary.label}
                  </span>
                  <span className="text-slate text-xs">Sample route</span>
                </div>
                <h3 className="text-ink text-xl font-semibold">
                  {itinerary.title}
                </h3>
                <p className="text-slate">{itinerary.description}</p>
                <ul className="text-slate text-sm">
                  {itinerary.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bhutan-section bg-editorial-surface section-seam-top-from-editorial">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-3">
            <p className="eyebrow-compact text-maroon">Travel style focus</p>
            <h2 className="text-ink text-3xl font-semibold">
              Adjust the route to match your travel style
            </h2>
            <p className="text-slate">
              Each itinerary can shift in pace, hotel mix, and activity level to
              reflect your priorities.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {styleItineraries.map((itinerary) => (
              <article
                key={itinerary.title}
                className="border-cream/40 rounded-2xl border bg-white/70 p-5"
              >
                <h3 className="text-ink text-lg font-semibold">
                  {itinerary.title}
                </h3>
                <p className="text-slate mt-2 text-sm">
                  {itinerary.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bhutan-section bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="eyebrow-compact text-maroon">How we plan</p>
            <h2 className="text-ink text-3xl font-semibold">
              Craft a route that fits your timing and comfort
            </h2>
            <p className="text-slate">
              Our hosts coordinate guides, drivers, and stays so you can focus
              on the experience. Use the planning steps below, then reach out
              for a personalized quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="bg-maroon text-cream hover:bg-maroon-deep rounded-full px-5 py-2 text-sm font-semibold transition-colors"
              >
                Request itinerary help
              </Link>
              <Link
                href="/bhutan-tours"
                className="border-maroon text-maroon hover:bg-cream/10 rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
              >
                Compare tour options
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {planningSteps.map((step) => (
              <div key={step.title} className="bhutan-card card-tight">
                <h3 className="text-ink text-lg font-semibold">{step.title}</h3>
                <p className="text-slate text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
