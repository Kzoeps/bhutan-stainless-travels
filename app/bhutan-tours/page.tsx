import ContactSection from "@/components/pathfinder/contact-section"
import Footer from "@/components/pathfinder/footer"
import Navbar from "@/components/pathfinder/navbar"

const tourHighlights = [
  {
    title: "Routes shaped by pace",
    description:
      "We build the daily rhythm around how much you want to see and how much you want to linger.",
  },
  {
    title: "Local hosting in every valley",
    description:
      "Guides and coordinators keep logistics smooth while you focus on the culture, food, and landscapes.",
  },
  {
    title: "Flexible comfort levels",
    description:
      "Mix boutique stays, homestays, and quiet countryside lodges without losing cohesion.",
  },
]

const planningSteps = [
  "Share dates, group size, and must-see experiences.",
  "We propose a route with pacing notes and lodge options.",
  "Refine details, then receive a tailored quote.",
]

export default function BhutanToursPage() {
  return (
    <main className="motion-root min-h-svh bg-background text-foreground">
      <Navbar />

      <section className="section-seam-top-from-editorial bg-editorial-surface relative overflow-hidden py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-body text-gold eyebrow-compact mb-3 text-sm">
              Tailored Bhutan tours
            </p>
            <h1 className="font-display mb-5 text-4xl leading-tight text-foreground md:text-5xl">
              Bhutan tours built around your pace, comfort, and curiosity
            </h1>
            <p className="font-body text-slate text-base leading-relaxed md:text-lg">
              Dragon Pathfinder designs custom Bhutan tours for travelers who
              want thoughtful pacing, dependable local support, and space to
              absorb the culture. We plan the route with you, not for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="font-body hover:bg-gold bg-maroon text-cream rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground"
              >
                Request a tailored quote
              </a>
              <a
                href="/"
                className="font-body border-maroon text-maroon hover:bg-maroon hover:text-cream rounded-lg border px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300"
              >
                Visit the homepage
              </a>
            </div>
          </div>
          <div className="bhutan-card bg-cream p-6 sm:p-7">
            <p className="font-display text-2xl text-foreground">
              What a custom tour includes
            </p>
            <div className="bhutan-divider my-4 w-16" />
            <ul className="space-y-3">
              {tourHighlights.map((item) => (
                <li key={item.title} className="text-slate text-sm">
                  <p className="font-body text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="font-body text-slate text-sm leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="font-body text-gold eyebrow-compact mb-2 text-sm">
              Why travelers choose us
            </p>
            <h2 className="font-display mb-4 text-3xl text-foreground md:text-4xl">
              Grounded planning for Bhutan tours that feel effortless
            </h2>
            <p className="font-body text-slate max-w-2xl text-sm leading-relaxed">
              We coordinate logistics behind the scenes so your days are focused
              on monasteries, village walks, and valley views. You stay in
              control of the pace while we handle permits, timing, and the
              on-the-ground plan.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tourHighlights.map((item) => (
              <div key={item.title} className="bhutan-card bg-cream p-6">
                <p className="font-display mb-2 text-xl text-foreground">
                  {item.title}
                </p>
                <p className="font-body text-slate text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-editorial-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-body text-gold eyebrow-compact mb-2 text-sm">
                Planning clarity
              </p>
              <h2 className="font-display mb-4 text-3xl text-foreground md:text-4xl">
                Move from idea to itinerary in three steps
              </h2>
              <p className="font-body text-slate text-sm leading-relaxed">
                Tell us what you want to feel and experience in Bhutan. We
                translate that into a practical tour plan with travel times,
                lodging choices, and space to rest.
              </p>
              <a
                href="/bhutan-itineraries"
                className="font-body text-maroon mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:text-foreground"
              >
                Explore Bhutan itineraries
              </a>
            </div>
            <div className="bhutan-card bg-cream p-6 sm:p-7">
              <ol className="space-y-4">
                {planningSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="font-display text-gold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body text-slate text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="font-body border-maroon text-maroon hover:bg-maroon hover:text-cream block rounded-lg border px-5 py-3 text-center text-sm font-medium tracking-wide transition-all duration-300"
                >
                  Start your custom tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
