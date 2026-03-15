import Image from "next/image"
import * as React from "react"

const destinations = [
  {
    image: "/pathfinder/punakha-dzong.jpg",
    title: "Punakha Dzong",
    subtitle: "Where two rivers meet",
    description:
      "One of Bhutan's most beautiful fortress-monasteries, surrounded by jacaranda blooms and river valleys.",
  },
  {
    image: "/pathfinder/phobjikha-valley.jpg",
    title: "Phobjikha Valley",
    subtitle: "Home of the cranes",
    description:
      "A wide glacial valley with incredible views — and winter home to endangered black-necked cranes.",
  },
  {
    image: "/pathfinder/bumthang.jpg",
    title: "Bumthang",
    subtitle: "Bhutan's spiritual heart",
    description:
      "Ancient temples, quiet forests, and some of the oldest Buddhist sites in the country.",
  },
]

const DestinationsSection = () => {
  return (
    <section id="destinations" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p
            className="reveal font-body text-gold mb-2 text-sm font-medium tracking-wide uppercase"
            style={{ "--reveal-delay": "0" } as React.CSSProperties}
          >
            Places we love
          </p>
          <h2
            className="reveal font-display mb-3 text-3xl text-foreground md:text-4xl"
            style={{ "--reveal-delay": "1" } as React.CSSProperties}
          >
            Where would you like to go?
          </h2>
          <div
            className="reveal bhutan-divider mt-4 w-20"
            style={{ "--reveal-delay": "2" } as React.CSSProperties}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((destination) => (
            <div key={destination.title} className="bhutan-card group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 30vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-card p-5">
                <p className="font-body text-gold mb-1 text-xs font-medium tracking-wide uppercase">
                  {destination.subtitle}
                </p>
                <h3 className="font-display mb-2 text-xl text-card-foreground">
                  {destination.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DestinationsSection
