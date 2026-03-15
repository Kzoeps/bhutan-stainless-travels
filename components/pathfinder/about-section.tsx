import * as React from "react"

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-seam-top-from-cream-dark bg-maroon-deep relative overflow-hidden py-20"
    >
      <div
        className="absolute right-0 bottom-0 left-0 h-24 bg-bottom bg-repeat-x opacity-20"
        style={{
          backgroundImage: "url(/pathfinder/bhutan-pattern.png)",
          backgroundSize: "auto 96px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p
            className="reveal font-body text-gold mb-2 text-sm font-medium tracking-wide uppercase"
            style={{ "--reveal-delay": "0" } as React.CSSProperties}
          >
            Why Bhutan?
          </p>
          <h2
            className="reveal font-display text-cream mb-3 text-3xl md:text-4xl"
            style={{ "--reveal-delay": "1" } as React.CSSProperties}
          >
            A place like nowhere else
          </h2>
          <div
            className="reveal bhutan-divider mt-4 w-20"
            style={{ "--reveal-delay": "2" } as React.CSSProperties}
          />
        </div>

        <div className="font-body text-cream/80 type-compact grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <p>
              Bhutan is the world&apos;s only carbon-negative country and a
              place that measures success by happiness, not GDP. Over 70% of the
              land is covered in forest — it&apos;s written into their
              constitution.
            </p>
            <p>
              Pristine rivers, ancient valleys, and a living Buddhist culture
              that&apos;s been thriving for centuries — there&apos;s genuinely
              nothing else like it.
            </p>
          </div>
          <div className="space-y-3">
            <p>
              We&apos;re a local team, and we love showing people the Bhutan we
              know. That means sharing meals with families, trying archery with
              locals, and finding the best spots that aren&apos;t in the
              guidebooks.
            </p>
            <p>
              Every trip is guided by people who grew up here and know these
              mountains inside out.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "72%", label: "Forest Cover" },
            { value: "20+", label: "Historic Dzongs" },
            { value: "1000+", label: "Happy Travelers" },
            { value: "100%", label: "Carbon Negative" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-gold mb-1 text-2xl md:text-3xl">
                {stat.value}
              </p>
              <p className="font-body text-cream/55 text-xs font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
