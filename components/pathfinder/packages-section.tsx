import * as React from "react"

const packages = [
  {
    title: "Essential Bhutan",
    duration: "5 Days / 4 Nights",
    price: "$250",
    priceNote: "per person / per night",
    highlights: [
      "Paro & Thimphu valleys",
      "Tiger's Nest monastery hike",
      "Traditional farmhouse lunch",
      "Thimphu cultural tour",
    ],
  },
  {
    title: "Kingdom Explorer",
    duration: "8 Days / 7 Nights",
    price: "$250",
    priceNote: "per person / per night",
    highlights: [
      "Punakha, Paro & Thimphu",
      "Dochula Pass panorama",
      "Punakha Dzong visit",
      "Traditional hot stone bath",
      "Festival attendance (seasonal)",
    ],
    featured: true,
  },
  {
    title: "Royal Heritage",
    duration: "12 Days / 11 Nights",
    price: "$350",
    priceNote: "per person / per night",
    highlights: [
      "All major valleys & dzongs",
      "Bumthang spiritual journey",
      "Phobjikha crane sanctuary",
      "Private meditation session",
      "Luxury lodge stays",
      "Personal cultural guide",
    ],
  },
]

const PackagesSection = () => {
  return (
    <section
      id="packages"
      className="section-seam-top-from-bg bg-editorial-surface relative py-20"
      style={
        {
          "--section-seam-height": "6.5rem",
          "--section-seam-opacity": "0.9",
          "--section-seam-blur": "6px",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p
            className="reveal font-body text-gold mb-2 text-sm font-medium tracking-wide uppercase"
            style={{ "--reveal-delay": "0" } as React.CSSProperties}
          >
            Our trips
          </p>
          <h2
            className="reveal font-display mb-3 text-3xl text-foreground md:text-4xl"
            style={{ "--reveal-delay": "1" } as React.CSSProperties}
          >
            Pick the trip that suits you
          </h2>
          <div
            className="reveal bhutan-divider mt-4 w-20"
            style={{ "--reveal-delay": "2" } as React.CSSProperties}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, index) => {
            const marker = String(index + 1).padStart(2, "0")
            return (
              <div
                key={pkg.title}
                className={`bhutan-card flex flex-col overflow-hidden ${
                  pkg.featured
                    ? "border-gold/60 ring-gold/25 shadow-[0_18px_40px_-28px_rgba(103,70,38,0.6)] ring-1"
                    : ""
                }`}
              >
                {pkg.featured && (
                  <div className="font-body border-gold/30 bg-cream/80 text-maroon flex items-center justify-center border-b px-6 py-3 text-[11px] font-semibold tracking-[0.26em] uppercase">
                    Featured journey
                  </div>
                )}
                <div className="flex flex-1 flex-col bg-card p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-gold/70 text-2xl tracking-[0.32em] md:text-3xl">
                      {marker}
                    </span>
                    {pkg.featured && (
                      <span className="font-body border-gold/40 bg-cream/80 text-maroon rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase">
                        Signature
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-card-foreground">
                    {pkg.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <span className="font-display text-3xl text-foreground md:text-4xl">
                      {pkg.price}
                    </span>
                    <span className="font-body text-slate text-xs">
                      {pkg.priceNote}
                    </span>
                  </div>
                  <p className="font-body text-slate mt-3 text-sm">
                    {pkg.duration}
                  </p>

                  <ul className="mb-6 flex-1 space-y-2.5">
                    {pkg.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="font-body text-slate flex items-start gap-2.5 text-sm"
                      >
                        <span className="text-gold mt-0.5 text-xs">●</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`font-body block rounded-lg py-3 text-center text-sm font-medium tracking-wide transition-all duration-300 ${
                      pkg.featured
                        ? "hover:bg-gold bg-maroon text-cream hover:text-foreground"
                        : "border-maroon text-maroon hover:bg-maroon hover:text-cream border"
                    }`}
                  >
                    Get a quote
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="font-body text-slate mt-8 text-center text-sm">
          All trips include a licensed guide, accommodation, meals, and the
          Sustainable Development Fee.
        </p>
      </div>
    </section>
  )
}

export default PackagesSection
