import Link from "next/link"
import {
  FileText,
  Video,
  Headphones,
  Download,
  CheckSquare,
  Wrench,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const resourceTypes = [
  {
    type: "Articles & Guides",
    icon: FileText,
    description: "In-depth written resources explaining key concepts and best practices.",
  },
  {
    type: "Video Tutorials",
    icon: Video,
    description: "Visual walkthroughs and explanations for different learning styles.",
  },
  {
    type: "Audio Resources",
    icon: Headphones,
    description: "Listen and learn with podcasts and audio guides on the go.",
  },
  {
    type: "Templates",
    icon: Download,
    description: "Ready-to-use documents and spreadsheets to get started quickly.",
  },
  {
    type: "Checklists",
    icon: CheckSquare,
    description: "Step-by-step lists to ensure you do not miss important tasks.",
  },
  {
    type: "Tools",
    icon: Wrench,
    description: "Interactive tools and calculators to support your projects.",
  },
]

const featuredResources = [
  {
    title: "Getting Started with Project Planning",
    type: "Guide",
    category: "Planning",
    description:
      "A comprehensive introduction to creating effective project plans for small organisations.",
    readTime: "10 min read",
  },
  {
    title: "Risk Assessment Template",
    type: "Template",
    category: "Risk",
    description:
      "A simple, practical template for identifying and tracking project risks.",
    readTime: "Download",
  },
  {
    title: "Stakeholder Engagement Checklist",
    type: "Checklist",
    category: "Stakeholders",
    description:
      "Ensure you are communicating effectively with everyone involved in your project.",
    readTime: "5 min read",
  },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Resources
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Tools and materials to support your projects
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Access a variety of formats to suit your learning style and needs. 
            All resources are designed to be practical and immediately useful.
          </p>
        </div>

        {/* Resource Types Grid */}
        <div className="mx-auto mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {resourceTypes.map((resource) => {
            const Icon = resource.icon
            return (
              <div
                key={resource.type}
                className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {resource.type}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Featured Resources */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Featured Resources
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredResources.map((resource) => (
              <article
                key={resource.title}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                    {resource.type}
                  </span>
                  <span className="text-muted-foreground">{resource.category}</span>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h4>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                  <Link
                    href="#"
                    className="flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    View <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="#all-resources">
              Browse All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
