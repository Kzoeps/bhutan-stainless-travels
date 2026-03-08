export type HeroStat = {
  id: string
  label: string
  value: string
}

export type HeroContent = {
  eyebrow: string
  headline: string
  description: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  stats: HeroStat[]
  imageAlt: string
}

export type Itinerary = {
  id: string
  name: string
  duration: string
  difficulty: string
  startingCity: string
  highlights: string[]
  ctaLabel: string
  imageAlt: string
}

export type CulturalHighlight = {
  id: string
  title: string
  description: string
  meta: string
}

export type PracticalFact = {
  id: string
  title: string
  description: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  country: string
  imageAlt: string
}

export const heroContent: HeroContent = {
  eyebrow: "Journeys crafted in the Himalayan kingdom",
  headline: "Bhutan travel designed around culture, silence, and sky",
  description:
    "Travel with local experts who curate temples, trails, and village life at a pace that honors Bhutan's rhythm. Every trip blends mindful immersion, scenic days, and warm hospitality.",
  primaryCta: {
    label: "Plan my Bhutan journey",
    href: "#itineraries",
  },
  secondaryCta: {
    label: "Speak with a local guide",
    href: "#testimonials",
  },
  stats: [
    { id: "stat-guides", label: "Local guides", value: "28" },
    { id: "stat-journeys", label: "Curated journeys yearly", value: "140+" },
    { id: "stat-rating", label: "Average traveler rating", value: "4.9/5" },
  ],
  imageAlt: "Prayer flags stretched across a sunrise ridge above Paro Valley.",
}

export const itineraries: Itinerary[] = [
  {
    id: "itinerary-cultural-heartland",
    name: "Cultural Heartland Loop",
    duration: "7 days",
    difficulty: "Easy",
    startingCity: "Paro",
    highlights: [
      "Climb to Taktsang Monastery at sunrise",
      "Private blessings in Punakha Dzong",
      "Farmhouse dinner with a local family",
    ],
    ctaLabel: "Request custom quote",
    imageAlt: "Dzong fortress framed by jacaranda blossoms in spring.",
  },
  {
    id: "itinerary-valleys-festivals",
    name: "Valleys and Festival Rhythms",
    duration: "10 days",
    difficulty: "Moderate",
    startingCity: "Thimphu",
    highlights: [
      "Masked dance festival seating with local hosts",
      "Weaving atelier visit in Bumthang",
      "Slow river walks in the Phobjikha valley",
    ],
    ctaLabel: "Build this itinerary",
    imageAlt: "Festival dancers in brocade robes stepping in unison.",
  },
  {
    id: "itinerary-remote-himalaya",
    name: "Remote Himalaya Traverse",
    duration: "12 days",
    difficulty: "Challenging",
    startingCity: "Paro",
    highlights: [
      "High-pass trek with camp support",
      "Yak-herder villages and sacred lakes",
      "Astrology consult for travel blessings",
    ],
    ctaLabel: "Ask about availability",
    imageAlt: "Rugged mountain pass with pack yaks on a clear day.",
  },
]

export const culturalHighlights: CulturalHighlight[] = [
  {
    id: "highlight-monastic-mornings",
    title: "Monastic mornings",
    description:
      "Join dawn chants in quiet monasteries, guided by caretakers who share the meaning behind ritual objects and the cadence of daily life.",
    meta: "Best season: March to May",
  },
  {
    id: "highlight-dzong-architecture",
    title: "Dzong architecture and craft",
    description:
      "Walk through fortress courtyards, meet artisans restoring murals, and learn how Bhutanese design reflects balance, protection, and harmony.",
    meta: "Region: Punakha Valley",
  },
  {
    id: "highlight-homestay-table",
    title: "Homestay table stories",
    description:
      "Share a home-cooked meal with a host family, from red rice harvest tales to the etiquette of butter tea and chili-laced ema datshi.",
    meta: "Region: Haa District",
  },
  {
    id: "highlight-festival-night",
    title: "Festival nights",
    description:
      "Witness masked dances under lantern light, then sit with elders who explain the myths and blessings embodied in every movement.",
    meta: "Best season: September to November",
  },
]

export const practicalFacts: PracticalFact[] = [
  {
    id: "fact-visa-permits",
    title: "Visa and permits",
    description:
      "We guide you through the Bhutan visa process and secure route permits well before arrival.",
  },
  {
    id: "fact-travel-windows",
    title: "Ideal travel windows",
    description:
      "Spring offers clear skies and festivals, while autumn delivers crisp mountain vistas and harvest celebrations.",
  },
  {
    id: "fact-altitude-care",
    title: "Altitude preparation",
    description:
      "Daily pacing plans include acclimatization walks, hydration guidance, and rest time in scenic valleys.",
  },
  {
    id: "fact-sustainable-practice",
    title: "Sustainable travel practices",
    description:
      "Our itineraries prioritize community-led experiences, low-impact lodging, and respectful photography guidance.",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-amelia",
    quote:
      "Every day felt like a private invitation into Bhutanese life. Our guide balanced temples, hikes, and quiet moments perfectly.",
    name: "Amelia Hart",
    country: "New Zealand",
    imageAlt: "Traveler portrait of Amelia smiling in a woven shawl.",
  },
  {
    id: "testimonial-kaito",
    quote:
      "The team handled every detail with care. We left with deep cultural understanding, not just photos.",
    name: "Kaito Sato",
    country: "Japan",
    imageAlt: "Traveler portrait of Kaito with prayer flags behind him.",
  },
]
