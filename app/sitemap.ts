import type { MetadataRoute } from "next"

import { buildCanonicalUrl, siteSeo } from "@/lib/seo/site"

const routes = ["/"]

export default function sitemap(): MetadataRoute.Sitemap {
  const uniqueRoutes = Array.from(new Set(routes))

  return uniqueRoutes.map((path) => ({
    url: buildCanonicalUrl(path),
    lastModified: siteSeo.lastModified,
  }))
}
