import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowLeft, 
  Target, 
  Users, 
  Shield, 
  AlertTriangle, 
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Results | ECCSR Framework | Project Management Made Practical",
  description: "Learn about the Results pillar of the ECCSR framework - delivering sustainable outcomes that meet stakeholder expectations and create lasting value.",
}

const reasons = [
  {
    icon: Users,
    title: "Stakeholder Expectations",
    description: "Stakeholders, including investors, customers, and the general public, are increasingly concerned about the social and environmental impacts of businesses. They expect companies to deliver projects that not only generate financial returns but also contribute positively to society and the environment.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Governments and regulatory bodies are progressively implementing stricter environmental and social regulations. Projects that focus on achieving sustainable results are better positioned to comply with these regulations, reducing the risk of legal and financial penalties.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "A focus on sustainable results helps organisations identify and mitigate potential risks. By evaluating environmental impact, a company can take necessary precautions to prevent pollution or reduce waste, minimising the risks of negative publicity or regulatory issues.",
  },
  {
    icon: TrendingUp,
    title: "Long-term Competitiveness",
    description: "Companies that deliver sustainable results are better equipped to adapt to changing market conditions and customer preferences. This approach fosters innovation and continuous improvement, helping organisations stay ahead of the competition.",
  },
  {
    icon: Award,
    title: "Enhanced Reputation",
    description: "By demonstrating a commitment to achieving sustainable results, companies can improve their reputation and brand image. This can lead to increased customer loyalty, attracting new customers, and potentially gaining a competitive advantage.",
  },
]

export default function ResultsPage() {
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
                <Target className="h-8 w-8" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-2xl">
                R
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Results
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl">
              At the end of the day, projects deliver results. Or they should. However, as all the 
              literature shows, there are still an awful lot that overrun on time or cost, or fail 
              to deliver against the promised levels of performance and quality.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Define It Properly Up Front
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  This ties back into the start of any project - define it properly up front and 
                  the chances of delivering against that clearly defined outcome are dramatically 
                  increased.
                </p>
                <p>
                  The ECCSR framework emphasises the importance of achieving sustainable results 
                  in modern projects. &quot;Results&quot; refer to the outcomes and impacts that a project 
                  has on various stakeholders, the environment, and society as a whole. These 
                  results should be aligned with the long-term goals of the organisation and 
                  contribute to the overall sustainability of the project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Results Matter */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Why Results Matter in Modern Projects
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon
                return (
                  <Card key={reason.title} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Building Trust Through Results
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  By focusing on sustainable results, organisations can meet stakeholder expectations 
                  and build trust with their stakeholders. Results are not just about completing a 
                  project on time and within budget - they&apos;re about creating lasting value that 
                  benefits the organisation, its stakeholders, and the broader community.
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
                <Link href="/eccsr/creating">
                  Creating <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/eccsr/sustainable">
                  Sustainable <ArrowRight className="ml-2 h-4 w-4" />
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
