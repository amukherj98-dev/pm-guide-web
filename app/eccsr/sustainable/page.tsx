import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowLeft, 
  Leaf, 
  Building2, 
  Factory, 
  Sprout,
  Shield,
  TrendingUp,
  Users,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Sustainable | ECCSR Framework | Project Management Made Practical",
  description: "Learn about the Sustainable pillar of the ECCSR framework - integrating environmental, social, and economic responsibility into project management.",
}

const benefits = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Integrating sustainability helps organisations comply with regulations and industry standards, reducing the risk of legal and financial penalties.",
  },
  {
    icon: Users,
    title: "Enhanced Reputation",
    description: "It enhances a company's reputation, as customers and stakeholders increasingly value businesses that prioritise sustainability.",
  },
  {
    icon: TrendingUp,
    title: "Cost Savings",
    description: "Sustainable practices, such as resource optimisation and waste reduction, can lead to long-term savings and improved operational performance.",
  },
]

const components = [
  "Resource efficiency",
  "Waste reduction", 
  "Stakeholder engagement",
  "Consideration of the triple bottom line (people, planet, profit)",
]

const examples = [
  {
    icon: Building2,
    title: "Construction",
    description: "LEED-certified buildings that use energy-efficient materials, renewable energy sources, and green roofs to reduce energy consumption and promote biodiversity.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Lean production processes that minimise waste and pollution, use recycled materials, and prioritise the health and safety of workers.",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Organic farming practices that protect soil health, conserve water, reduce pesticide use, and promote biodiversity.",
  },
]

const caseStudies = [
  {
    name: "The Bullitt Center, Seattle",
    description: "Often referred to as the 'greenest commercial building in the world', this six-story building incorporates energy-efficient lighting, rainwater harvesting, solar panels, and a living green roof.",
  },
  {
    name: "Interface",
    description: "Through its 'Mission Zero' initiative, this global flooring manufacturer has reduced greenhouse gas emissions by 96%, water usage by 87%, and waste sent to landfills by 91% since 1996.",
  },
  {
    name: "Patagonia",
    description: "This outdoor clothing company uses recycled and organic materials, donates 1% of sales to environmental causes, and encourages customers to repair, reuse, and recycle their items.",
  },
]

export default function SustainablePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Back link */}
            <Link 
              href="/#values" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to ECCSR Framework
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="h-8 w-8" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-2xl">
                S
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Sustainable
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl">
              Years ago sustainability was just a buzzword - not any more. Sustainable practice 
              is fundamentally important in all aspects of our continued life. Projects are a 
              great way to make a difference.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Why Sustainability Matters
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  We are rapidly running out of many finite natural resources with our wasteful 
                  and profligate practices. Projects are a great way to make a difference by 
                  adopting sustainable practices in the way our products and services are 
                  designed and delivered.
                </p>
                <p>
                  In today&apos;s world, businesses are under growing pressure to address not just 
                  their economic performance, but also the social and environmental impacts of 
                  their operations. Sustainability emphasises the need for project managers to 
                  consider the long-term effects of their decisions and actions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Benefits of Sustainable Project Management
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card key={benefit.title} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Key Components */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Key Components of Sustainable Project Management
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {components.map((component) => (
                <div 
                  key={component}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Examples */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Sustainable Practices Across Industries
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {examples.map((example) => {
                const Icon = example.icon
                return (
                  <Card key={example.title} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {example.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {example.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Real-World Success Stories
            </h2>
            
            <div className="space-y-6">
              {caseStudies.map((study) => (
                <Card key={study.name} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {study.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation to other ECCSR pillars */}
        <section className="py-16 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Explore Other ECCSR Pillars
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <Link href="/eccsr/ethical">
                  Ethical <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/eccsr/collaboration">
                  Collaboration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/eccsr/creating">
                  Creating <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/eccsr/results">
                  Results <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  )
}
