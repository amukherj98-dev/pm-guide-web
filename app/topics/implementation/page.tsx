import { Rocket, Clock, DollarSign, Target, AlertTriangle, CheckCircle, RotateCcw, TrendingUp } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Project Implementation | PM Made Practical",
  description: "Learn how to execute project plans effectively, track progress, manage changes, and bring projects to successful completion.",
}

const videos = [
  {
    title: "Earned Value Management Basics",
    url: "https://www.youtube.com/watch?v=O9V8bD6y-ks",
    duration: "14:30",
    description: "Tracking project progress and performance"
  },
  {
    title: "Managing Scope Creep",
    url: "https://www.youtube.com/watch?v=8LpQ8dQbgCI",
    duration: "10:15",
    description: "Keeping projects on track"
  },
  {
    title: "Project Recovery Strategies",
    url: "https://www.youtube.com/watch?v=QXm1HqnUJuI",
    duration: "12:45",
    description: "Getting troubled projects back on track"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapters 8-9, 13: Resources, Duration, Progress",
    type: "book" as const,
  },
  {
    title: "The Phoenix Project",
    author: "Gene Kim et al.",
    source: "A novel about IT project delivery",
    type: "book" as const,
  },
  {
    title: "Critical Chain",
    author: "Eliyahu Goldratt",
    source: "Theory of constraints applied to projects",
    type: "book" as const,
  },
]

const relatedTopics = [
  { name: "Planning", href: "/topics/planning" },
  { name: "Teams", href: "/topics/teams" },
  { name: "Risk Management", href: "/topics/risk" },
  { name: "Methodologies", href: "/topics/methodologies" },
]

const keyTakeaways = [
  "Monitor progress against the baseline plan",
  "Use change control to manage scope changes",
  "Address problems early before they escalate",
  "Track cost and schedule performance together",
  "Communicate status regularly and honestly",
]

