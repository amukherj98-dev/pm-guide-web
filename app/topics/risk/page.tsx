import { AlertTriangle, CheckCircle2, XCircle, ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Risk Management | PM Made Practical",
  description: "Learn how to identify, assess, and mitigate project risks. A practical guide for small businesses and charities in Ireland.",
}

const videos = [
  {
    title: "Introduction to Risk Management",
    url: "https://www.youtube.com/watch?v=J4VrYKaw0AY",
    duration: "12:34",
    description: "PMI overview of risk management fundamentals"
  },
  {
    title: "Risk Assessment Matrix Tutorial",
    url: "https://www.youtube.com/watch?v=xzqdRgvEE_M",
    duration: "8:45",
    description: "How to create and use a risk matrix"
  },
  {
    title: "Monte Carlo Simulation Explained",
    url: "https://www.youtube.com/watch?v=7ESK5SaP-bc",
    duration: "15:20",
    description: "Advanced probability analysis for projects"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapter 7: Managing Risk",
    type: "book" as const,
  },
  {
    title: "A Guide to the Project Management Body of Knowledge (PMBOK)",
    author: "Project Management Institute",
    source: "6th Edition - Risk Management Knowledge Area",
    type: "guide" as const,
  },
  {
    title: "Risk Management in Projects",
    author: "APM Body of Knowledge",
    source: "Association for Project Management",
    type: "guide" as const,
    url: "https://www.apm.org.uk/resources/what-is-project-management/what-is-risk-management/",
  },
]

