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
            className="reveal font-body text-gold eyebrow-compact mb-2"
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

        <div className="flex flex-col gap-8">
          {destinations.map((destination, index) => {
            const alignment =
              index % 2 === 0 ? "items-start text-left" : "items-end text-right"

            return (
              <div
                key={destination.title}
                className="destination-panel bhutan-card group"
              >
                <div className="destination-panel-shell relative min-h-[20rem] overflow-hidden rounded-[var(--pathfinder-card-radius)] sm:min-h-[24rem] md:min-h-[28rem]">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    sizes="(min-width: 1024px) 900px, (min-width: 768px) 85vw, 95vw"
                    className="destination-panel-image object-cover transition-transform duration-500 group-focus-within:scale-105 group-hover:scale-105"
                  />
                  <div
                    className="destination-panel-overlay pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-focus-within:opacity-90 group-hover:opacity-90"
                    aria-hidden="true"
                  />
                  <div
                    className={`destination-panel-legibility absolute inset-0 flex flex-col justify-end gap-3 p-6 sm:p-8 md:p-11 ${alignment}`}
                  >
                    <div className="destination-panel-content max-w-sm text-balance sm:max-w-lg">
                      <p className="font-body eyebrow-compact text-gold">
                        {destination.subtitle}
                      </p>
                      <h3 className="font-display mt-2 text-xl text-white sm:text-2xl md:text-3xl">
                        {destination.title}
                      </h3>
                      <p className="font-body mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DestinationsSection
