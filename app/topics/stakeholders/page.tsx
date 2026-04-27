import { UserCircle2, Target, MessageSquare, Eye, Users, ArrowUpRight, ArrowDownRight, CheckCircle } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Stakeholder Management | PM Made Practical",
  description: "Learn how to identify, analyse, and engage project stakeholders effectively. A practical guide for managing expectations and building support.",
}

const videos = [
  {
    title: "Stakeholder Analysis Tutorial",
    url: "https://www.youtube.com/watch?v=2CXCOy0V9oU",
    duration: "10:45",
    description: "Creating a stakeholder map step by step"
  },
  {
    title: "Managing Stakeholder Expectations",
    url: "https://www.youtube.com/watch?v=6J-J8hQOv9Q",
    duration: "12:30",
    description: "Communication strategies that work"
  },
  {
    title: "Dealing with Difficult Stakeholders",
    url: "https://www.youtube.com/watch?v=HmOLVmYmvJI",
    duration: "14:20",
    description: "Turning opposition into support"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapter 10: Being an Effective Project Manager (Stakeholder sections)",
    type: "book" as const,
  },
  {
    title: "Stakeholder Theory",
    author: "R. Edward Freeman",
    source: "The strategic management of stakeholder relationships",
    type: "book" as const,
  },
  {
    title: "Voice of the Customer",
    author: "PMBOK Guide",
    source: "Techniques for understanding stakeholder needs",
    type: "guide" as const,
  },
]

const relatedTopics = [
  { name: "Leadership", href: "/topics/leadership" },
  { name: "Teams", href: "/topics/teams" },
  { name: "Governance", href: "/topics/governance" },
  { name: "Ethics", href: "/topics/ethics" },
]

const keyTakeaways = [
  "Identify ALL stakeholders early in the project",
  "Understand each stakeholder&apos;s interests and influence",
  "Tailor communication to each stakeholder group",
  "Manage expectations proactively",
  "Convert opponents into supporters when possible",
]

