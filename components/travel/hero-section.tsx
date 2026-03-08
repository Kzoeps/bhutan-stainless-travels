import type { CSSProperties } from "react"

import { heroContent } from "@/lib/bhutan-travel-content"

export function HeroSection() {
  return (
    <section className="hero-sunrise relative isolate overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-6">
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
                className="reveal max-w-2xl text-base text-[color:var(--bhutan-slate)] sm:text-lg"
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
              className="reveal grid gap-4 sm:grid-cols-3"
              style={{ "--reveal-delay": 5 } as CSSProperties}
            >
              {heroContent.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-2xl border border-[color:var(--bhutan-ink)]/10 bg-white/70 p-4 shadow-[0_20px_50px_-40px_rgba(24,26,35,0.45)]"
                >
                  <p className="text-2xl font-semibold text-[color:var(--bhutan-ink)]">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-[0.2em] text-[color:var(--bhutan-slate)] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <figure
            className="reveal motif-frame relative flex h-full min-h-[280px] flex-col justify-between gap-6 rounded-[var(--bhutan-radius-card)] p-6 text-[color:var(--bhutan-ink)] sm:min-h-[340px]"
            style={{ "--reveal-delay": 4 } as CSSProperties}
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs tracking-[0.3em] uppercase">
                Seasoned planners
              </span>
              <h2 className="text-2xl font-semibold">
                Himalayan light, guided by locals
              </h2>
              <p className="text-sm text-[color:var(--bhutan-slate)]">
                We build private routes that balance high-altitude clarity with
                sacred architecture and family-run lodges.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex flex-col gap-1 rounded-full border border-[color:var(--bhutan-ink)]/15 bg-white/70 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
                <span>Paro</span>
                <span className="text-[color:var(--bhutan-slate)]">
                  Arrival & valley acclimation
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-full border border-[color:var(--bhutan-ink)]/15 bg-white/70 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
                <span>Punakha</span>
                <span className="text-[color:var(--bhutan-slate)]">
                  Riverside dzong stay
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-full border border-[color:var(--bhutan-ink)]/15 bg-white/70 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
                <span>Bumthang</span>
                <span className="text-[color:var(--bhutan-slate)]">
                  Sacred valleys & weaving
                </span>
              </div>
            </div>
          </figure>
        </div>
        <form
          className="reveal lead-strip grid gap-3 rounded-[var(--bhutan-radius-card)] border border-[color:var(--bhutan-ink)]/15 bg-white/80 p-4 shadow-[0_28px_60px_-50px_rgba(24,26,35,0.55)] sm:grid-cols-[1fr_1fr_1fr_auto]"
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
