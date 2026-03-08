import type { CSSProperties } from "react"

import Image from "next/image"

import { culturalHighlights } from "@/lib/bhutan-travel-content"

export default function CulturalHighlights() {
  return (
    <section
      id="cultural-highlights"
      className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12"
    >
      <div
        className="reveal flex flex-col gap-3"
        style={{ "--reveal-delay": 1 } as CSSProperties}
      >
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Cultural immersion
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">
            Highlights of Bhutanese life
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Encounters shaped by local hosts, where stories, craft, and ritual
            unfold at an unhurried pace.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {culturalHighlights.map((highlight, index) => (
          <article
            key={highlight.id}
            className="reveal group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-border/60 bg-card/85 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.45)]"
            style={{ "--reveal-delay": index + 2 } as CSSProperties}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.16),_transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="relative overflow-hidden">
              <div className="relative h-40 w-full">
                <Image
                  src={highlight.imageSrc}
                  alt={highlight.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 220px, (min-width: 768px) 45vw, 90vw"
                />
              </div>
            </div>
            <div className="relative flex flex-1 flex-col gap-2 p-5">
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.32em] text-muted-foreground uppercase">
                <span>Highlight</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {highlight.title}
              </h3>
              <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                {highlight.meta}
              </p>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div
        className="reveal rounded-2xl border border-dashed border-border/70 bg-card/60 p-4 text-sm text-muted-foreground"
        style={{ "--reveal-delay": 6 } as CSSProperties}
      >
        <span className="font-semibold text-foreground">
          Responsible travel note:
        </span>{" "}
        Visits are coordinated with host consent and fair compensation.
      </div>
    </section>
  )
}
