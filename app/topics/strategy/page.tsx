import { Compass, Target, Layers, Filter, CheckCircle, TrendingUp, BarChart3 } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Strategy & Project Selection | PM Made Practical",
  description: "Learn how to align projects with organisational strategy and select the right projects to pursue. A guide to portfolio management and prioritisation.",
}

const videos = [
  {
    title: "Strategic Project Portfolio Management",
    url: "https://www.youtube.com/watch?v=3wVJzHCpU_Q",
    duration: "13:45",
    description: "Aligning projects with organisational goals"
  },
  {
    title: "Project Selection Methods",
    url: "https://www.youtube.com/watch?v=FGsLhNJ0SZA",
    duration: "11:20",
    description: "Financial and non-financial criteria"
  },
  {
    title: "Phase Gate Process Explained",
    url: "https://www.youtube.com/watch?v=hB6XPz_7e4o",
    duration: "9:30",
    description: "Managing projects through decision gates"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapter 2: Organisation Strategy and Project Selection",
    type: "book" as const,
  },
  {
    title: "Good Strategy Bad Strategy",
    author: "Richard Rumelt",
    source: "The difference and why it matters",
    type: "book" as const,
  },
  {
    title: "PMBOK Guide",
    author: "Project Management Institute",
    source: "Portfolio Management Standard",
    type: "guide" as const,
  },
]

