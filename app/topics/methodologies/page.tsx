import { GitBranch, ArrowRight, RefreshCw, List, CheckSquare, Layers, Target, Clock, Users, Zap } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Project Methodologies | PM Made Practical",
  description: "Understand different project management approaches including Agile, Waterfall, and hybrid methods. A practical guide for small businesses and charities in Ireland.",
}

const videos = [
  {
    title: "Agile vs Waterfall Explained",
    url: "https://www.youtube.com/watch?v=5RocT_OdQcA",
    duration: "10:15",
    description: "Clear comparison of the two main approaches"
  },
  {
    title: "Scrum in 10 Minutes",
    url: "https://www.youtube.com/watch?v=XU0llRltyFM",
    duration: "10:30",
    description: "Quick introduction to Scrum framework"
  },
  {
    title: "PRINCE2 Overview",
    url: "https://www.youtube.com/watch?v=HftANyjl-sw",
    duration: "14:20",
    description: "Understanding the PRINCE2 methodology"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapters on Agile and Traditional Approaches",
    type: "book" as const,
  },
  {
    title: "Agile Practice Guide",
    author: "Project Management Institute",
    source: "PMI & Agile Alliance",
    type: "guide" as const,
  },
  {
    title: "Scrum Guide",
    author: "Ken Schwaber & Jeff Sutherland",
    source: "Official Scrum Guide",
    type: "guide" as const,
    url: "https://scrumguides.org/"
  },
]

