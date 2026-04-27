import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowLeft, 
  Lightbulb, 
  Target, 
  Sparkles, 
  TrendingUp, 
  Users,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Creating | ECCSR Framework | Project Management Made Practical",
  description: "Learn about the Creating pillar of the ECCSR framework - defining clear outcomes and delivering innovative products and services.",
}

const aspects = [
  {
    icon: Target,
    title: "Clear Scoping and Definition",
    description: "Projects are normally intended to create something - often a product or service. Clear scoping and definition early on are so important to set up any project for success. Clarifying just what the end result should be in terms that everyone is crystal clear about will make everyone's life much easier.",
  },
  {
    icon: Sparkles,
    title: "Innovation and Development",
    description: "Creating new products and services is a driving force behind project management. The emphasis on creating highlights the need for innovation and the development of unique solutions that cater to the evolving needs of customers and the market.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Edge",
    description: "By continuously developing innovative solutions, businesses can maintain a competitive edge, adapt to changing market conditions, and ensure long-term growth. This is particularly crucial in today's dynamic business landscape.",
  },
  {
    icon: Users,
    title: "Collaborative Creation",
    description: "By fostering a collaborative environment, project managers can tap into the collective intelligence of their team members, leading to a richer pool of ideas and creative solutions. Team members share knowledge, learn from each other, and leverage their unique skills.",
  },
]

export default function CreatingPage() {
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
                <Lightbulb className="h-8 w-8" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-2xl">
                C
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Creating
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl">
              Projects exist to create something - a product, service, or change. Clear scoping 
              and definition from the start, with everyone crystal clear on the end result, 
              dramatically increases your chances of success.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                The Heart of Project Management
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Creating new products and services is a driving force behind the ECCSR model 
                  and project management in general. The emphasis on creating highlights the 
                  need for innovation and the development of unique solutions that cater to 
                  the evolving needs of customers and the market.
                </p>
                <p>
                  The importance of creating lies in the value it brings to organisations and 
                  their stakeholders. Rapid technological advancements and shifting consumer 
                  preferences demand ongoing innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Aspects */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Key Aspects of Creating
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {aspects.map((aspect) => {
                const Icon = aspect.icon
                return (
                  <Card key={aspect.title} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {aspect.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {aspect.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sustainable Results Note */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Creating for Long-Term Impact
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sustainable results are crucial in the creation process because they ensure that 
                  new products or services have a long-lasting impact and contribute positively to 
                  the organisation&apos;s success. By emphasising sustainability, project managers can 
                  avoid short-term solutions that may lead to unforeseen problems down the line. 
                  Instead, they can deliver outcomes that not only benefit the organisation but 
                  also stand the test of time.
                </p>
              </CardContent>
            </Card>
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
                <Link href="/eccsr/sustainable">
                  Sustainable <ArrowRight className="ml-2 h-4 w-4" />
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
