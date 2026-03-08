import {
  culturalHighlights,
  heroContent,
  itineraries,
  practicalFacts,
  testimonials,
} from "@/lib/bhutan-travel-content"

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-6">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {heroContent.eyebrow}
          </p>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {heroContent.headline}
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              {heroContent.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              href={heroContent.primaryCta.href}
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-muted-foreground"
              href={heroContent.secondaryCta.href}
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {heroContent.stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-border/60 bg-card p-4"
            >
              <p className="text-2xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="itineraries"
        className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12"
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Featured journeys
          </p>
          <h2 className="text-3xl font-semibold">Signature itineraries</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Each itinerary is fully customizable, balancing sacred sites, scenic
            drives, and time with local families.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {itineraries.map((itinerary) => (
            <article
              key={itinerary.id}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-card p-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{itinerary.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {itinerary.duration} • {itinerary.difficulty} • Starts in{" "}
                  {itinerary.startingCity}
                </p>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {itinerary.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <button className="rounded-full border border-border px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase">
                  {itinerary.ctaLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Cultural immersion
          </p>
          <h2 className="text-3xl font-semibold">
            Highlights of Bhutanese life
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {culturalHighlights.map((highlight) => (
            <article
              key={highlight.id}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {highlight.meta}
              </p>
            </article>
          ))}
        </div>
      </section>

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

      <section
        id="testimonials"
        className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12"
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Traveler voices
          </p>
          <h2 className="text-3xl font-semibold">Stories from the trail</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-card p-6"
            >
              <blockquote className="text-sm text-muted-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {testimonial.name} • {testimonial.country}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}
