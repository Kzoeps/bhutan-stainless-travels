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
  imageSrc: string
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
  imageSrc: string
  imageAlt: string
}

export type CulturalHighlight = {
  id: string
  title: string
  description: string
  meta: string
  imageSrc: string
  imageAlt: string
}

export type PracticalFact = {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  country: string
  imageSrc: string
  imageAlt: string
}

export const heroContent: HeroContent = {
  eyebrow: "Journeys crafted in the Himalayan kingdom",
  headline: "Bhutan travel designed around culture, silence, and sky",
  description:
    "Local guides, quiet monasteries, and high-valley walks in one calm itinerary.",
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
  imageSrc:
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=80",
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
    imageSrc:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Dzong fortress framed by jacaranda blossoms in spring.",
  },
  {
    id: "itinerary-valleys-festivals",
    name: "Valleys and Festival Rhythms",
    duration: "10 days",
    difficulty: "Moderate",
    startingCity: "Thimphu",
    highlights: [
      "Festival seating with local hosts",
      "Weaving atelier visit in Bumthang",
      "River walks in the Phobjikha valley",
    ],
    ctaLabel: "Build this itinerary",
    imageSrc:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
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
    imageSrc:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Rugged mountain pass with pack yaks on a clear day.",
  },
]

export const culturalHighlights: CulturalHighlight[] = [
  {
    id: "highlight-monastic-mornings",
    title: "Monastic mornings",
    description: "Dawn chants with caretakers who share daily ritual meaning.",
    meta: "Best season: March to May",
    imageSrc:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Monks walking through a misty mountain courtyard.",
  },
  {
    id: "highlight-dzong-architecture",
    title: "Dzong architecture and craft",
    description:
      "Fortress courtyards and artisans restoring murals in calm light.",
    meta: "Region: Punakha Valley",
    imageSrc:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Traditional fortress wall with carved beams and flags.",
  },
  {
    id: "highlight-homestay-table",
    title: "Homestay table stories",
    description: "Home-cooked meals with host families and red rice stories.",
    meta: "Region: Haa District",
    imageSrc:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Family table with steaming bowls and woven textiles.",
  },
  {
    id: "highlight-festival-night",
    title: "Festival nights",
    description: "Lantern-lit masked dances and stories of blessing.",
    meta: "Best season: September to November",
    imageSrc:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Masked dancers under warm lantern light.",
  },
]

export const practicalFacts: PracticalFact[] = [
  {
    id: "fact-visa-permits",
    title: "Visa and permits",
    description: "Visa support and route permits handled before arrival.",
    imageSrc:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Passport and stamps on a wooden desk.",
  },
  {
    id: "fact-travel-windows",
    title: "Ideal travel windows",
    description: "Spring festivals or crisp autumn mountain views.",
    imageSrc:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Valley landscape with soft morning light.",
  },
  {
    id: "fact-altitude-care",
    title: "Altitude preparation",
    description: "Acclimatization walks, hydration guidance, and rest days.",
    imageSrc:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Trail winding through high mountain pasture.",
  },
  {
    id: "fact-sustainable-practice",
    title: "Sustainable travel practices",
    description: "Community-led stays and low-impact travel choices.",
    imageSrc:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Hands weaving fabric on a wooden loom.",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-amelia",
    quote: "Our guide balanced temples, hikes, and quiet moments beautifully.",
    name: "Amelia Hart",
    country: "New Zealand",
    imageSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Traveler portrait of Amelia smiling in a woven shawl.",
  },
  {
    id: "testimonial-kaito",
    quote: "Thoughtful planning and real cultural connection, not just photos.",
    name: "Kaito Sato",
    country: "Japan",
    imageSrc:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Traveler portrait of Kaito with prayer flags behind him.",
  },
]
