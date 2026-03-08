import Image from "next/image"

import type { Testimonial } from "@/lib/bhutan-travel-content"

type TrustBandProps = {
  testimonials: Testimonial[]
}

const trustMetrics = [
  {
    id: "metric-years",
    value: "14",
    label: "Years operating in Bhutan",
  },
  {
    id: "metric-partners",
    value: "26",
    label: "Village homestay partners",
  },
  {
    id: "metric-support",
    value: "24/7",
    label: "Thimphu support line",
  },
  {
    id: "metric-ratio",
    value: "1:4",
    label: "Guide-to-guest ratio",
  },
]

export default function TrustBand({ testimonials }: TrustBandProps) {
  return (
    <section
      id="testimonials"
      className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Traveler trust
        </p>
        <h2 className="text-3xl font-semibold">Grounded stories, local care</h2>
        <p className="max-w-xl text-sm text-muted-foreground">
          Local support, trusted homestays, and calm guidance throughout.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.imageAlt}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <blockquote className="text-sm text-muted-foreground">
                “{testimonial.quote}”
              </blockquote>
            </div>
            <figcaption className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {testimonial.name} • {testimonial.country}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="rounded-3xl border border-border/60 bg-card/50 p-5">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Trust signals at a glance
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric) => (
            <div
              key={metric.id}
              className="rounded-2xl border border-border/60 bg-card px-4 py-3"
            >
              <p className="text-lg font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
