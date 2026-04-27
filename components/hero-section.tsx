import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "Practical guidance for real-world projects",
  "Designed for Irish small businesses & charities",
  "Free resources and templates",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card to-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                For Small Businesses & Charities in Ireland
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Project Management{" "}
              <span className="text-primary">Made Practical</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A clear, accessible guide to help your organisation get stuff done better. 
              Whether you&apos;re managing community projects, planning business initiatives, 
              or coordinating teams, we make project management straightforward and effective.
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="#topics">
                  Explore the Guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Visual Area */}
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/pm-hero-illustration.jpg"
                alt="Project Management illustration with PM logo and colorful geometric shapes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
