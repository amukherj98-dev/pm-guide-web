import Link from "next/link"
import { ExternalLink, BookOpen, Building2, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const referenceCategories = [
  {
    title: "Academic Sources",
    icon: GraduationCap,
    description: "Peer-reviewed research and scholarly publications on project management.",
    items: [
      "Project Management Journal articles",
      "International Journal of Project Management",
      "Academic textbooks and research papers",
    ],
  },
  {
    title: "Professional Standards",
    icon: Building2,
    description: "Industry standards and frameworks from recognised professional bodies.",
    items: [
      "PMI PMBOK Guide",
      "PRINCE2 methodology",
      "APM Body of Knowledge",
    ],
  },
  {
    title: "Recommended Reading",
    icon: BookOpen,
    description: "Accessible books and guides for practical project management learning.",
    items: [
      "Introductory PM textbooks",
      "Sector-specific guides",
      "Leadership and management resources",
    ],
  },
]

const trustedSources = [
  "Project Management Institute (PMI)",
  "Association for Project Management (APM)",
  "Irish Management Institute",
  "Charity Regulator Ireland",
  "Enterprise Ireland",
  "Social Enterprise Ireland",
]

export function ReferencesSection() {
  return (
    <section id="references" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            References & Further Reading
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Credible sources and trusted resources
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our guide is informed by established research and professional standards. 
            Explore these sources for deeper learning and additional perspectives.
          </p>
        </div>

        {/* Reference Categories */}
        <div className="mx-auto mt-16 grid gap-8 md:grid-cols-3">
          {referenceCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Trusted Sources */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold text-foreground text-center">
              Trusted External Resources
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Links to reputable organisations and resources for further exploration.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {trustedSources.map((source) => (
                <Link
                  key={source}
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {source}
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Citation Note */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            All content in this guide is properly sourced and referenced. 
            Individual resources include citations where applicable. 
            AI-assisted content is clearly identified and verified for accuracy.
          </p>
        </div>
      </div>
    </section>
  )
}
