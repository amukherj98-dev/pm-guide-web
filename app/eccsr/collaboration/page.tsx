import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowLeft, 
  Users2, 
  MessageCircle, 
  Lightbulb, 
  Heart, 
  Scale, 
  TrendingUp,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Collaboration | ECCSR Framework | Project Management Made Practical",
  description: "Learn about the Collaboration pillar of the ECCSR framework - working together effectively through communication, shared goals, and teamwork.",
}

const benefits = [
  {
    icon: MessageCircle,
    title: "Improved Communication",
    description: "When team members collaborate, they share ideas, feedback, and updates, fostering a transparent environment where everyone is on the same page. This open communication helps identify and address potential issues early on, preventing costly delays and setbacks.",
  },
  {
    icon: Lightbulb,
    title: "Better Decision-Making",
    description: "As team members work together, they pool their knowledge and expertise, allowing them to make more informed decisions. This collective wisdom results in a higher likelihood of project success, as potential pitfalls can be anticipated and avoided.",
  },
  {
    icon: TrendingUp,
    title: "Innovation Through Diversity",
    description: "When people from diverse backgrounds and disciplines work together, they bring different perspectives to the table. This diversity of thought can spark creative solutions to complex problems, helping the team overcome obstacles more effectively.",
  },
  {
    icon: Heart,
    title: "Positive Work Culture",
    description: "When team members support each other and work towards a shared goal, it creates a sense of unity and camaraderie. This positive environment boosts morale and increases overall job satisfaction, leading to higher employee retention rates.",
  },
  {
    icon: Scale,
    title: "Balanced Workload",
    description: "Collaboration helps distribute workload more evenly, reducing the risk of burnout among team members. By working together and delegating tasks, team members can focus on their areas of expertise and avoid being overwhelmed.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "When team members work together, they learn from one another and share best practices. This ongoing process of learning and refining techniques leads to increased efficiency and effectiveness in the long run.",
  },
]

export default function CollaborationPage() {
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
                <Users2 className="h-8 w-8" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-2xl">
                C
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Collaboration
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl">
              Projects almost always involve many people - decision makers, workers, customers, 
              those just looking on or wanting a say. Collaborating effectively is key to running 
              a successful project.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                The Foundation of Successful Projects
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  At its core, collaboration is all about people working together towards a common 
                  goal, leveraging their unique skills and experiences to achieve success. In project 
                  management, collaboration is crucial because it enables team members to combine 
                  their strengths, resulting in greater efficiency, creativity, and productivity.
                </p>
                <p>
                  Whether it&apos;s how you communicate, or with whom, when, or through what media - 
                  putting time and effort into setting up and maintaining effective channels of 
                  communication is critical to project success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Benefits of Effective Collaboration
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Navigation to other ECCSR pillars */}
        <section className="py-16 bg-background border-t border-border">
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
