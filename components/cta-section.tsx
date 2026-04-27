import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, BookOpen } from "lucide-react"

export function CTASection() {
  return (
    <section id="get-started" className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Ready to improve your project management?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Start exploring our guide today. Access free resources, templates, 
            and practical tools designed specifically for Irish small businesses 
            and charities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              <Link href="#topics">
                <BookOpen className="h-5 w-5" />
                Explore Topics
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#resources">
                Browse Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Newsletter / Updates placeholder */}
          <div className="mt-12 rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-6">
            <div className="flex items-center justify-center gap-2 text-primary-foreground">
              <Mail className="h-5 w-5" />
              <span className="font-medium">Stay Updated</span>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Future feature: Subscribe to receive updates when new resources are added.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
