import Image from "next/image"
import * as React from "react"

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt="Mountain landscape in Bhutan"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src="/jakar-dzong.webp"
        />
      </div>
      <div className="bg-maroon-deep/50 absolute inset-0" />
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-16 text-center sm:pt-20 md:pt-0">
        <p
          className="reveal font-pathfinder-body text-gold mb-4 text-sm font-medium tracking-widest uppercase"
          style={{ "--reveal-delay": "0" } as React.CSSProperties}
        >
          Local planners for Bhutan journeys
        </p>
        <h1
          className="reveal font-pathfinder-display text-cream mb-4 text-4xl leading-tight md:text-6xl lg:text-7xl"
          style={{ "--reveal-delay": "1" } as React.CSSProperties}
        >
          Bhutan trips shaped around how you travel
        </h1>
        <div
          className="reveal bhutan-divider my-6 w-24"
          style={{ "--reveal-delay": "2" } as React.CSSProperties}
        />
        <p className="font-pathfinder-body text-cream/80 mx-auto mb-8 max-w-xl text-lg leading-relaxed md:text-xl">
          Tell us what matters to you and we build the route together, from a
          Phobjikha homestay morning to quiet monastery walks in Paro.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#packages"
            className="font-pathfinder-body hover:bg-gold bg-maroon text-cream rounded-lg px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground"
          >
            Explore sample trips
          </a>
          <a
            href="#destinations"
            className="font-pathfinder-body border-cream/40 text-cream hover:bg-cream/10 rounded-lg border px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
          >
            Destinations in Bhutan
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
