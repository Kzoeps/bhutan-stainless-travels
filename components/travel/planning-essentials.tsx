import Image from "next/image"

import { practicalFacts } from "@/lib/bhutan-travel-content"

export default function PlanningEssentials() {
  return (
    <section
      id="planning-essentials"
      className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Planning essentials
        </p>
        <h2 className="text-3xl font-semibold">
          Practical guidance, distilled
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground">
          A quick brief on visas, timing, altitude, and low-impact travel.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {practicalFacts.map((topic) => (
          <article
            key={topic.id}
            className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-card p-5"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={topic.imageSrc}
                alt={topic.imageAlt}
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{topic.title}</h3>
              <p className="text-xs text-muted-foreground">
                {topic.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Details are shared as guidance; please confirm official requirements
        before booking travel.
      </p>
    </section>
  )
}
