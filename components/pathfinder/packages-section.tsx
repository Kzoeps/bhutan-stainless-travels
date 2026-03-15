import { Compass, Crown, Mountain } from "lucide-react"

const packages = [
  {
    icon: Compass,
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
    icon: Mountain,
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
    icon: Crown,
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
    <section id="packages" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-body text-gold mb-2 text-sm font-medium tracking-wide uppercase">
            Our trips
          </p>
          <h2 className="font-display mb-3 text-3xl text-foreground md:text-4xl">
            Pick the trip that suits you
          </h2>
          <div className="bhutan-divider mt-4 w-20" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = pkg.icon

            return (
              <div
                key={pkg.title}
                className={`bhutan-card flex flex-col ${
                  pkg.featured ? "border-gold ring-gold/20 ring-1" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="font-body bg-primary py-2 text-center text-xs font-semibold tracking-wide text-primary-foreground uppercase">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-1 flex-col bg-card p-6">
                  <Icon
                    className="text-gold mb-3"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display mb-1 text-xl text-card-foreground">
                    {pkg.title}
                  </h3>
                  <p className="font-body mb-5 text-sm text-muted-foreground">
                    {pkg.duration}
                  </p>

                  <div className="mb-5">
                    <span className="font-display text-2xl text-foreground">
                      {pkg.price}
                    </span>
                    <span className="font-body ml-2 text-xs text-muted-foreground">
                      {pkg.priceNote}
                    </span>
                  </div>

                  <ul className="mb-6 flex-1 space-y-2.5">
                    {pkg.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="font-body flex items-start gap-2.5 text-sm text-muted-foreground"
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
                        ? "hover:bg-gold bg-primary text-primary-foreground hover:text-foreground"
                        : "border border-primary text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Get a quote
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="font-body mt-8 text-center text-sm text-muted-foreground">
          All trips include a licensed guide, accommodation, meals, and the
          Sustainable Development Fee.
        </p>
      </div>
    </section>
  )
}

export default PackagesSection