export default function ImplementationPage() {
  return (
    <TopicPageLayout
      title="Project Implementation"
      subtitle="Executing the Plan"
      description="Implementation is where plans become reality. It involves coordinating people and resources, monitoring progress, managing changes, and taking corrective action when things don&apos;t go as planned. This phase requires constant attention to keep the project moving toward its goals while adapting to the inevitable surprises that arise."
      icon={<Rocket className="h-8 w-8 text-orange-600" />}
      iconBgClass="bg-orange-50 border border-orange-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>The Implementation Challenge</h2>
      <p>
        As the Company Project Module emphasises, self-directed learning and the ability 
        to direct activities toward deliverables are key skills to master. During 
        implementation, you must:
      </p>
      <ul>
        <li>Coordinate work across multiple people and tasks</li>
        <li>Monitor progress against the plan</li>
        <li>Identify and resolve problems</li>
        <li>Manage changes to scope, schedule, or budget</li>
        <li>Communicate status to stakeholders</li>
        <li>Make decisions and trade-offs</li>
      </ul>

      <h2>Progress Monitoring</h2>
      <p>
        You can&apos;t manage what you don&apos;t measure. Effective progress monitoring requires:
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <Clock className="h-8 w-8 mx-auto text-blue-500 mb-3" />
          <h4 className="font-semibold text-foreground">Schedule Tracking</h4>
          <p className="text-sm text-muted-foreground mt-2">Are we on time? Which tasks are complete?</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <DollarSign className="h-8 w-8 mx-auto text-green-500 mb-3" />
          <h4 className="font-semibold text-foreground">Cost Tracking</h4>
          <p className="text-sm text-muted-foreground mt-2">Are we on budget? What have we spent?</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <Target className="h-8 w-8 mx-auto text-purple-500 mb-3" />
          <h4 className="font-semibold text-foreground">Scope Tracking</h4>
          <p className="text-sm text-muted-foreground mt-2">Are we delivering what was promised?</p>
        </div>
      </div>

      <h3>Percent Complete vs Value Delivered</h3>
      <p>
        Be careful with &quot;percent complete&quot; reporting. The classic pattern is that 
        tasks reach 90% complete quickly, then stay at 90% for a long time. Better 
        approaches include:
      </p>
      <ul>
        <li><strong>0/100 rule:</strong> Task is either not started (0%) or complete (100%)</li>
        <li><strong>50/50 rule:</strong> 50% when started, 100% when complete</li>
        <li><strong>Milestone-based:</strong> Credit given only when defined milestones are achieved</li>
      </ul>

      <h2>Earned Value Management</h2>
      <p>
        Earned Value Management (EVM) integrates scope, schedule, and cost to provide 
        a comprehensive view of project performance. Key metrics include:
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-secondary">
              <th className="border border-border p-3 text-left font-semibold">Metric</th>
              <th className="border border-border p-3 text-left font-semibold">What It Measures</th>
              <th className="border border-border p-3 text-left font-semibold">Formula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-medium">Planned Value (PV)</td>
              <td className="border border-border p-3">Budgeted cost of work scheduled</td>
              <td className="border border-border p-3">From baseline plan</td>
            </tr>
            <tr className="bg-secondary/30">
              <td className="border border-border p-3 font-medium">Earned Value (EV)</td>
              <td className="border border-border p-3">Budgeted cost of work performed</td>
              <td className="border border-border p-3">% complete x budget</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium">Actual Cost (AC)</td>
              <td className="border border-border p-3">Actual cost of work performed</td>
              <td className="border border-border p-3">From accounting</td>
            </tr>
            <tr className="bg-secondary/30">
              <td className="border border-border p-3 font-medium">Cost Variance (CV)</td>
              <td className="border border-border p-3">Over/under budget</td>
              <td className="border border-border p-3">EV - AC</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium">Schedule Variance (SV)</td>
              <td className="border border-border p-3">Ahead/behind schedule</td>
              <td className="border border-border p-3">EV - PV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">Interpreting Variances</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Positive Variance</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>CV &gt; 0: Under budget (good)</li>
              <li>SV &gt; 0: Ahead of schedule (good)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Negative Variance</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>CV &lt; 0: Over budget (problem)</li>
              <li>SV &lt; 0: Behind schedule (problem)</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Change Control</h2>
      <p>
        Changes during implementation are inevitable. A change control system ensures 
        changes are evaluated, approved, and documented properly:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            step: "1",
            title: "Request",
            description: "Change is formally documented with justification"
          },
          {
            step: "2",
            title: "Assess",
            description: "Impact on scope, schedule, budget, and risk is analysed"
          },
          {
            step: "3",
            title: "Decide",
            description: "Appropriate authority approves or rejects"
          },
          {
            step: "4",
            title: "Implement",
            description: "Approved changes are integrated into plans"
          },
          {
            step: "5",
            title: "Communicate",
            description: "All stakeholders are informed of changes"
          },
        ].map((item) => (
          <div key={item.step} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              {item.step}
            </span>
            <div>
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>Preventing Scope Creep</h3>
      <p>
        Scope creep - the gradual expansion of project scope without corresponding 
        increases in resources or time - is a major cause of project failure. To prevent it:
      </p>
      <ul>
        <li>Define scope clearly at the start</li>
        <li>Ensure stakeholders agree to the scope in writing</li>
        <li>Use change control for ALL changes, no matter how small</li>
        <li>Make trade-offs explicit: &quot;We can add this if we drop something else&quot;</li>
        <li>Track all change requests and their cumulative impact</li>
      </ul>

      <h2>Reducing Project Duration</h2>
      <p>
        Sometimes projects must be completed faster than originally planned. Options 
        for accelerating include:
      </p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Crashing
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Add resources to critical path activities to reduce their duration.
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Trade-off:</strong> Increases cost; diminishing returns apply
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-primary" />
            Fast-tracking
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Perform activities in parallel that were originally planned in sequence.
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Trade-off:</strong> Increases risk of rework if early work changes
          </p>
        </div>
      </div>

      <h2>Problem Solving</h2>
      <p>
        Problems will arise. Effective project managers:
      </p>
      <ul>
        <li><strong>Detect early:</strong> Close monitoring reveals problems while they&apos;re still small</li>
        <li><strong>Escalate appropriately:</strong> Don&apos;t hide problems, but don&apos;t panic either</li>
        <li><strong>Analyse root causes:</strong> Fix the underlying issue, not just symptoms</li>
        <li><strong>Generate options:</strong> Develop multiple possible solutions</li>
        <li><strong>Decide and act:</strong> Choose a course and execute it</li>
        <li><strong>Follow up:</strong> Verify the solution worked</li>
      </ul>

      <div className="not-prose my-8 rounded-2xl border border-red-200 bg-red-50 p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Warning Signs of Troubled Projects
        </h3>
        <ul className="space-y-2 text-sm text-red-700">
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 mt-2" />
            Repeated schedule slippage (&quot;just one more week&quot;)
          </li>
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 mt-2" />
            Cost overruns that keep growing
          </li>
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 mt-2" />
            Key team members leaving or disengaging
          </li>
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 mt-2" />
            Stakeholders losing interest or faith
          </li>
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 mt-2" />
            Quality problems and increasing rework
          </li>
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 mt-2" />
            Poor communication and finger-pointing
          </li>
        </ul>
      </div>

      <h2>Status Reporting</h2>
      <p>
        Regular status reports keep stakeholders informed and build confidence. 
        Effective status reports:
      </p>
      <ul>
        <li>Are consistent in format and timing</li>
        <li>Highlight accomplishments since last report</li>
        <li>Show progress against plan (schedule, budget, scope)</li>
        <li>Identify risks and issues</li>
        <li>Describe planned activities for the next period</li>
        <li>Request decisions or support needed</li>
      </ul>

      <h2>Project Closure</h2>
      <p>
        Don&apos;t neglect the final phase. Proper closure includes:
      </p>
      <ul>
        <li><strong>Formal acceptance:</strong> Get sign-off that deliverables are complete</li>
        <li><strong>Documentation:</strong> Archive project records</li>
        <li><strong>Lessons learned:</strong> Capture what worked and what didn&apos;t</li>
        <li><strong>Resource release:</strong> Free team members for other work</li>
        <li><strong>Celebration:</strong> Recognise the team&apos;s accomplishments</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          Implementation is where the rubber meets the road. No plan survives first 
          contact with reality unchanged. The art of project management lies in 
          staying close enough to the work to detect problems early, while maintaining 
          enough perspective to make good decisions about how to respond. Balance 
          flexibility with discipline, and always keep the end goal in sight.
        </p>
      </div>
    </TopicPageLayout>
  )
}
