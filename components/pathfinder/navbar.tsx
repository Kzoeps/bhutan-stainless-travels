"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#destinations", label: "Destinations" },
    { href: "#packages", label: "Trips" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-maroon-deep/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
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
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-cream/80 hover:text-gold text-sm font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="text-cream md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-maroon-deep/95 px-6 pb-6 backdrop-blur-sm md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-cream/80 hover:text-gold block py-3 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