const relatedTopics = [
  { name: "Planning", href: "/topics/planning" },
  { name: "Implementation", href: "/topics/implementation" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
  { name: "Governance", href: "/topics/governance" },
]

const keyTakeaways = [
  "Risk management is proactive, not reactive",
  "Use a structured 4-step process: Identify, Assess, Respond, Control",
  "Not all risks are negative - opportunities exist too",
  "Contingency reserves provide financial buffers",
  "Regular monitoring prevents surprises",
]

export default function RiskManagementPage() {
  return (
    <TopicPageLayout
      title="Risk Management"
      subtitle="Managing Uncertainty"
      description="Every project faces uncertainty. Risk management helps you anticipate potential problems, assess their likelihood and impact, and develop strategies to either prevent them or minimise their effects. For small businesses and charities, where resources are limited, effective risk management can mean the difference between project success and failure."
      icon={<AlertTriangle className="h-8 w-8 text-red-600" />}
      iconBgClass="bg-red-50 border border-red-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>What is Risk Management?</h2>
      <p>
        Risk management is the systematic process of identifying, analysing, and responding to 
        project risks. It involves maximising the probability and consequences of positive events 
        (opportunities) and minimising the probability and consequences of adverse events (threats) 
        to project objectives.
      </p>
      <p>
        According to Larson & Gray in <em>Project Management: The Managerial Process</em>, 
        &quot;Risk management attempts to recognize and manage potential and unforeseen trouble spots 
        that may occur when the project is implemented.&quot;
      </p>

      <div className="not-prose my-8 rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">The Risk Management Process</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "Identify", desc: "Determine which risks might affect the project" },
            { step: "2", title: "Assess", desc: "Analyse likelihood and potential impact" },
            { step: "3", title: "Respond", desc: "Develop options and actions to address risks" },
            { step: "4", title: "Control", desc: "Monitor and implement response plans" },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/50">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {item.step}
              </span>
              <h4 className="mt-3 font-semibold text-foreground">{item.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h2>Step 1: Risk Identification</h2>
      <p>
        The first step is to generate a comprehensive list of possible risks based on the project&apos;s 
        unique characteristics. Common techniques include:
      </p>
      <ul>
        <li><strong>Brainstorming sessions</strong> with stakeholders and team members</li>
        <li><strong>Reviewing historical data</strong> from similar past projects</li>
        <li><strong>Expert interviews</strong> with people who have relevant experience</li>
        <li><strong>SWOT analysis</strong> (Strengths, Weaknesses, Opportunities, Threats)</li>
        <li><strong>Checklist analysis</strong> using templates from previous projects</li>
      </ul>
      <p>
        For small businesses and charities in Ireland, common risk categories include:
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h4 className="font-semibold text-red-800 flex items-center gap-2">
            <XCircle className="h-5 w-5" />
            Common Threats
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-red-700">
            <li>Funding uncertainties or grant delays</li>
            <li>Volunteer availability fluctuations</li>
            <li>Regulatory compliance requirements</li>
            <li>Technology failures or security breaches</li>
            <li>Key person dependencies</li>
            <li>Scope creep from stakeholder requests</li>
          </ul>
        </div>
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <h4 className="font-semibold text-green-800 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Potential Opportunities
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-green-700">
            <li>Additional funding sources becoming available</li>
            <li>Partnership possibilities with other organisations</li>
            <li>Technology improvements that reduce costs</li>
            <li>Media coverage and visibility</li>
            <li>Skills development for team members</li>
            <li>Reusable outputs for future projects</li>
          </ul>
        </div>
      </div>

      <h2>Step 2: Risk Assessment</h2>
      <p>
        Once risks are identified, they must be assessed to prioritise response efforts. The most 
        common approach uses a <strong>probability-impact matrix</strong> that considers:
      </p>
      <ul>
        <li><strong>Probability:</strong> How likely is this risk to occur? (Low, Medium, High)</li>
        <li><strong>Impact:</strong> If it occurs, how severely will it affect the project? (Low, Medium, High)</li>
      </ul>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-secondary">
              <th className="border border-border p-3 text-left font-semibold">Probability / Impact</th>
              <th className="border border-border p-3 text-center font-semibold">Low Impact</th>
              <th className="border border-border p-3 text-center font-semibold">Medium Impact</th>
              <th className="border border-border p-3 text-center font-semibold">High Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-medium bg-secondary/50">High Probability</td>
              <td className="border border-border p-3 text-center bg-amber-100 text-amber-800">Medium</td>
              <td className="border border-border p-3 text-center bg-red-100 text-red-800">High</td>
              <td className="border border-border p-3 text-center bg-red-200 text-red-900 font-semibold">Critical</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium bg-secondary/50">Medium Probability</td>
              <td className="border border-border p-3 text-center bg-green-100 text-green-800">Low</td>
              <td className="border border-border p-3 text-center bg-amber-100 text-amber-800">Medium</td>
              <td className="border border-border p-3 text-center bg-red-100 text-red-800">High</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium bg-secondary/50">Low Probability</td>
              <td className="border border-border p-3 text-center bg-green-50 text-green-700">Very Low</td>
              <td className="border border-border p-3 text-center bg-green-100 text-green-800">Low</td>
              <td className="border border-border p-3 text-center bg-amber-100 text-amber-800">Medium</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Step 3: Risk Response Development</h2>
      <p>
        For each significant risk, you need to develop a response strategy. The PMBOK Guide 
        identifies several standard response strategies:
      </p>

      <h3>For Threats (Negative Risks)</h3>
      <div className="not-prose my-6 space-y-4">
        {[
          { 
            icon: ArrowDownRight,
            title: "Mitigate", 
            desc: "Reduce the probability or impact of the risk",
            example: "Add quality checks to reduce the chance of errors"
          },
          { 
            icon: ArrowRight,
            title: "Avoid", 
            desc: "Eliminate the threat entirely by changing plans",
            example: "Choose a proven technology instead of experimental one"
          },
          { 
            icon: ArrowUpRight,
            title: "Transfer", 
            desc: "Shift the impact to a third party",
            example: "Purchase insurance or hire a specialist contractor"
          },
          { 
            icon: CheckCircle2,
            title: "Accept", 
            desc: "Acknowledge the risk but take no proactive action",
            example: "Budget contingency funds for potential cost overruns"
          },
        ].map((strategy) => (
          <div key={strategy.title} className="flex gap-4 rounded-xl border border-border bg-card p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <strategy.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{strategy.title}</h4>
              <p className="text-sm text-muted-foreground">{strategy.desc}</p>
              <p className="mt-1 text-sm italic text-muted-foreground">Example: {strategy.example}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>For Opportunities (Positive Risks)</h3>
      <ul>
        <li><strong>Exploit:</strong> Ensure the opportunity definitely happens</li>
        <li><strong>Enhance:</strong> Increase the probability or positive impact</li>
        <li><strong>Share:</strong> Partner with another party to capture benefits</li>
        <li><strong>Accept:</strong> Welcome the opportunity if it occurs, but don&apos;t actively pursue it</li>
      </ul>

      <h2>Step 4: Risk Response Control</h2>
      <p>
        Risk management is not a one-time activity. Throughout the project, you must:
      </p>
      <ul>
        <li>Monitor identified risks for any changes in status</li>
        <li>Identify new risks as they emerge</li>
        <li>Evaluate the effectiveness of risk responses</li>
        <li>Update the risk register regularly</li>
        <li>Communicate risk status to stakeholders</li>
      </ul>

      <h2>Contingency Planning</h2>
      <p>
        For significant risks, develop <strong>contingency plans</strong> that can be activated 
        if the risk event occurs. Also establish <strong>trigger conditions</strong> that signal 
        when to implement the contingency plan.
      </p>

      <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">Contingency Reserves</h3>
        <p className="text-amber-700 mb-4">
          Budget and schedule reserves provide a buffer for responding to risks:
        </p>
        <ul className="space-y-2 text-amber-700">
          <li className="flex gap-2">
            <span className="font-semibold">Contingency Reserves:</span>
            <span>Funds allocated for identified risks (controlled by project manager)</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold">Management Reserves:</span>
            <span>Additional funds for unknown risks (controlled by senior management)</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold">Time Buffers:</span>
            <span>Extra time added to schedule to absorb delays</span>
          </li>
        </ul>
        <p className="mt-4 text-sm text-amber-600">
          A common rule of thumb is to allocate 5-15% of the total budget as contingency, 
          depending on project complexity and uncertainty.
        </p>
      </div>

      <h2>Practical Tips for Small Organisations</h2>
      <ul>
        <li>
          <strong>Start simple:</strong> You don&apos;t need complex tools. A basic spreadsheet 
          risk register with columns for description, probability, impact, response, and owner works well.
        </li>
        <li>
          <strong>Involve the team:</strong> Those doing the work often have the best insights 
          into what could go wrong.
        </li>
        <li>
          <strong>Review regularly:</strong> Set a recurring calendar item to review risks at 
          least monthly.
        </li>
        <li>
          <strong>Document lessons learned:</strong> After the project, record what risks 
          materialised and how effective your responses were.
        </li>
        <li>
          <strong>Be honest:</strong> Don&apos;t minimise risks to make the project look better. 
          Transparency builds trust with stakeholders.
        </li>
      </ul>

      <h2>The ECCSR Connection</h2>
      <p>
        Risk management connects directly to the <strong>ECCSR framework</strong> (Ethics, 
        Community, Collaboration, Sustainability, Resilience). Consider:
      </p>
      <ul>
        <li><strong>Ethics:</strong> Are there reputational risks from cutting corners?</li>
        <li><strong>Community:</strong> What risks do stakeholders face from project activities?</li>
        <li><strong>Collaboration:</strong> How do partnerships affect risk exposure?</li>
        <li><strong>Sustainability:</strong> Are there environmental or social risks to address?</li>
        <li><strong>Resilience:</strong> Will risk responses strengthen or weaken long-term capability?</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          The goal of risk management is not to eliminate all risks - that&apos;s impossible. 
          The goal is to make informed decisions about which risks to take, which to avoid, 
          and how to be prepared for those you accept. For small businesses and charities, 
          this proactive approach protects limited resources and increases the chances of 
          achieving your mission.
        </p>
      </div>
    </TopicPageLayout>
  )
}
