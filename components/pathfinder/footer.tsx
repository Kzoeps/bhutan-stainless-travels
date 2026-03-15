const Footer = () => {
  return (
    <footer className="bg-maroon-deep py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-display text-cream mb-1 text-lg">
            Bhutan Stainless
          </p>
          <p className="font-body text-cream/50 mb-4 text-sm">
            Your friendly Bhutan travel partner since 2015
          </p>
          <div className="bhutan-divider mb-4 w-12" />
          <p className="font-body text-cream/40 text-xs">
            © {new Date().getFullYear()} Bhutan Stainless. Licensed by the
            Tourism Council of Bhutan.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
