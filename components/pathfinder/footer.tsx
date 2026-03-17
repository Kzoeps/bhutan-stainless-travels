import Image from "next/image"

type FooterLink = {
  href: string
  label: string
}

type FooterProps = {
  seoLinks?: FooterLink[]
}

const Footer = ({ seoLinks = [] }: FooterProps) => {
  return (
    <footer className="bg-maroon-deep py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1">
                <Image
                  src="/stainless-travels-logo.png"
                  alt="Bhutan Stainless Travels"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-display text-cream text-lg leading-tight">
                Bhutan Stainless
              </span>
            </div>
            <p className="font-body text-cream/55 text-sm">
              Local Bhutan planners since 2015, shaping routes around your pace.
            </p>
          </div>
          {seoLinks.length > 0 && (
            <div className="space-y-3">
              <p className="font-body text-cream/60 text-xs font-semibold tracking-[0.2em] uppercase">
                Explore Bhutan
              </p>
              <div className="flex flex-col items-center gap-2 md:items-start">
                {seoLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-body text-cream/80 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="bhutan-divider mt-8 mb-4 w-12" />
        <p className="font-body text-cream/45 text-center text-xs">
          © {new Date().getFullYear()} Bhutan Stainless. Licensed by the Tourism
          Council of Bhutan.
        </p>
      </div>
    </footer>
  )
}

export default Footer
