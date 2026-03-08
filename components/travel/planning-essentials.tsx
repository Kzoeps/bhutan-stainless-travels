const planningTopics = [
  {
    title: "Visa and permits",
    icon: "V",
    description:
      "Entry clearance and guide arrangements are coordinated in advance. Share passport details early so timing stays smooth.",
  },
  {
    title: "Best travel windows",
    icon: "W",
    description:
      "Spring and autumn bring clear skies and festivals, while summer is greener and quieter. We match pacing to seasonal light.",
  },
  {
    title: "Altitude readiness",
    icon: "A",
    description:
      "Most valleys sit above 2,000 meters. We build acclimatization days and adjust hikes to keep energy steady.",
  },
  {
    title: "Sustainability expectations",
    icon: "S",
    description:
      "Bhutan prioritizes low-impact travel. Expect small groups, mindful waste practices, and respect for sacred sites.",
  },
]

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
          Practical guidance before you go
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          A clear, shared checklist makes the journey feel effortless. We use
          the notes below to shape your itinerary and prep calls.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {planningTopics.map((topic) => (
          <article
            key={topic.title}
            className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground">
                {topic.icon}
              </span>
              <h3 className="text-lg font-semibold">{topic.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{topic.description}</p>
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
