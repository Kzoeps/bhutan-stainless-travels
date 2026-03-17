import Image from "next/image"
import * as React from "react"

const destinations = [
  {
    image: "/punakha.webp",
    title: "Punakha Dzong",
    subtitle: "The confluence in Punakha",
    description:
      "Walk the riverside footbridge to the dzong at the Mo Chhu and Pho Chhu confluence, then linger for spring jacaranda and nearby village life.",
    align: "left" as const,
  },
  {
    image: "/phobjikha.webp",
    title: "Phobjikha Valley",
    subtitle: "Quiet valley, winter cranes",
    description:
      "Settle into a slow morning in Gangtey, scan the marshes for black-necked cranes, and follow the valley trail past farmhouses and pine forests.",
    align: "right" as const,
  },
  {
    image: "/bumthang.webp",
    title: "Bumthang",
    subtitle: "Temples, farms, and hearths",
    description:
      "Spend time around Jakar and Jambay Lhakhang, meet dairy farmers, and try a Bumthang cooking lesson with buckwheat and local cheese.",
    align: "left" as const,
  },
]

const zLevels = ["z-[10]", "z-[20]", "z-[30]"] as const

const DestinationsSection = () => {
  return (
    <section id="destinations" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading - normal flow, scrolls away */}
        <div className="mb-14 text-center">
          <p
            className="reveal font-body text-gold eyebrow-compact mb-2"
            style={{ "--reveal-delay": "0" } as React.CSSProperties}
          >
            Places we know well
          </p>
          <h2
            className="reveal font-display mb-3 text-3xl text-foreground md:text-4xl"
            style={{ "--reveal-delay": "1" } as React.CSSProperties}
          >
            Start with a place you want to feel
          </h2>
          <div
            className="reveal bhutan-divider mx-auto mt-4 w-20"
            style={{ "--reveal-delay": "2" } as React.CSSProperties}
          />
        </div>

        {/* Stack container - exactly 3× panel height */}
        <div
          className="destinations-stack relative"
          style={
            {
              height: "calc((var(--panel-h) + var(--gap)) * 3)",
            } as React.CSSProperties
          }
        >
          {destinations.map((destination, index) => {
            const isRight = destination.align === "right"
            const bottomGap = index < 2 ? 20 : 0
            return (
              <div
                key={destination.title}
                className={`destination-stack-card group sticky ${zLevels[index]}`}
                style={
                  {
                    top: "6rem",
                    height: `calc(var(--panel-h) + ${bottomGap}px)`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="bhutan-card destination-panel-shell relative w-full overflow-hidden rounded-[var(--pathfinder-card-radius)]"
                  style={{ height: "var(--panel-h)" } as React.CSSProperties}
                >
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1280px) 1152px, (min-width: 768px) 85vw, 95vw"
                    className="destination-panel-image object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="destination-panel-overlay pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute bottom-10 flex flex-col gap-2 px-8 sm:bottom-12 sm:px-12 md:bottom-14 md:px-14 ${
                      isRight
                        ? "right-0 items-end text-right"
                        : "left-0 items-start text-left"
                    }`}
                  >
                    <div className="max-w-sm sm:max-w-lg">
                      <p className="font-body eyebrow-compact text-gold">
                        {destination.subtitle}
                      </p>
                      <h3 className="font-display mt-2 text-2xl text-white sm:text-3xl md:text-4xl">
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
