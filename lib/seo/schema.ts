import { siteSeo } from "@/lib/seo/site"

export type JsonLd = Record<string, unknown>

const businessName = siteSeo.brandName
const businessEmail = "hello@bhutanstainless.bt"
const businessPhone = "+975 2 334 567"
const businessStreet = "Norzin Lam"
const businessCity = "Thimphu"
const businessCountry = "Bhutan"

export const buildOrganizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteSeo.canonicalOrigin}/#organization`,
  name: businessName,
  logo: `${siteSeo.canonicalOrigin}/stainless-travels-logo.png`,
  url: siteSeo.canonicalOrigin,
  email: businessEmail,
  telephone: businessPhone,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessStreet,
    addressLocality: businessCity,
    addressCountry: businessCountry,
  },
})

export const buildWebSiteSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteSeo.canonicalOrigin}/#website`,
  name: businessName,
  url: siteSeo.canonicalOrigin,
  publisher: {
    "@id": `${siteSeo.canonicalOrigin}/#organization`,
  },
})

export const buildHomepageSchemas = (): JsonLd[] => [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
]
