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
      className="section-seam-top-from-editorial bg-editorial-surface relative py-20"
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
            className="reveal font-body text-gold eyebrow-compact mb-2"
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
                className="bhutan-card flex flex-col overflow-hidden"
              >
                <div className="bg-cream flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-4">
                    <span className="font-display text-gold/70 text-xl tracking-[0.28em] sm:text-2xl md:text-3xl">
                      {marker}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-card-foreground sm:text-2xl">
                    {pkg.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <span className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
                      {pkg.price}
                    </span>
                    <span className="font-body text-slate text-[11px] sm:text-xs">
                      {pkg.priceNote}
                    </span>
                  </div>
                  <p className="font-body text-slate mt-3 text-xs sm:text-sm">
                    {pkg.duration}
                  </p>

                  <ul className="mb-6 flex-1 space-y-3">
                    {pkg.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="font-body text-slate flex items-start gap-2.5 text-xs leading-relaxed sm:text-sm"
                      >
                        <span className="text-gold mt-1 text-xs opacity-70">
                          —
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="font-body border-maroon text-maroon hover:bg-maroon hover:text-cream block rounded-lg border py-3.5 text-center text-sm font-medium tracking-wide transition-all duration-300"
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