const relatedTopics = [
  { name: "Planning", href: "/topics/planning" },
  { name: "Implementation", href: "/topics/implementation" },
  { name: "Teams", href: "/topics/teams" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
]

const keyTakeaways = [
  "No methodology is universally best - context matters",
  "Waterfall suits stable, well-defined requirements",
  "Agile excels when requirements evolve",
  "Hybrid approaches combine the best of both",
  "The best methodology is one your team will actually follow",
]

export default function MethodologiesPage() {
  return (
    <TopicPageLayout
      title="Project Methodologies"
      subtitle="Choosing Your Approach"
      description="A project methodology is the framework that guides how you plan, execute, and control your project. Choosing the right approach depends on your project characteristics, team capabilities, and organisational context. Understanding the options helps you make informed decisions."
      icon={<GitBranch className="h-8 w-8 text-pink-600" />}
      iconBgClass="bg-pink-50 border border-pink-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>What is a Project Methodology?</h2>
      <p>
        A project methodology is a structured approach that defines how a project should be 
        initiated, planned, executed, controlled, and closed. It provides a common language 
        and set of practices for the project team to follow.
      </p>
      <p>
        The two fundamental approaches are <strong>predictive (plan-driven)</strong> and 
        <strong> adaptive (change-driven)</strong>. Most methodologies fall somewhere on this 
        spectrum.
      </p>

      <div className="not-prose my-8 rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">The Methodology Spectrum</h3>
        <div className="flex flex-col sm:flex-row items-stretch gap-4">
          <div className="flex-1 rounded-xl bg-blue-50 p-4 border border-blue-100">
            <h4 className="font-semibold text-blue-800 flex items-center gap-2">
              <List className="h-5 w-5" />
              Predictive (Waterfall)
            </h4>
            <p className="mt-2 text-sm text-blue-700">
              Sequential phases, detailed upfront planning, changes are costly
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-muted-foreground hidden sm:block" />
            <div className="h-6 w-px bg-muted-foreground sm:hidden" />
          </div>
          <div className="flex-1 rounded-xl bg-purple-50 p-4 border border-purple-100">
            <h4 className="font-semibold text-purple-800 flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Hybrid
            </h4>
            <p className="mt-2 text-sm text-purple-700">
              Combines elements of both, tailored to project needs
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-muted-foreground hidden sm:block" />
            <div className="h-6 w-px bg-muted-foreground sm:hidden" />
          </div>
          <div className="flex-1 rounded-xl bg-green-50 p-4 border border-green-100">
            <h4 className="font-semibold text-green-800 flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Adaptive (Agile)
            </h4>
            <p className="mt-2 text-sm text-green-700">
              Iterative cycles, evolving requirements, embraces change
            </p>
          </div>
        </div>
      </div>

      <h2>Waterfall (Predictive) Approach</h2>
      <p>
        The waterfall methodology follows a linear, sequential process where each phase 
        must be completed before the next begins. It&apos;s called &quot;waterfall&quot; because progress 
        flows downward through the phases like a waterfall.
      </p>

      <div className="not-prose my-8">
        <div className="flex flex-col gap-2">
          {[
            { phase: "Requirements", desc: "Define what needs to be built" },
            { phase: "Design", desc: "Plan how it will be built" },
            { phase: "Implementation", desc: "Build the solution" },
            { phase: "Testing", desc: "Verify it works correctly" },
            { phase: "Deployment", desc: "Release to users" },
            { phase: "Maintenance", desc: "Support and improve" },
          ].map((item, i) => (
            <div key={item.phase} className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                {i + 1}
              </div>
              <div className="flex-1 rounded-lg bg-blue-50 px-4 py-2 border-l-4 border-blue-400">
                <span className="font-semibold text-blue-800">{item.phase}:</span>{" "}
                <span className="text-blue-700">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>When to Use Waterfall</h3>
      <ul>
        <li>Requirements are well-understood and unlikely to change</li>
        <li>Regulatory compliance requires extensive documentation</li>
        <li>The project team has limited experience with agile methods</li>
        <li>Fixed-price contracts with defined deliverables</li>
        <li>Projects with physical outputs (construction, manufacturing)</li>
      </ul>

      <h3>Waterfall Challenges</h3>
      <ul>
        <li>Late discovery of problems (testing comes near the end)</li>
        <li>Difficulty accommodating changing requirements</li>
        <li>Stakeholders don&apos;t see results until late in the project</li>
        <li>Can create documentation without real value</li>
      </ul>

      <h2>Agile Approaches</h2>
      <p>
        Agile is an umbrella term for adaptive methodologies that emphasise flexibility, 
        collaboration, and delivering working solutions in short iterations. The 
        <strong> Agile Manifesto</strong> established four core values:
      </p>

      <div className="not-prose my-8 rounded-2xl border border-green-200 bg-green-50 p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">The Agile Values</h3>
        <div className="space-y-3 text-green-700">
          <p><strong>Individuals and interactions</strong> over processes and tools</p>
          <p><strong>Working software</strong> over comprehensive documentation</p>
          <p><strong>Customer collaboration</strong> over contract negotiation</p>
          <p><strong>Responding to change</strong> over following a plan</p>
        </div>
        <p className="mt-4 text-sm text-green-600 italic">
          While there is value in the items on the right, we value the items on the left more.
        </p>
      </div>

      <h3>Scrum Framework</h3>
      <p>
        Scrum is the most popular agile framework. It organises work into fixed-length 
        iterations called <strong>sprints</strong> (typically 2-4 weeks) with defined roles 
        and ceremonies.
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-4">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <Users className="h-5 w-5 text-green-600" />
            Scrum Roles
          </h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li><strong>Product Owner:</strong> Defines what to build</li>
            <li><strong>Scrum Master:</strong> Facilitates the process</li>
            <li><strong>Development Team:</strong> Builds the product</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-green-600" />
            Scrum Events
          </h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li><strong>Sprint Planning:</strong> Plan the iteration</li>
            <li><strong>Daily Standup:</strong> 15-min sync meeting</li>
            <li><strong>Sprint Review:</strong> Demo the work</li>
            <li><strong>Retrospective:</strong> Improve the process</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <CheckSquare className="h-5 w-5 text-green-600" />
            Scrum Artefacts
          </h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li><strong>Product Backlog:</strong> Prioritised work list</li>
            <li><strong>Sprint Backlog:</strong> This sprint&apos;s work</li>
            <li><strong>Increment:</strong> Potentially shippable output</li>
          </ul>
        </div>
      </div>

      <h3>Kanban</h3>
      <p>
        Kanban is a visual workflow management method that focuses on continuous delivery 
        without fixed-length iterations. Work items flow through columns representing stages 
        (e.g., To Do → In Progress → Done).
      </p>
      <ul>
        <li><strong>Visualise the workflow</strong> on a board</li>
        <li><strong>Limit work in progress (WIP)</strong> to prevent overload</li>
        <li><strong>Manage flow</strong> by identifying and removing bottlenecks</li>
        <li><strong>Make policies explicit</strong> so everyone understands the rules</li>
        <li><strong>Improve collaboratively</strong> through regular reflection</li>
      </ul>

      <h3>When to Use Agile</h3>
      <ul>
        <li>Requirements are uncertain or expected to evolve</li>
        <li>Early and frequent delivery is valuable</li>
        <li>Close collaboration with stakeholders is possible</li>
        <li>The team is co-located or has good virtual collaboration tools</li>
        <li>Flexibility to change direction is more important than predictability</li>
      </ul>

      <h2>Hybrid Approaches</h2>
      <p>
        Many organisations find that pure waterfall or pure agile doesn&apos;t fit their needs. 
        Hybrid approaches combine elements of both, for example:
      </p>
      <ul>
        <li>Using waterfall for overall project phases but agile within each phase</li>
        <li>Applying agile to uncertain work and waterfall to well-defined work</li>
        <li>Following agile practices while maintaining traditional governance</li>
      </ul>

      <div className="not-prose my-8 rounded-2xl border border-purple-200 bg-purple-50 p-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">Hybrid Example</h3>
        <p className="text-purple-700">
          A charity implementing a new donor management system might use:
        </p>
        <ul className="mt-3 space-y-2 text-purple-700">
          <li>
            <strong>Waterfall approach</strong> for procurement, vendor selection, and 
            contract negotiation (well-defined, sequential)
          </li>
          <li>
            <strong>Agile approach</strong> for configuration, data migration, and user 
            training (iterative, feedback-driven)
          </li>
          <li>
            <strong>Traditional governance</strong> with stage gates and board approvals 
            while using daily standups within the implementation team
          </li>
        </ul>
      </div>

      <h2>Choosing the Right Methodology</h2>
      <p>
        Consider these factors when selecting your approach:
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-secondary">
              <th className="border border-border p-3 text-left font-semibold">Factor</th>
              <th className="border border-border p-3 text-center font-semibold">Waterfall</th>
              <th className="border border-border p-3 text-center font-semibold">Agile</th>
            </tr>
          </thead>
          <tbody>
            {[
              { factor: "Requirements clarity", waterfall: "Clear, stable", agile: "Unclear, evolving" },
              { factor: "Stakeholder availability", waterfall: "Limited", agile: "Frequent access" },
              { factor: "Delivery urgency", waterfall: "Can wait for complete solution", agile: "Need early value" },
              { factor: "Risk tolerance", waterfall: "Low", agile: "Higher" },
              { factor: "Documentation needs", waterfall: "Extensive", agile: "Minimal viable" },
              { factor: "Team experience", waterfall: "Traditional PM", agile: "Self-organising" },
            ].map((row) => (
              <tr key={row.factor}>
                <td className="border border-border p-3 font-medium bg-secondary/50">{row.factor}</td>
                <td className="border border-border p-3 text-center">{row.waterfall}</td>
                <td className="border border-border p-3 text-center">{row.agile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Practical Tips for Small Organisations</h2>
      <ul>
        <li>
          <strong>Don&apos;t over-engineer:</strong> Choose the simplest approach that works 
          for your situation
        </li>
        <li>
          <strong>Focus on principles over practices:</strong> Understand why practices exist, 
          then adapt them to your context
        </li>
        <li>
          <strong>Build incrementally:</strong> Whatever methodology you choose, try to 
          deliver value in smaller chunks
        </li>
        <li>
          <strong>Involve your team:</strong> People are more likely to follow processes 
          they helped create
        </li>
        <li>
          <strong>Review and adapt:</strong> Regularly assess whether your methodology 
          is working and adjust as needed
        </li>
      </ul>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <h4 className="font-semibold text-green-800 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Quick Wins for Any Methodology
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-green-700">
            <li>Regular team check-ins (even 15 minutes helps)</li>
            <li>Visual task tracking (physical or digital board)</li>
            <li>Clear definition of &quot;done&quot; for deliverables</li>
            <li>Brief retrospectives after key milestones</li>
          </ul>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h4 className="font-semibold text-amber-800 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Common Pitfalls to Avoid
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-amber-700">
            <li>Adopting &quot;Agile&quot; in name only without changing culture</li>
            <li>Creating documentation nobody reads or uses</li>
            <li>Skipping retrospectives when busy</li>
            <li>Refusing to adapt when the approach isn&apos;t working</li>
          </ul>
        </div>
      </div>

      <h2>The ECCSR Connection</h2>
      <p>
        Your choice of methodology affects how you live the <strong>ECCSR values</strong>:
      </p>
      <ul>
        <li><strong>Ethics:</strong> Does your methodology encourage honest reporting of progress and problems?</li>
        <li><strong>Community:</strong> How does your approach involve and serve stakeholders?</li>
        <li><strong>Collaboration:</strong> Does the methodology support effective teamwork?</li>
        <li><strong>Sustainability:</strong> Is the pace of work sustainable for the team?</li>
        <li><strong>Resilience:</strong> Can you adapt when circumstances change?</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          The best methodology is one that fits your specific context and that your team will 
          actually follow. Don&apos;t get caught up in methodology debates - focus on delivering 
          value to your stakeholders while building a sustainable, collaborative team environment. 
          Start simple, learn as you go, and adapt your approach based on what works.
        </p>
      </div>
    </TopicPageLayout>
  )
}
