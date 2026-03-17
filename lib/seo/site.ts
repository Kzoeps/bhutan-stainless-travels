import type { Metadata } from "next"

export type SiteSeoConfig = {
  canonicalOrigin: string
  brandName: string
  defaultTitle: string
  defaultDescription: string
  lastModified: string
}

export const siteSeo: SiteSeoConfig = {
  canonicalOrigin: "https://bhutanstainlesstravels.com",
  brandName: "Dragon Pathfinder",
  defaultTitle: "Dragon Pathfinder | Tailored Bhutan Journeys",
  defaultDescription:
    "Plan a Bhutan trip with local hosts, tailored routes, and pacing built around your interests from Paro to Bumthang.",
  lastModified: "2026-03-17",
}

export const buildCanonicalUrl = (pathname: string): string => {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`
  return `${siteSeo.canonicalOrigin}${normalized}`
}

export const buildSiteMetadata = (overrides: Metadata = {}): Metadata => {
  const title = overrides.title ?? siteSeo.defaultTitle
  const description = overrides.description ?? siteSeo.defaultDescription

  const openGraph: NonNullable<Metadata["openGraph"]> = {
    type: "website",
    title,
    description,
    ...overrides.openGraph,
  }

  return {
    ...overrides,
    title,
    description,
    openGraph,
  }
}
