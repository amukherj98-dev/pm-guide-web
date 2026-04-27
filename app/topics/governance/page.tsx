import { Building2, Users, Shield, FileCheck, Eye, Settings, AlertTriangle } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Project Governance | PM Made Practical",
  description: "Learn about project governance structures, accountability frameworks, and how to establish clear roles and decision-making processes.",
}

const videos = [
  {
    title: "Project Governance Fundamentals",
    url: "https://www.youtube.com/watch?v=6bDlvEAQBqI",
    duration: "11:30",
    description: "Understanding governance structures"
  },
  {
    title: "Project Management Office (PMO)",
    url: "https://www.youtube.com/watch?v=gBRs-SaVqQg",
    duration: "13:45",
    description: "Roles and functions of the PMO"
  },
  {
    title: "Steering Committees Best Practices",
    url: "https://www.youtube.com/watch?v=Q7PfFRJxcyQ",
    duration: "9:20",
    description: "Making governance work effectively"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapter 3: Organisation Structure and Culture",
    type: "book" as const,
  },
  {
    title: "Governance of Project Management",
    author: "APM",
    source: "Association for Project Management guidance",
    type: "guide" as const,
  },
  {
    title: "The Governance of Charities",
    author: "Charities Regulator Ireland",
    source: "Irish charity governance code",
    type: "guide" as const,
    url: "https://www.charitiesregulator.ie/",
  },
]