const relatedTopics = [
  { name: "Governance", href: "/topics/governance" },
  { name: "Planning", href: "/topics/planning" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
  { name: "Sustainability", href: "/topics/sustainability" },
]

const keyTakeaways = [
  "Projects should flow from organisational strategy",
  "Not all good ideas should become projects",
  "Use consistent criteria for project selection",
  "Balance the portfolio for risk and strategic fit",
  "Regular portfolio reviews prevent drift",
]

export default function StrategyPage() {
  return (
    <TopicPageLayout
      title="Strategy & Project Selection"
      subtitle="Choosing the Right Projects"
      description="Strategy defines where an organisation wants to go and how it will get there. Projects are the vehicles that deliver strategic change. But resources are limited, and not every good idea can be pursued. Understanding how to align projects with strategy and select the best opportunities is essential for organisational success."
      icon={<Compass className="h-8 w-8 text-indigo-600" />}
      iconBgClass="bg-indigo-50 border border-indigo-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>Why Strategy Matters for Project Managers</h2>
      <p>
        Project managers need to understand strategy for several reasons:
      </p>
      <ul>
        <li>To make better decisions that align with organisational priorities</li>
        <li>To communicate project value in terms leaders understand</li>
        <li>To anticipate changes in strategic direction that might affect projects</li>
        <li>To build support by showing how projects contribute to goals</li>
        <li>To prioritise work when resources are scarce</li>
      </ul>

      <h2>The Strategic Management Process</h2>
      <p>
        According to Larson & Gray, strategic management involves four activities:
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        {[
          {
            step: "1",
            title: "Review and Define Mission",
            description: "What is our purpose? What business are we in? Who do we serve?"
          },
          {
            step: "2",
            title: "Set Long-Range Goals",
            description: "What do we want to achieve over 3-5 years? What outcomes matter?"
          },
          {
            step: "3",
            title: "Analyse and Formulate Strategies",
            description: "How will we achieve our goals? What approach will we take?"
          },
          {
            step: "4",
            title: "Implement Through Projects",
            description: "What specific initiatives will deliver strategic outcomes?"
          },
        ].map((item) => (
          <div key={item.step} className="rounded-xl border border-border bg-card p-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm mb-3">
              {item.step}
            </span>
            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <h2>The Need for a Project Priority System</h2>
      <p>
        Many organisations struggle with project selection because:
      </p>

      <div className="not-prose my-8 space-y-4">
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h4 className="font-semibold text-red-800 mb-2">Problem 1: Implementation Gap</h4>
          <p className="text-sm text-red-700">
            Projects get approved but don&apos;t clearly connect to strategic objectives. 
            Resources are spread across too many initiatives.
          </p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h4 className="font-semibold text-amber-800 mb-2">Problem 2: Organisation Politics</h4>
          <p className="text-sm text-amber-700">
            Projects are selected based on who proposes them rather than merit. 
            Pet projects consume resources needed elsewhere.
          </p>
        </div>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h4 className="font-semibold text-blue-800 mb-2">Problem 3: Resource Conflicts</h4>
          <p className="text-sm text-blue-700">
            Too many projects compete for the same people and resources. 
            Multitasking reduces productivity on everything.
          </p>
        </div>
      </div>

      <h2>Project Selection Criteria</h2>
      <p>
        A good selection system uses clear, consistent criteria. These typically fall 
        into two categories:
      </p>

      <h3>Financial Criteria</h3>
      <ul>
        <li><strong>Net Present Value (NPV):</strong> Total value of future cash flows in today&apos;s terms</li>
        <li><strong>Return on Investment (ROI):</strong> Percentage return relative to cost</li>
        <li><strong>Payback Period:</strong> How long until the investment is recovered</li>
        <li><strong>Internal Rate of Return (IRR):</strong> Effective interest rate the project generates</li>
      </ul>

      <h3>Non-Financial Criteria</h3>
      <ul>
        <li><strong>Strategic fit:</strong> Does it align with organisational direction?</li>
        <li><strong>Urgency:</strong> Is there a compelling timeline?</li>
        <li><strong>Risk:</strong> What&apos;s the probability of success?</li>
        <li><strong>Capability:</strong> Do we have the skills to deliver?</li>
        <li><strong>Stakeholder impact:</strong> Who benefits and how much?</li>
        <li><strong>Dependencies:</strong> Does it enable other initiatives?</li>
      </ul>

      <h2>Multi-Criteria Scoring Models</h2>
      <p>
        A scoring model rates projects against weighted criteria to produce a 
        comparable score. This helps compare unlike projects fairly.
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-secondary">
              <th className="border border-border p-3 text-left font-semibold">Criterion</th>
              <th className="border border-border p-3 text-center font-semibold">Weight</th>
              <th className="border border-border p-3 text-center font-semibold">Project A</th>
              <th className="border border-border p-3 text-center font-semibold">Project B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">Strategic Alignment</td>
              <td className="border border-border p-3 text-center">30%</td>
              <td className="border border-border p-3 text-center">8 (2.4)</td>
              <td className="border border-border p-3 text-center">6 (1.8)</td>
            </tr>
            <tr className="bg-secondary/30">
              <td className="border border-border p-3">Financial Return</td>
              <td className="border border-border p-3 text-center">25%</td>
              <td className="border border-border p-3 text-center">7 (1.75)</td>
              <td className="border border-border p-3 text-center">9 (2.25)</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Risk Level</td>
              <td className="border border-border p-3 text-center">20%</td>
              <td className="border border-border p-3 text-center">6 (1.2)</td>
              <td className="border border-border p-3 text-center">4 (0.8)</td>
            </tr>
            <tr className="bg-secondary/30">
              <td className="border border-border p-3">Capability Match</td>
              <td className="border border-border p-3 text-center">15%</td>
              <td className="border border-border p-3 text-center">8 (1.2)</td>
              <td className="border border-border p-3 text-center">7 (1.05)</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Urgency</td>
              <td className="border border-border p-3 text-center">10%</td>
              <td className="border border-border p-3 text-center">5 (0.5)</td>
              <td className="border border-border p-3 text-center">8 (0.8)</td>
            </tr>
            <tr className="bg-primary/10 font-semibold">
              <td className="border border-border p-3">Total Score</td>
              <td className="border border-border p-3 text-center">100%</td>
              <td className="border border-border p-3 text-center">7.05</td>
              <td className="border border-border p-3 text-center">6.70</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Phase Gate Model</h2>
      <p>
        The phase gate model breaks projects into stages with decision points 
        (gates) where progress is reviewed and continuation is approved:
      </p>

      <div className="not-prose my-8 flex flex-wrap gap-4 items-center justify-center">
        {["Concept", "Feasibility", "Planning", "Execution", "Closure"].map((phase, index) => (
          <div key={phase} className="flex items-center gap-2">
            <div className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium">
              {phase}
            </div>
            {index < 4 && (
              <div className="flex items-center gap-1">
                <div className="h-0.5 w-4 bg-primary" />
                <Filter className="h-4 w-4 text-primary" />
                <div className="h-0.5 w-4 bg-primary" />
              </div>
            )}
          </div>
        ))}
      </div>

      <p>
        At each gate, a governance team evaluates:
      </p>
      <ul>
        <li>Has the previous phase been completed satisfactorily?</li>
        <li>Do the project objectives still align with strategy?</li>
        <li>Is the business case still valid?</li>
        <li>Are risks acceptable?</li>
        <li>Should we proceed, pause, or stop?</li>
      </ul>

      <h2>Managing the Portfolio</h2>
      <p>
        Once projects are selected, ongoing portfolio management ensures the mix 
        remains balanced and aligned:
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            Balance by Type
          </h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Compliance/regulatory (must do)</li>
            <li>Operational improvement</li>
            <li>Strategic/growth initiatives</li>
            <li>Research and development</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Balance by Risk
          </h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Low risk, low return (safe bets)</li>
            <li>Medium risk, medium return</li>
            <li>High risk, high return (big bets)</li>
            <li>Mix should match risk appetite</li>
          </ul>
        </div>
      </div>

      <h2>Strategy for Small Organisations</h2>
      <p>
        Small businesses and charities may not have formal strategic planning 
        processes, but the principles still apply:
      </p>
      <ul>
        <li><strong>Know your mission:</strong> What are you trying to achieve?</li>
        <li><strong>Be selective:</strong> With limited resources, focus is essential</li>
        <li><strong>Say no:</strong> Good opportunities that don&apos;t fit should be declined</li>
        <li><strong>Review regularly:</strong> Check that current projects still make sense</li>
        <li><strong>Measure impact:</strong> Are projects delivering intended benefits?</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          The best project management in the world won&apos;t save a project that 
          shouldn&apos;t have been started. Strategic alignment and careful project 
          selection ensure you&apos;re investing your limited resources in the 
          initiatives that will make the biggest difference to your organisation&apos;s 
          mission and goals.
        </p>
      </div>
    </TopicPageLayout>
  )
}
