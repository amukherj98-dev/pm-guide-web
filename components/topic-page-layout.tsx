"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Play, FileText, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

interface VideoResource {
  title: string
  url: string
  duration?: string
  description?: string
}

interface ReadingResource {
  title: string
  author?: string
  source?: string
  url?: string
  type: "article" | "book" | "paper" | "guide"
}

interface TopicPageLayoutProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  iconBgClass: string
  children: React.ReactNode
  videos?: VideoResource[]
  readings?: ReadingResource[]
  relatedTopics?: { name: string; href: string }[]
  keyTakeaways?: string[]
}

export function TopicPageLayout({
  title,
  subtitle,
  description,
  icon,
  iconBgClass,
  children,
  videos = [],
  readings = [],
  relatedTopics = [],
  keyTakeaways = [],
}: TopicPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/#topics" className="hover:text-foreground transition-colors">Topics</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
              <div className="flex-1">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${iconBgClass} mb-6`}>
                  {icon}
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
                  {subtitle}
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                  {title}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
                  {description}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href="#content">Start Learning</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/#topics">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      All Topics
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Key Takeaways Sidebar */}
              {keyTakeaways.length > 0 && (
                <div className="mt-10 lg:mt-0 lg:w-80 shrink-0">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-semibold text-foreground mb-4">Key Takeaways</h3>
                    <ul className="space-y-3">
                      {keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            {index + 1}
                          </span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="content" className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              {/* Main Content Area */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                  {children}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="mt-12 lg:mt-0">
                {/* Video Resources */}
                {videos.length > 0 && (
                  <div className="mb-8 rounded-2xl border border-border bg-card p-6">
                    <h3 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                      <Play className="h-5 w-5 text-primary" />
                      Video Resources
                    </h3>
                    <ul className="space-y-4">
                      {videos.map((video, index) => (
                        <li key={index}>
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 text-sm"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                              <Play className="h-4 w-4" />
                            </div>
                            <div>
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {video.title}
                              </span>
                              {video.duration && (
                                <span className="ml-2 text-xs text-muted-foreground">
                                  ({video.duration})
                                </span>
                              )}
                              {video.description && (
                                <p className="mt-1 text-muted-foreground text-xs">{video.description}</p>
                              )}
                            </div>
                            <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Reading Resources */}
                {readings.length > 0 && (
                  <div className="mb-8 rounded-2xl border border-border bg-card p-6">
                    <h3 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Further Reading
                    </h3>
                    <ul className="space-y-4">
                      {readings.map((reading, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div>
                            {reading.url ? (
                              <a
                                href={reading.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-foreground hover:text-primary transition-colors"
                              >
                                {reading.title}
                              </a>
                            ) : (
                              <span className="font-medium text-foreground">{reading.title}</span>
                            )}
                            {reading.author && (
                              <p className="text-xs text-muted-foreground">by {reading.author}</p>
                            )}
                            {reading.source && (
                              <p className="text-xs text-muted-foreground">{reading.source}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Topics */}
                {relatedTopics.length > 0 && (
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-semibold text-foreground mb-4">Related Topics</h3>
                    <ul className="space-y-2">
                      {relatedTopics.map((topic, index) => (
                        <li key={index}>
                          <Link
                            href={topic.href}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                          >
                            {topic.name}
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}
