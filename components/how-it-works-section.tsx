import { Search, BookOpen, Lightbulb, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Explore the Guide",
    description:
      "Browse our topic areas to find the information most relevant to your current project challenges.",
    icon: Search,
  },
  {
    number: "02",
    title: "Find Resources",
    description:
      "Access articles, templates, checklists, and tools that match your learning style and needs.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Apply the Ideas",
    description:
      "Put what you learn into practice with actionable guidance designed for real-world use.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Improve Your Practice",
    description:
      "Build your project management capabilities over time and share your learning with your team.",
    icon: TrendingUp,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            How to Use This Guide
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Four simple steps to better project management
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Getting started is easy. Follow these steps to make the most of our resources 
            and start improving your project practice today.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Connector line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border lg:block" />
                  )}
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-card border-2 border-primary/20 shadow-sm">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <span className="mt-4 text-sm font-bold text-primary">{step.number}</span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
