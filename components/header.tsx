"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const topicLinks = [
  { name: "Risk Management", href: "/topics/risk" },
  { name: "Leadership", href: "/topics/leadership" },
  { name: "Teams", href: "/topics/teams" },
  { name: "Ethics", href: "/topics/ethics" },
  { name: "Sustainability", href: "/topics/sustainability" },
  { name: "Governance", href: "/topics/governance" },
  { name: "Strategy", href: "/topics/strategy" },
  { name: "Planning", href: "/topics/planning" },
  { name: "Implementation", href: "/topics/implementation" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
  { name: "Methodologies", href: "/topics/methodologies" },
  { name: "AI in Projects", href: "/topics/ai" },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/#resources" },
  { name: "ECCSR Framework", href: "/#values" },
  { name: "References", href: "/#references" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useState(() => {
    setMounted(true)
  })

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo / Wordmark */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">PM</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-foreground">Project Management</span>
              <span className="block text-xs text-muted-foreground">Made Practical</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          
          {/* Topics Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground outline-none">
              Topics
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 grid grid-cols-2 gap-1 p-2">
              {topicLinks.map((topic) => (
                <DropdownMenuItem key={topic.href} asChild>
                  <Link href={topic.href} className="text-sm">
                    {topic.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navigation.slice(1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button asChild>
            <Link href="/#get-started">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-card px-6 py-6 sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">PM</span>
                </div>
                <span className="text-lg font-semibold text-foreground">PM Made Practical</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  
                  {/* Topics Section */}
                  <div className="pt-2">
                    <p className="px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Topics</p>
                    <div className="mt-2 grid grid-cols-2 gap-1">
                      {topicLinks.map((topic) => (
                        <Link
                          key={topic.href}
                          href={topic.href}
                          className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {topic.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {navigation.slice(1).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  {/* Mobile Theme Toggle */}
                  <div className="flex items-center justify-between px-3">
                    <span className="text-sm font-medium text-foreground">Theme</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant={theme === "light" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setTheme("light")}
                        className="h-8 w-8 p-0"
                      >
                        <Sun className="h-4 w-4" />
                        <span className="sr-only">Light mode</span>
                      </Button>
                      <Button
                        variant={theme === "dark" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setTheme("dark")}
                        className="h-8 w-8 p-0"
                      >
                        <Moon className="h-4 w-4" />
                        <span className="sr-only">Dark mode</span>
                      </Button>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/#get-started">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
