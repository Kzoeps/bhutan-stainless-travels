import type { CSSProperties } from "react"

import Image from "next/image"

import { heroContent } from "@/lib/bhutan-travel-content"

export function HeroSection() {
  return (
    <section className="hero-sunrise relative isolate overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <figure
            className="reveal hero-photo-shell relative min-h-[320px] overflow-hidden rounded-[var(--bhutan-radius-card)] bg-[color:var(--bhutan-ink)]/5 shadow-[0_30px_60px_-45px_rgba(24,26,35,0.7)] sm:min-h-[420px]"
            style={{ "--reveal-delay": 2 } as CSSProperties}
          >
            <Image
              alt={heroContent.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              src={heroContent.imageSrc}
            />
          </figure>
          <div className="flex flex-col gap-5">
            <p
              className="reveal text-xs font-semibold tracking-[0.3em] text-[color:var(--bhutan-slate)] uppercase"
              style={{ "--reveal-delay": 1 } as CSSProperties}
            >
              {heroContent.eyebrow}
            </p>
            <div className="flex flex-col gap-4">
              <h1
                className="reveal text-4xl font-semibold tracking-tight text-[color:var(--bhutan-ink)] sm:text-5xl lg:text-6xl"
                style={{ "--reveal-delay": 2 } as CSSProperties}
              >
                {heroContent.headline}
              </h1>
              <p
                className="reveal max-w-md text-base text-[color:var(--bhutan-slate)] sm:text-lg"
                style={{ "--reveal-delay": 3 } as CSSProperties}
              >
                {heroContent.description}
              </p>
            </div>
            <div
              className="reveal flex flex-wrap gap-3"
              style={{ "--reveal-delay": 4 } as CSSProperties}
            >
              <a
                className="interactive-lift inline-flex items-center justify-center rounded-full bg-[color:var(--bhutan-ink)] px-6 py-3 text-sm font-semibold text-[color:var(--bhutan-cream)]"
                href={heroContent.primaryCta.href}
              >
                {heroContent.primaryCta.label}
              </a>
              <a
                className="interactive-lift inline-flex items-center justify-center rounded-full border border-[color:var(--bhutan-ink)]/20 px-6 py-3 text-sm font-semibold text-[color:var(--bhutan-ink)]"
                href={heroContent.secondaryCta.href}
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
            <div
              className="reveal flex flex-wrap gap-2"
              style={{ "--reveal-delay": 5 } as CSSProperties}
            >
              {heroContent.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex items-center gap-2 rounded-full border border-[color:var(--bhutan-ink)]/12 bg-white/70 px-3 py-2 text-xs"
                >
                  <span className="font-semibold text-[color:var(--bhutan-ink)]">
                    {stat.value}
                  </span>
                  <span className="tracking-[0.16em] text-[color:var(--bhutan-slate)] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <form
          className="reveal lead-strip grid gap-3 rounded-[var(--bhutan-radius-card)] border border-[color:var(--bhutan-ink)]/15 bg-white/75 p-4 shadow-[0_28px_60px_-50px_rgba(24,26,35,0.45)] sm:grid-cols-[1fr_1fr_1fr_auto]"
          style={{ "--reveal-delay": 6 } as CSSProperties}
        >
          <label className="flex flex-col gap-2 text-xs font-semibold tracking-[0.2em] text-[color:var(--bhutan-slate)] uppercase">
            Traveler name
            <input
              className="h-11 rounded-full border border-[color:var(--bhutan-ink)]/15 bg-white px-4 text-sm text-[color:var(--bhutan-ink)]"
              name="name"
              placeholder="Full name"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold tracking-[0.2em] text-[color:var(--bhutan-slate)] uppercase">
            Email address
            <input
              className="h-11 rounded-full border border-[color:var(--bhutan-ink)]/15 bg-white px-4 text-sm text-[color:var(--bhutan-ink)]"
              name="email"
              placeholder="name@email.com"
              type="email"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold tracking-[0.2em] text-[color:var(--bhutan-slate)] uppercase">
            Travel month
            <input
              className="h-11 rounded-full border border-[color:var(--bhutan-ink)]/15 bg-white px-4 text-sm text-[color:var(--bhutan-ink)]"
              name="month"
              type="month"
            />
          </label>
          <button
            className="interactive-lift h-11 rounded-full bg-[color:var(--bhutan-terracotta)] px-6 text-sm font-semibold text-white"
            type="submit"
          >
            Get itinerary options
          </button>
        </form>
      </div>
    </section>
  )
}
