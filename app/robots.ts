import type { MetadataRoute } from "next"

import { siteSeo } from "@/lib/seo/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${siteSeo.canonicalOrigin}/sitemap.xml`,
    host: siteSeo.canonicalOrigin,
  }
}
