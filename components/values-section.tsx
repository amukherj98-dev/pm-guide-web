"use client"

import { Shield, Users2, Lightbulb, Leaf, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

const eccsr = [
  {
    icon: Shield,
    letter: "E",
    title: "Ethical",
    href: "/eccsr/ethical",
    description:
      "Projects operate in a fast-paced world where lines between right and wrong can blur quickly. A strong ethical compass ensures honesty, fairness, accountability, and open communication throughout your project.",
  },
  {
    icon: Users2,
    letter: "C",
    title: "Collaboration",
    href: "/eccsr/collaboration",
    description:
      "Projects involve many people - decision makers, workers, customers, and stakeholders. Effective collaboration through clear communication channels leads to better decisions, innovation, and a positive team culture.",
  },
  {
    icon: Lightbulb,
    letter: "C",
    title: "Creating",
    href: "/eccsr/creating",
    description:
      "Projects exist to create something - a product, service, or change. Clear scoping and definition from the start, with everyone crystal clear on the end result, dramatically increases your chances of success.",
  },
  {
    icon: Leaf,
    letter: "S",
    title: "Sustainable",
    href: "/eccsr/sustainable",
    description:
      "Sustainability is no longer just a buzzword. Projects should consider their environmental and social impacts, adopting practices that create lasting value without unnecessary harm to people, planet, or profit.",
  },
  {
    icon: Target,
    letter: "R",
    title: "Results",
    href: "/eccsr/results",
    description:
      "Projects deliver results - or they should. Defining outcomes properly from the start, aligned with stakeholder expectations and long-term organisational goals, dramatically increases delivery success.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Framework
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            The ECCSR Approach
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Developed from over 30 years of running projects and teaching project management 
            at one of the world&apos;s top business schools, the ECCSR framework provides five 
            key areas to address when conceiving, planning, and executing any project.
          </p>
        </div>

        {/* ECCSR Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eccsr.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Letter badge */}
                <div className="absolute -top-3 -left-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {item.letter}
                </div>
                
                <div className="flex items-start gap-4 pt-2">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {item.title}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Attribution */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Based on the ECCSR framework from{" "}
            <span className="font-medium text-foreground">
              &quot;Project Management Made Easy: The ECCSR Approach&quot;
            </span>{" "}
            by Joe Houghton
          </p>
        </div>
      </div>
    </section>
  )
}
