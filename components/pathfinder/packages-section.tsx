import * as React from "react"

const packages = [
  {
    title: "Paro to Punakha",
    duration: "5-7 days",
    summary:
      "A flexible western route shaped to your interests, comfort level, and pace.",
    highlights: [
      "Paro market strolls and riverside walks",
      "Punakha Dzong with village backroads",
      "Phobjikha homestays if you want quieter nights",
      "Tiger's Nest hike paced to your comfort",
    ],
  },
  {
    title: "Valleys of Bhutan",
    duration: "8-10 days",
    summary:
      "A balanced journey with room for craft visits, nature time, and rest days.",
    highlights: [
      "Thimphu artisan studios and weekend markets",
      "Dochula Pass stops timed for light and weather",
      "Hot stone bath after longer travel days",
      "Festival time if your dates line up",
    ],
    featured: true,
  },
  {
    title: "Bumthang and Beyond",
    duration: "10-14 days",
    summary:
      "A deeper eastward route that can include extra valley days or cultural workshops.",
    highlights: [
      "Bumthang cooking lessons with a local family",
      "Phobjikha crane sanctuary visits",
      "Quiet temple walks and forest trails",
      "Extra nights added where you want to linger",
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
            Trip templates
          </p>
          <h2
            className="reveal font-display mb-3 text-3xl text-foreground md:text-4xl"
            style={{ "--reveal-delay": "1" } as React.CSSProperties}
          >
            Choose a starting template
          </h2>
          <div
            className="reveal bhutan-divider mt-4 w-20"
            style={{ "--reveal-delay": "2" } as React.CSSProperties}
          />
          <p
            className="reveal font-body text-slate mx-auto mt-5 max-w-2xl text-sm"
            style={{ "--reveal-delay": "3" } as React.CSSProperties}
          >
            Each package is a starting template. We tailor the route around your
            preferences, comfort level, and daily pace, then send a tailored
            quote.
          </p>
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
                  <div className="mt-3 space-y-1">
                    <p className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
                      Tailored quote
                    </p>
                    <p className="font-body text-slate text-[11px] sm:text-xs">
                      Built around your pace and comfort level
                    </p>
                  </div>
                  <p className="font-body text-slate mt-3 text-xs sm:text-sm">
                    {pkg.duration}
                  </p>
                  <p className="font-body text-slate mt-2 text-xs sm:text-sm">
                    {pkg.summary}
                  </p>

                  <ul className="mb-6 flex-1 space-y-3">
                    {pkg.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="font-body text-slate flex items-start gap-2.5 text-xs leading-relaxed sm:text-sm"
                      >
                        <span className="text-gold mt-1 text-xs opacity-70">
                          -
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
