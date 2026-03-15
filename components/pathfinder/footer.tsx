import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-maroon-deep py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
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
          <p className="font-body text-cream/55 mb-4 text-sm">
            Your friendly Bhutan travel partner since 2015
          </p>
          <div className="bhutan-divider mb-4 w-12" />
          <p className="font-body text-cream/45 text-xs">
            © {new Date().getFullYear()} Bhutan Stainless. Licensed by the
            Tourism Council of Bhutan.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
