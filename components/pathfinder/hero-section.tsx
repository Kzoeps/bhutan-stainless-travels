import Image from "next/image"

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
          src="/pathfinder/hero-bhutan.jpg"
        />
      </div>
      <div className="bg-maroon absolute inset-0 opacity-50" />
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="fade-up relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="font-pathfinder-body text-gold mb-4 text-sm font-medium tracking-widest uppercase">
          Your Bhutan travel partner
        </p>
        <h1 className="font-pathfinder-display text-cream mb-4 text-4xl leading-tight md:text-6xl lg:text-7xl">
          Discover the magic of Bhutan
        </h1>
        <div className="bhutan-divider my-6 w-24" />
        <p className="font-pathfinder-body text-cream/80 mx-auto mb-8 max-w-xl text-lg leading-relaxed md:text-xl">
          We&apos;ll help you explore ancient monasteries, stunning valleys, and
          the warmest hospitality you&apos;ve ever experienced.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#packages"
            className="font-pathfinder-body hover:bg-gold rounded-lg bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:text-foreground"
          >
            See our trips
          </a>
          <a
            href="#destinations"
            className="font-pathfinder-body border-cream/40 text-cream hover:bg-cream/10 rounded-lg border px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
          >
            Where we go
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
