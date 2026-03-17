import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bhutan Tours | Custom Itineraries by Dragon Pathfinder",
  description:
    "Design a Bhutan tour with local planners who tailor pace, stays, and experiences around your travel style.",
  openGraph: {
    title: "Bhutan Tours | Custom Itineraries by Dragon Pathfinder",
    description:
      "Design a Bhutan tour with local planners who tailor pace, stays, and experiences around your travel style.",
    type: "website",
  },
}

export default function BhutanToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
