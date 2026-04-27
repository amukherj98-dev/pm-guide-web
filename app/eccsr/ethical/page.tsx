import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowLeft, 
  Shield, 
  CheckCircle2, 
  Users, 
  Scale, 
  MessageSquare, 
  Award,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Ethical | ECCSR Framework | Project Management Made Practical",
  description: "Learn about the Ethical pillar of the ECCSR framework - building trust through honesty, fairness, accountability, and open communication in project management.",
}

const principles = [
  {
    icon: CheckCircle2,
    title: "Honesty and Integrity",
    description: "Being open and truthful helps build trust among team members and stakeholders. Without trust, collaboration and communication can break down, leading to project failure. Always be honest about the project's progress, challenges, and expectations.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "Project managers must make decisions that impact team members, stakeholders, and resources. Being fair means considering everyone's perspective and treating them with equal importance - distributing workloads equitably, recognising individual contributions, and valuing diversity and inclusion.",
  },
  {
    icon: Users,
    title: "Accountability",
    description: "It's essential to take responsibility for the project's success and setbacks. By being accountable, project managers encourage team members to do the same, fostering a culture of responsibility and continuous improvement.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "Adhering to industry standards and best practices ensures that your project is conducted in a professional manner. This includes respecting confidentiality and privacy, as well as staying up-to-date with the latest tools and techniques in project management.",
  },
  {
    icon: MessageSquare,
    title: "Open Communication",
    description: "Encouraging transparency and fostering an environment where everyone feels comfortable sharing their thoughts and concerns leads to better decision-making and problem-solving. Open communication helps identify potential issues early on, allowing the team to address them proactively.",
  },
]

export default function EthicalPage() {
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
                <Shield className="h-8 w-8" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-2xl">
                E
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Ethical
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl">
              Projects are vehicles of change in a fast-paced and pressurised world. Demands are many, 
              time is short, and the lines between what&apos;s &quot;right&quot; and what strays into grey areas 
              get blurred very quickly. It&apos;s critical to have a strong ethical compass.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Why Ethics Matter in Project Management
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  In the world of project management, ethics serve as a guiding light, helping teams 
                  navigate through the complexities of planning and executing projects. By following 
                  ethical principles, project managers can ensure that their actions are fair, 
                  transparent, and in the best interest of all stakeholders involved.
                </p>
                <p>
                  It&apos;s critical to ensure that everyone in the project is aligned and signed up 
                  to common standards of behaviour. This creates a foundation of trust that enables 
                  effective collaboration and ultimately leads to better project outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Key Ethical Principles
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon
                return (
                  <Card key={principle.title} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Diversity Note */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  The Value of Diversity
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diverse teams often lead to better problem-solving and higher performance due to 
                  varying perspectives and experiences. Valuing diversity and inclusion is not just 
                  an ethical imperative - it&apos;s a practical advantage that leads to more innovative 
                  solutions and better project outcomes.
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
