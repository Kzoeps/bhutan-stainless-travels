const navItems = [
  { label: "Itineraries", href: "#itineraries" },
  { label: "Cultural highlights", href: "#cultural-highlights" },
  { label: "Planning essentials", href: "#planning-essentials" },
  { label: "Traveler trust", href: "#testimonials" },
]

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a
          className="flex items-baseline gap-3 text-lg font-semibold text-foreground"
          href="#top"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            Druk Path
          </span>
          Journeys
        </a>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="transition hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="interactive-lift inline-flex items-center justify-center rounded-full bg-[color:var(--bhutan-terracotta)] px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase"
          href="#contact"
        >
          Book a consult
        </a>
      </div>
    </header>
  )
}
