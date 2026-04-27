import { Target, Users, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "What is this guide?",
    description:
      "A practical online resource covering the essential areas of project management, from planning and risk to ethics and sustainability. Built specifically for organisations that want clear, actionable guidance without the jargon.",
  },
  {
    icon: Users,
    title: "Who is it for?",
    description:
      "Small businesses, charities, community groups, and social enterprises in Ireland. Whether you have a dedicated project team or you are wearing multiple hats, this guide meets you where you are.",
  },
  {
    icon: Lightbulb,
    title: "Why does it matter?",
    description:
      "Good project management helps you deliver results, manage resources wisely, and create real impact. This guide makes professional practices accessible to everyone, not just large corporations.",
  },
]

export function IntroSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            About This Guide
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Making project management accessible for everyone
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Project management doesn&apos;t have to be complicated. Our guide breaks down 
            key concepts into practical, usable information that helps your organisation 
            achieve its goals.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="relative rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
