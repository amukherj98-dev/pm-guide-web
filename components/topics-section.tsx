import Link from "next/link"
import {
  AlertTriangle,
  Users,
  Scale,
  Leaf,
  Building2,
  Compass,
  ClipboardList,
  Rocket,
  UserCircle2,
  GitBranch,
  Cpu,
  ArrowRight,
} from "lucide-react"

const topics = [
  {
    id: "risk",
    href: "/topics/risk",
    name: "Risk Management",
    description: "Identify, assess, and mitigate project risks before they become problems.",
    icon: AlertTriangle,
    color: "bg-red-50 text-red-600 border-red-100",
  },
  {
    id: "leadership",
    href: "/topics/leadership",
    name: "Leadership",
    description: "Lead teams effectively and inspire others to achieve project goals.",
    icon: Users,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    id: "teams",
    href: "/topics/teams",
    name: "Teams",
    description: "Build high-performing teams and foster effective collaboration.",
    icon: Users,
    color: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    id: "ethics",
    href: "/topics/ethics",
    name: "Ethics",
    description: "Make ethical decisions and maintain integrity throughout your projects.",
    icon: Scale,
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    id: "sustainability",
    href: "/topics/sustainability",
    name: "Sustainability",
    description: "Incorporate environmental and social responsibility into project planning.",
    icon: Leaf,
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    id: "governance",
    href: "/topics/governance",
    name: "Governance",
    description: "Establish clear structures, roles, and accountability frameworks.",
    icon: Building2,
    color: "bg-slate-50 text-slate-600 border-slate-100",
  },
  {
    id: "strategy",
    href: "/topics/strategy",
    name: "Strategy",
    description: "Align projects with organisational goals and long-term vision.",
    icon: Compass,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    id: "planning",
    href: "/topics/planning",
    name: "Planning",
    description: "Create realistic plans, timelines, and budgets for project success.",
    icon: ClipboardList,
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    id: "implementation",
    href: "/topics/implementation",
    name: "Implementation",
    description: "Execute plans effectively and adapt to changing circumstances.",
    icon: Rocket,
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    id: "stakeholders",
    href: "/topics/stakeholders",
    name: "Stakeholders",
    description: "Engage and communicate with everyone affected by your project.",
    icon: UserCircle2,
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    id: "methodologies",
    href: "/topics/methodologies",
    name: "Methodologies",
    description: "Choose the right approach: Agile, Waterfall, or hybrid methods.",
    icon: GitBranch,
    color: "bg-pink-50 text-pink-600 border-pink-100",
  },
  {
    id: "ai",
    href: "/topics/ai",
    name: "AI in Projects",
    description: "Leverage artificial intelligence tools to enhance project outcomes.",
    icon: Cpu,
    color: "bg-teal-50 text-teal-600 border-teal-100",
  },
]

export function TopicsSection() {
  return (
    <section id="topics" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Topic Areas
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Explore the key areas of project management
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our guide covers all the essential topics you need to understand. 
            Click on any area to explore resources, guides, and practical tools.
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.id}
                href={topic.href}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${topic.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {topic.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
