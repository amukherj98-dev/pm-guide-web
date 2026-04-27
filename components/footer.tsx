import Link from "next/link"

const footerLinks = {
  guide: [
    { name: "Topics", href: "#topics" },
    { name: "Resources", href: "#resources" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "References", href: "#references" },
  ],
  topics: [
    { name: "Risk Management", href: "#risk" },
    { name: "Leadership", href: "#leadership" },
    { name: "Planning", href: "#planning" },
    { name: "Sustainability", href: "#sustainability" },
  ],
  about: [
    { name: "About This Guide", href: "#about" },
    { name: "Our Approach", href: "#values" },
    { name: "Contact", href: "#contact" },
    { name: "Accessibility", href: "#accessibility" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">PM</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-foreground">Project Management</span>
                <span className="block text-xs text-muted-foreground">Made Practical</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A practical guide to project management for small businesses 
              and charities in Ireland. Clear, accessible, and useful.
            </p>
          </div>

          {/* Guide Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Guide</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.guide.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Popular Topics</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.topics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">About</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Project Management Made Practical. 
              Created for educational purposes.
            </p>
            <div className="flex gap-6">
              <Link href="#privacy" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#terms" className="text-xs text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#accessibility" className="text-xs text-muted-foreground hover:text-foreground">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