export default function StakeholdersPage() {
  return (
    <TopicPageLayout
      title="Stakeholder Management"
      subtitle="Engaging Those Who Matter"
      description="Stakeholders are all the individuals and organisations who have an interest in your project - whether they&apos;re affected by it, can influence it, or both. Effective stakeholder management involves identifying who they are, understanding their interests, and developing strategies to engage them appropriately throughout the project lifecycle."
      icon={<UserCircle2 className="h-8 w-8 text-cyan-600" />}
      iconBgClass="bg-cyan-50 border border-cyan-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>Why Stakeholder Management Matters</h2>
      <p>
        As the Company Project Module Outline emphasises, &quot;Voice of the Customer is an 
        essential aspect of any product or service development.&quot; But stakeholder management 
        goes beyond customers - it encompasses everyone who can affect or be affected by 
        your project.
      </p>
      <p>
        Project success ultimately depends on stakeholder perceptions. A technically 
        perfect project that fails to meet stakeholder expectations is still a failure. 
        Conversely, a project with challenges can still be considered successful if 
        stakeholders feel their needs were addressed.
      </p>

      <h2>Identifying Stakeholders</h2>
      <p>
        The first step is creating a comprehensive list of all stakeholders. Common 
        categories include:
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { group: "Internal", examples: ["Project team", "Project sponsor", "Senior management", "Other departments", "Board members"] },
          { group: "External", examples: ["Customers/clients", "Suppliers", "Contractors", "Regulators", "Community groups"] },
          { group: "Indirect", examples: ["Media", "Competitors", "Industry bodies", "Future users", "General public"] },
        ].map((category) => (
          <div key={category.group} className="rounded-xl border border-border bg-card p-5">
            <h4 className="font-semibold text-foreground mb-3">{category.group} Stakeholders</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {category.examples.map((example) => (
                <li key={example} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {example}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p>
        For small businesses and charities in Ireland, stakeholders might also include:
      </p>
      <ul>
        <li>Funding bodies (government grants, foundations, donors)</li>
        <li>Volunteers and their families</li>
        <li>Local community members</li>
        <li>Partner organisations</li>
        <li>Media (local and national)</li>
        <li>Regulatory bodies specific to your sector</li>
      </ul>

      <h2>Stakeholder Analysis</h2>
      <p>
        Once you&apos;ve identified stakeholders, analyse them to understand:
      </p>
      <ul>
        <li><strong>Interest:</strong> What do they care about? What&apos;s at stake for them?</li>
        <li><strong>Influence:</strong> How much power do they have over the project?</li>
        <li><strong>Attitude:</strong> Are they supportive, neutral, or opposed?</li>
        <li><strong>Expectations:</strong> What do they expect from the project and from you?</li>
      </ul>

      <h3>The Power/Interest Grid</h3>
      <p>
        A common tool for stakeholder analysis is the Power/Interest matrix, which helps 
        you prioritise engagement efforts:
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <div className="grid grid-cols-3 gap-1 min-w-[400px]">
          <div className="p-3" />
          <div className="p-3 text-center text-sm font-semibold text-muted-foreground">Low Interest</div>
          <div className="p-3 text-center text-sm font-semibold text-muted-foreground">High Interest</div>
          
          <div className="p-3 text-sm font-semibold text-muted-foreground flex items-center">High Power</div>
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
            <h4 className="font-semibold text-amber-800 text-sm">Keep Satisfied</h4>
            <p className="text-xs text-amber-700 mt-1">Monitor and engage on key issues</p>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <h4 className="font-semibold text-green-800 text-sm">Manage Closely</h4>
            <p className="text-xs text-green-700 mt-1">Regular engagement and communication</p>
          </div>
          
          <div className="p-3 text-sm font-semibold text-muted-foreground flex items-center">Low Power</div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h4 className="font-semibold text-slate-800 text-sm">Monitor</h4>
            <p className="text-xs text-slate-700 mt-1">Keep informed, minimal effort</p>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <h4 className="font-semibold text-blue-800 text-sm">Keep Informed</h4>
            <p className="text-xs text-blue-700 mt-1">Regular updates, address concerns</p>
          </div>
        </div>
      </div>

      <h2>Stakeholder Engagement Strategies</h2>
      <p>
        Based on your analysis, develop tailored strategies for each stakeholder or 
        stakeholder group:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: ArrowUpRight,
            title: "Convert Opponents",
            description: "Understand their concerns, address them where possible, find common ground, involve them in decisions",
            color: "bg-red-50 text-red-600 border-red-100"
          },
          {
            icon: CheckCircle,
            title: "Maintain Supporters",
            description: "Keep them informed, involve them appropriately, recognise their contributions, don&apos;t take them for granted",
            color: "bg-green-50 text-green-600 border-green-100"
          },
          {
            icon: ArrowDownRight,
            title: "Engage Neutrals",
            description: "Provide information, highlight benefits, invite input, build relationships before you need them",
            color: "bg-amber-50 text-amber-600 border-amber-100"
          },
          {
            icon: Eye,
            title: "Monitor All",
            description: "Stakeholder positions can change - regularly reassess and adjust your approach",
            color: "bg-blue-50 text-blue-600 border-blue-100"
          },
        ].map((strategy) => (
          <div key={strategy.title} className={`flex gap-4 rounded-xl border p-4 ${strategy.color}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/80">
              <strategy.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold">{strategy.title}</h4>
              <p className="text-sm opacity-90">{strategy.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Communication Planning</h2>
      <p>
        Different stakeholders have different communication needs. Your project 
        communication plan should address:
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-secondary">
              <th className="border border-border p-3 text-left font-semibold">Stakeholder</th>
              <th className="border border-border p-3 text-left font-semibold">Information Needs</th>
              <th className="border border-border p-3 text-left font-semibold">Frequency</th>
              <th className="border border-border p-3 text-left font-semibold">Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">Project Sponsor</td>
              <td className="border border-border p-3">Progress, risks, decisions needed</td>
              <td className="border border-border p-3">Weekly</td>
              <td className="border border-border p-3">1:1 meeting, brief report</td>
            </tr>
            <tr className="bg-secondary/30">
              <td className="border border-border p-3">Board</td>
              <td className="border border-border p-3">Strategic progress, budget status</td>
              <td className="border border-border p-3">Monthly</td>
              <td className="border border-border p-3">Board paper, presentation</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Project Team</td>
              <td className="border border-border p-3">Tasks, changes, coordination</td>
              <td className="border border-border p-3">Daily/Weekly</td>
              <td className="border border-border p-3">Team meetings, messaging</td>
            </tr>
            <tr className="bg-secondary/30">
              <td className="border border-border p-3">Customers</td>
              <td className="border border-border p-3">Timeline, features, involvement</td>
              <td className="border border-border p-3">As needed</td>
              <td className="border border-border p-3">Email, meetings, surveys</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Funders</td>
              <td className="border border-border p-3">Milestones, spend, outcomes</td>
              <td className="border border-border p-3">Per agreement</td>
              <td className="border border-border p-3">Formal reports</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Managing Expectations</h2>
      <p>
        One of the most important aspects of stakeholder management is setting and 
        managing expectations. Key principles include:
      </p>
      <ul>
        <li><strong>Be honest:</strong> Don&apos;t over-promise to please stakeholders in the moment</li>
        <li><strong>Be proactive:</strong> Share bad news early rather than letting stakeholders discover it</li>
        <li><strong>Be specific:</strong> Vague promises lead to misunderstandings</li>
        <li><strong>Be consistent:</strong> Mixed messages create confusion and erode trust</li>
        <li><strong>Document agreements:</strong> Written records prevent &quot;I thought you said...&quot; disputes</li>
      </ul>

      <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">The &quot;No Surprises&quot; Rule</h3>
        <p className="text-amber-700">
          Stakeholders - especially sponsors and senior management - hate surprises. 
          When problems arise, inform them immediately. It&apos;s always better to say 
          &quot;we have a potential issue and here&apos;s our plan to address it&quot; than to 
          be discovered trying to hide a problem.
        </p>
      </div>

      <h2>Handling Difficult Stakeholders</h2>
      <p>
        Not all stakeholders will be cooperative. Strategies for difficult situations:
      </p>
      <ul>
        <li><strong>The Obstructor:</strong> Understand their concerns, find common ground, involve your sponsor if needed</li>
        <li><strong>The Micromanager:</strong> Provide frequent updates to build confidence, gradually demonstrate competence</li>
        <li><strong>The Disengaged:</strong> Make participation easy, highlight what&apos;s in it for them, escalate if truly necessary</li>
        <li><strong>The Scope Creeper:</strong> Document requirements clearly, use change control, highlight trade-offs</li>
        <li><strong>The Pessimist:</strong> Listen to concerns (they may be valid), involve them in problem-solving</li>
      </ul>

      <h2>The Voice of the Customer</h2>
      <p>
        Among all stakeholders, customers (or clients, service users, beneficiaries) 
        deserve special attention. Techniques for understanding customer needs include:
      </p>
      <ul>
        <li><strong>Interviews:</strong> Direct conversations to understand needs and expectations</li>
        <li><strong>Surveys:</strong> Structured data collection from larger groups</li>
        <li><strong>Focus groups:</strong> Interactive discussions to explore issues in depth</li>
        <li><strong>Observation:</strong> Watching how people actually use products or services</li>
        <li><strong>Journey mapping:</strong> Understanding the full customer experience</li>
        <li><strong>Prototyping:</strong> Getting feedback on early versions before full commitment</li>
      </ul>

      <h2>Stakeholder Management for Small Organisations</h2>
      <p>
        Small businesses and charities often have stakeholder relationships that are 
        more personal and less formal than in large organisations:
      </p>
      <ul>
        <li><strong>Relationship-based:</strong> Personal trust matters more than formal processes</li>
        <li><strong>Resource-constrained:</strong> Can&apos;t afford elaborate engagement programmes</li>
        <li><strong>Multi-role stakeholders:</strong> Same person may be donor, volunteer, and service user</li>
        <li><strong>Community visibility:</strong> Reputation effects are more immediate and lasting</li>
        <li><strong>Informal networks:</strong> Word of mouth spreads quickly in close communities</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          Stakeholder management is not manipulation - it&apos;s about building genuine 
          relationships based on understanding and mutual benefit. The goal is to 
          ensure your project creates value for everyone involved, and that 
          everyone understands what the project can and cannot deliver. 
          Transparent, honest communication builds the trust that makes everything else possible.
        </p>
      </div>
    </TopicPageLayout>
  )
}
