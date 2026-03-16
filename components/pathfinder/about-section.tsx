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
            Our local approach
          </p>
          <h2
            className="reveal font-display text-cream mb-3 text-3xl md:text-4xl"
            style={{ "--reveal-delay": "1" } as React.CSSProperties}
          >
            Planned and hosted from here
          </h2>
          <div
            className="reveal bhutan-divider mt-4 w-20"
            style={{ "--reveal-delay": "2" } as React.CSSProperties}
          />
        </div>

        <div className="font-body text-cream/80 type-compact grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <p>
              We plan every trip from Bhutan, starting with timing, routes, and
              permits. Our team checks road conditions, festival calendars, and
              walking days so the pace fits how you want to travel.
            </p>
            <p>
              Days are built around real places and real people. That can mean a
              market morning in Punakha, a quiet walk in Phobjikha, or time to
              linger at a hillside temple without rushing the schedule.
            </p>
          </div>
          <div className="space-y-3">
            <p>
              We&apos;re a local team and we host the trips we design. Your
              guide and driver are people we work with year-round, and they
              handle logistics, introductions, and translation along the way.
            </p>
            <p>
              If you want a Phobjikha homestay or a Bumthang cooking lesson, we
              arrange it with families and cooks we know personally.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "Local", label: "Bhutan-based team" },
            { value: "Custom", label: "Route planning" },
            { value: "Hosts", label: "Family stays" },
            { value: "Support", label: "On-trip help" },
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
