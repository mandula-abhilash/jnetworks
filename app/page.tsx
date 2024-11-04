import { Hero } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features-section"
import { PlansSection } from "@/components/sections/plans-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <FeaturesSection />
        <PlansSection />
        <PartnersSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </>
  )
}