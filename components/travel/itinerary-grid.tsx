import type { CSSProperties } from "react"

import Image from "next/image"

import { itineraries } from "@/lib/bhutan-travel-content"

export default function ItineraryGrid() {
  return (
    <section
      id="itineraries"
      className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12"
    >
      <div
        className="reveal flex flex-col gap-2"
        style={{ "--reveal-delay": 1 } as CSSProperties}
      >
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Featured journeys
        </p>
        <h2 className="text-3xl font-semibold">Signature itineraries</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Compact, photo-led journeys with clear pacing and local access.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {itineraries.map((itinerary, index) => (
          <article
            key={itinerary.id}
            className="reveal group relative flex h-full flex-col gap-5 overflow-hidden rounded-[30px] border border-border/60 bg-card/85 p-6 shadow-[0_26px_70px_-54px_rgba(15,23,42,0.55)]"
            style={{ "--reveal-delay": index + 2 } as CSSProperties}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[24px]">
              <div className="relative h-44 w-full">
                <Image
                  src={itinerary.imageSrc}
                  alt={itinerary.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                />
              </div>
            </div>
            <div className="relative flex flex-col gap-2">
              <p className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                Featured itinerary
              </p>
              <h3 className="text-xl font-semibold text-foreground">
                {itinerary.name}
              </h3>
            </div>
            <dl className="relative grid gap-3 rounded-2xl border border-border/60 bg-background/60 p-4 text-xs">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                  Duration
                </dt>
                <dd className="text-sm font-semibold text-foreground">
                  {itinerary.duration}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                  Difficulty
                </dt>
                <dd className="text-sm font-semibold text-foreground">
                  {itinerary.difficulty}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                  Starting city
                </dt>
                <dd className="text-sm font-semibold text-foreground">
                  {itinerary.startingCity}
                </dd>
              </div>
            </dl>
            <ul className="relative flex list-disc flex-col gap-2 pl-4 text-sm text-muted-foreground">
              {itinerary.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <button
              type="button"
              className="interactive-lift relative mt-auto inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase"
            >
              {itinerary.ctaLabel}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
