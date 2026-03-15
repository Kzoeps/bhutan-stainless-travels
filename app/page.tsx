import AboutSection from "@/components/pathfinder/about-section"
import ContactSection from "@/components/pathfinder/contact-section"
import DestinationsSection from "@/components/pathfinder/destinations-section"
import Footer from "@/components/pathfinder/footer"
import HeroSection from "@/components/pathfinder/hero-section"
import Navbar from "@/components/pathfinder/navbar"
import PackagesSection from "@/components/pathfinder/packages-section"

export default function Page() {
  return (
    <main
      id="top"
      className="motion-root min-h-svh bg-background text-foreground"
    >
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <PackagesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
