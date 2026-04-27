"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickPrompts = [
  { label: "Help me get started", action: "get-started" },
  { label: "Show me planning tools", action: "planning" },
  { label: "Explain stakeholder management", action: "stakeholders" },
  { label: "Where can I find AI resources?", action: "ai" },
]

const sampleResponses: Record<string, string> = {
  "get-started":
    "Welcome! A great place to start is our 'How It Works' section which explains the four steps to using this guide. You can also browse Topics to find areas relevant to your current project.",
  planning:
    "Our Planning section includes templates, checklists, and guides for creating effective project plans. Check out the 'Getting Started with Project Planning' guide in Featured Resources.",
  stakeholders:
    "Stakeholder management is about identifying and engaging everyone affected by your project. Visit our Stakeholders topic for guidance on communication strategies and engagement techniques.",
  ai:
    "Our AI in Projects topic covers how artificial intelligence can enhance your project work. You will find practical guidance on using AI tools responsibly and effectively.",
  default:
    "I am here to help you navigate this guide. You can ask me about any topic, request specific resources, or get help finding what you need. What would you like to explore?",
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content:
        "Hello! I am your guide assistant. I can help you find resources, explain topics, and navigate this project management guide. How can I help you today?",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleQuickPrompt = (action: string) => {
    const userMessage = quickPrompts.find((p) => p.action === action)?.label || ""
    const response = sampleResponses[action] || sampleResponses.default
    
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
      { role: "assistant", content: response },
    ])
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    
    setMessages((prev) => [
      ...prev,
      { role: "user", content: inputValue },
      { role: "assistant", content: sampleResponses.default },
    ])
    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open site assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-full max-w-md transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-[500px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Guide Assistant</p>
                <p className="text-xs text-primary-foreground/70">Here to help you navigate</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="Close assistant"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          {messages.length <= 2 && (
            <div className="border-t border-border px-4 py-3">
              <p className="mb-2 text-xs font-medium text-muted-foreground">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt.action}
                    onClick={() => handleQuickPrompt(prompt.action)}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    {prompt.label}
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="h-10 w-10 flex-shrink-0 rounded-xl"
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              AI-assisted responses. Always verify important information.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
