export default function PageFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-3">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Ready to plan
          </p>
          <h2 className="text-3xl font-semibold text-foreground">
            Speak with a Bhutan-based trip designer
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            We tailor each itinerary to festival calendars, flight timing, and
            family-run stays. Share your dates and we will shape a route within
            48 hours.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
              Contact channels
            </p>
            <div className="flex flex-col gap-2 text-sm text-foreground">
              <a
                className="font-semibold transition hover:text-[color:var(--bhutan-terracotta)]"
                href="mailto:journeys@drukpath.bt"
              >
                journeys@drukpath.bt
              </a>
              <a
                className="font-semibold transition hover:text-[color:var(--bhutan-terracotta)]"
                href="tel:+9752334118"
              >
                +975 2 334 118
              </a>
              <p className="text-xs text-muted-foreground">
                Norzin Lam, Thimphu • Reception 08:30–18:30 BST
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-[color:var(--bhutan-ink)] p-6 text-[color:var(--bhutan-cream)]">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase">
              Booking CTA
            </p>
            <p className="text-sm text-[color:var(--bhutan-cream)]/80">
              Start with a 20-minute planning call and receive a draft journey
              map the same week.
            </p>
            <a
              className="mt-auto inline-flex items-center justify-center rounded-full bg-[color:var(--bhutan-terracotta)] px-5 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:opacity-90"
              href="mailto:journeys@drukpath.bt?subject=Bhutan%20Journey%20Planning"
            >
              Request a booking call
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Druk Path Journeys • Bhutan travel specialists</span>
          <a className="transition hover:text-foreground" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
