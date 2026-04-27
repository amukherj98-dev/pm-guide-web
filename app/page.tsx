import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { TopicsSection } from "@/components/topics-section"
import { ResourcesSection } from "@/components/resources-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ValuesSection } from "@/components/values-section"
import { ReferencesSection } from "@/components/references-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Header />
      
      <main className="flex-1">
        {/* Hero - Welcome and primary CTA */}
        <HeroSection />
        
        {/* Introduction - What, Who, Why */}
        <IntroSection />
        
        {/* Topic Areas - Modular card grid for all PM topics */}
        <TopicsSection />
        
        {/* Resources - Types of content and featured materials */}
        <ResourcesSection />
        
        {/* How It Works - 4-step guide usage */}
        <HowItWorksSection />
        
        {/* Values - Our approach and ECCSR placeholder */}
        <ValuesSection />
        
        {/* References - Academic and professional sources */}
        <ReferencesSection />
        
        {/* CTA - Get started / engagement */}
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Chatbot Assistant */}
      <Chatbot />
    </div>
  )
}