const relatedTopics = [
  { name: "Strategy", href: "/topics/strategy" },
  { name: "Ethics", href: "/topics/ethics" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
  { name: "Risk Management", href: "/topics/risk" },
]

const keyTakeaways = [
  "Governance provides accountability and oversight",
  "Clear roles prevent confusion and conflict",
  "Decision rights must be explicitly defined",
  "Governance should enable, not obstruct, delivery",
  "Small organisations need proportionate governance",
]

export default function GovernancePage() {
  return (
    <TopicPageLayout
      title="Project Governance"
      subtitle="Structure and Accountability"
      description="Governance is the framework of authority, accountability, and decision-making that guides how projects are directed and controlled. Good governance ensures projects are properly authorised, resourced, and overseen while giving project managers the authority they need to deliver results."
      icon={<Building2 className="h-8 w-8 text-slate-600" />}
      iconBgClass="bg-slate-50 border border-slate-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>What is Project Governance?</h2>
      <p>
        Project governance encompasses:
      </p>
      <ul>
        <li><strong>Accountability:</strong> Who is responsible for what?</li>
        <li><strong>Authority:</strong> Who can make which decisions?</li>
        <li><strong>Oversight:</strong> How is the project monitored and controlled?</li>
        <li><strong>Assurance:</strong> How do we know things are going well?</li>
        <li><strong>Escalation:</strong> How are issues raised and resolved?</li>
      </ul>
      <p>
        Without clear governance, projects can drift without direction, decisions get 
        stuck, and accountability becomes unclear when problems arise.
      </p>

      <h2>Key Governance Roles</h2>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Users,
            title: "Project Sponsor",
            description: "The senior executive who champions the project, provides resources, removes obstacles, and is ultimately accountable for business benefits.",
            responsibilities: ["Approves scope and budget", "Makes high-level decisions", "Removes blockers", "Reports to board/executives"]
          },
          {
            icon: Shield,
            title: "Steering Committee",
            description: "A group of senior stakeholders who provide strategic direction and oversight, typically meeting periodically to review progress.",
            responsibilities: ["Strategic direction", "Major decisions and approvals", "Resource allocation", "Issue resolution"]
          },
          {
            icon: Settings,
            title: "Project Manager",
            description: "The person responsible for day-to-day planning and execution, managing the team, and delivering the project objectives.",
            responsibilities: ["Planning and scheduling", "Team management", "Risk management", "Status reporting"]
          },
          {
            icon: Eye,
            title: "Project Management Office (PMO)",
            description: "A support function that provides standards, tools, training, and oversight across multiple projects.",
            responsibilities: ["Standards and templates", "Training and support", "Portfolio oversight", "Resource coordination"]
          },
        ].map((role) => (
          <div key={role.title} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <role.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">{role.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.responsibilities.map((resp) => (
                    <span key={resp} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Project Organisational Structures</h2>
      <p>
        According to Larson & Gray, projects can be organised in several ways within 
        an organisation:
      </p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3">Functional</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Projects run within existing departments. Team members report to 
            functional managers.
          </p>
          <div className="text-xs">
            <p className="text-green-600 mb-1">+ Uses existing expertise</p>
            <p className="text-red-600">- PM has little authority</p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3">Matrix</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Team members report to both functional managers and project managers. 
            Authority is shared.
          </p>
          <div className="text-xs">
            <p className="text-green-600 mb-1">+ Flexible resource use</p>
            <p className="text-red-600">- Can create confusion</p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3">Projectised</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Dedicated project team reports directly to PM. Team exists for project 
            duration only.
          </p>
          <div className="text-xs">
            <p className="text-green-600 mb-1">+ Clear authority and focus</p>
            <p className="text-red-600">- Can be resource-heavy</p>
          </div>
        </div>
      </div>

      <h2>Decision Rights</h2>
      <p>
        Effective governance requires clarity about who can make which decisions. 
        A common framework uses the RACI matrix:
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-secondary">
              <th className="border border-border p-3 text-left font-semibold">Letter</th>
              <th className="border border-border p-3 text-left font-semibold">Role</th>
              <th className="border border-border p-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-bold text-primary">R</td>
              <td className="border border-border p-3 font-medium">Responsible</td>
              <td className="border border-border p-3">Does the work to complete the task</td>
            </tr>
            <tr className="bg-secondary/30">
              <td className="border border-border p-3 font-bold text-primary">A</td>
              <td className="border border-border p-3 font-medium">Accountable</td>
              <td className="border border-border p-3">Ultimately answerable; has final authority (only one per task)</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-bold text-primary">C</td>
              <td className="border border-border p-3 font-medium">Consulted</td>
              <td className="border border-border p-3">Provides input; two-way communication</td>
            </tr>
            <tr className="bg-secondary/30">
              <td className="border border-border p-3 font-bold text-primary">I</td>
              <td className="border border-border p-3 font-medium">Informed</td>
              <td className="border border-border p-3">Kept up to date; one-way communication</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Governance Documents</h2>
      <p>
        Key documents that support governance include:
      </p>
      <ul>
        <li><strong>Project Charter:</strong> Authorises the project and defines scope, objectives, and constraints</li>
        <li><strong>Terms of Reference:</strong> Defines the mandate and authority of governance bodies</li>
        <li><strong>Delegation of Authority:</strong> Specifies decision-making limits and approval thresholds</li>
        <li><strong>Escalation Procedures:</strong> Defines when and how issues are raised to higher levels</li>
        <li><strong>Reporting Requirements:</strong> Specifies what information is reported, to whom, and when</li>
      </ul>

      <h2>Phase Gate Governance</h2>
      <p>
        Many organisations use phase gates to provide structured oversight:
      </p>
      <ul>
        <li><strong>Gate 1 (Concept):</strong> Should we explore this idea?</li>
        <li><strong>Gate 2 (Feasibility):</strong> Is this project viable?</li>
        <li><strong>Gate 3 (Planning):</strong> Is the plan realistic and approved?</li>
        <li><strong>Gate 4 (Execution):</strong> Are we ready to deliver?</li>
        <li><strong>Gate 5 (Closure):</strong> Are deliverables accepted?</li>
      </ul>
      <p>
        At each gate, governance bodies review progress and decide whether to proceed, 
        revise, or stop the project.
      </p>

      <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Common Governance Problems
        </h3>
        <ul className="space-y-2 text-sm text-amber-700">
          <li><strong>Rubber stamping:</strong> Governance bodies approve without scrutiny</li>
          <li><strong>Micromanagement:</strong> Governance interferes in operational decisions</li>
          <li><strong>Unclear authority:</strong> Nobody knows who can decide what</li>
          <li><strong>Absent sponsors:</strong> Senior owners don&apos;t engage</li>
          <li><strong>Committee bloat:</strong> Too many people involved in decisions</li>
        </ul>
      </div>

      <h2>Governance for Small Organisations</h2>
      <p>
        Small businesses and charities need governance proportionate to their size:
      </p>
      <ul>
        <li><strong>Keep it simple:</strong> Don&apos;t create bureaucracy you can&apos;t sustain</li>
        <li><strong>Board involvement:</strong> Board members may take active sponsor roles</li>
        <li><strong>Combined roles:</strong> One person may fill multiple governance functions</li>
        <li><strong>Focus on essentials:</strong> Clear authority, regular oversight, documented decisions</li>
        <li><strong>Proportionate controls:</strong> Match oversight intensity to project risk and size</li>
      </ul>

      <h3>Charity Governance in Ireland</h3>
      <p>
        Charities in Ireland must comply with the Charities Regulator&apos;s Governance Code, 
        which includes principles relevant to project governance:
      </p>
      <ul>
        <li>Clear purpose and strategic direction</li>
        <li>Sound financial management and controls</li>
        <li>Board effectiveness and accountability</li>
        <li>Transparency and public trust</li>
        <li>Risk management and compliance</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          Good governance enables rather than hinders project delivery. It provides 
          the framework within which project managers can operate with confidence, 
          knowing they have the authority to act and the support to succeed. 
          Design governance structures that are fit for purpose - comprehensive 
          enough to provide oversight but lean enough to allow agility.
        </p>
      </div>
    </TopicPageLayout>
  )
}
