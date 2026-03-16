"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import * as React from "react"

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-seam-top-from-maroon relative bg-background py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <p
            className="reveal font-body text-gold mb-2 text-sm font-medium tracking-wide uppercase"
            style={{ "--reveal-delay": "0" } as React.CSSProperties}
          >
            Start your quote
          </p>
          <h2
            className="reveal font-display mb-3 text-3xl text-foreground md:text-4xl"
            style={{ "--reveal-delay": "1" } as React.CSSProperties}
          >
            Share your preferences for a tailored itinerary
          </h2>
          <div
            className="reveal bhutan-divider mt-4 w-20"
            style={{ "--reveal-delay": "2" } as React.CSSProperties}
          />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-body mb-6 text-sm leading-relaxed text-muted-foreground">
              Tell us your travel style, pace, group details, and stay
              preferences. We&apos;ll shape a custom itinerary and send a
              tailored quote, along with practical local guidance.
            </p>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Norzin Lam, Thimphu, Bhutan" },
                { icon: Phone, text: "+975 2 334 567" },
                { icon: Mail, text: "hello@bhutanstainless.bt" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="text-gold" size={18} strokeWidth={1.5} />
                  <span className="font-body text-sm text-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div>
              <label className="font-body mb-1.5 block text-xs font-medium tracking-wide text-foreground uppercase">
                Your name
              </label>
              <input
                type="text"
                className="font-body focus:border-gold w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors focus:outline-none"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="font-body mb-1.5 block text-xs font-medium tracking-wide text-foreground uppercase">
                Email for your quote
              </label>
              <input
                type="email"
                className="font-body focus:border-gold w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-body mb-1.5 block text-xs font-medium tracking-wide text-foreground uppercase">
                Trip preferences
              </label>
              <textarea
                rows={4}
                className="font-body focus:border-gold w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors focus:outline-none"
                placeholder="Dates, group size, pace, lodging style, and must-see experiences"
              />
            </div>
            <button
              type="submit"
              className="font-body hover:bg-gold bg-maroon text-cream w-full rounded-lg py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground"
            >
              Request a tailored quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
