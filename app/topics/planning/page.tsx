import { ClipboardList, Layers, Calendar, DollarSign, Target, ArrowRight, AlertTriangle } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Project Planning | PM Made Practical",
  description: "Learn how to create realistic project plans, work breakdown structures, schedules, and budgets. Practical planning techniques for small organisations.",
}

const videos = [
  {
    title: "Creating a Work Breakdown Structure",
    url: "https://www.youtube.com/watch?v=LXQTJ_M9J08",
    duration: "12:15",
    description: "Step-by-step WBS development"
  },
  {
    title: "Project Network Diagrams Explained",
    url: "https://www.youtube.com/watch?v=4oDLMs11Exs",
    duration: "15:40",
    description: "Activity sequences and critical path"
  },
  {
    title: "Project Estimating Techniques",
    url: "https://www.youtube.com/watch?v=jiXR22M8LmU",
    duration: "11:20",
    description: "How to estimate time and cost accurately"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapters 4-6: Defining the Project, Estimating, Scheduling",
    type: "book" as const,
  },
  {
    title: "PMBOK Guide",
    author: "Project Management Institute",
    source: "Planning Process Group",
    type: "guide" as const,
  },
  {
    title: "Making Things Happen",
    author: "Scott Berkun",
    source: "Practical project planning approaches",
    type: "book" as const,
  },
]

const relatedTopics = [
  { name: "Implementation", href: "/topics/implementation" },
  { name: "Risk Management", href: "/topics/risk" },
  { name: "Strategy", href: "/topics/strategy" },
  { name: "Methodologies", href: "/topics/methodologies" },
]

const keyTakeaways = [
  "Start with clear scope definition",
  "Break work into manageable chunks (WBS)",
  "Estimate time and cost carefully",
  "Identify the critical path",
  "Build in contingency for uncertainty",
]

export default function PlanningPage() {
  return (
    <TopicPageLayout
      title="Project Planning"
      subtitle="Setting Up for Success"
      description="Good planning is the foundation of project success. It involves defining what needs to be done, how it will be accomplished, when it will happen, and what resources are required. For small businesses and charities, where every euro and hour counts, effective planning prevents waste and increases the likelihood of achieving your goals."
      icon={<ClipboardList className="h-8 w-8 text-amber-600" />}
      iconBgClass="bg-amber-50 border border-amber-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>The Planning Process</h2>
      <p>
        Project planning transforms the project concept into a detailed roadmap for 
        execution. The key outputs of planning include:
      </p>
      <ul>
        <li><strong>Scope statement:</strong> What the project will and won&apos;t deliver</li>
        <li><strong>Work Breakdown Structure (WBS):</strong> Hierarchical decomposition of work</li>
        <li><strong>Schedule:</strong> When activities will occur</li>
        <li><strong>Budget:</strong> What resources will cost</li>
        <li><strong>Risk plan:</strong> How uncertainties will be managed</li>
        <li><strong>Communication plan:</strong> How information will flow</li>
      </ul>

      <h2>Step 1: Define the Project Scope</h2>
      <p>
        Before you can plan the work, you must define what the project will deliver. 
        A scope statement typically includes:
      </p>

      <div className="not-prose my-8 rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Scope Statement Elements</h3>
        <div className="space-y-4">
          {[
            { item: "Project objectives", desc: "What outcomes are we trying to achieve?" },
            { item: "Deliverables", desc: "What tangible outputs will we produce?" },
            { item: "Requirements", desc: "What specifications must deliverables meet?" },
            { item: "Boundaries", desc: "What is explicitly NOT included?" },
            { item: "Success criteria", desc: "How will we know if we succeeded?" },
            { item: "Constraints", desc: "What limitations must we work within?" },
            { item: "Assumptions", desc: "What are we taking for granted?" },
          ].map((element) => (
            <div key={element.item} className="flex gap-4">
              <Target className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <span className="font-medium text-foreground">{element.item}:</span>
                <span className="text-muted-foreground ml-2">{element.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>Setting Project Priorities</h3>
      <p>
        Every project involves trade-offs between time, cost, and scope (sometimes 
        called the &quot;triple constraint&quot;). Understanding which is most important helps 
        guide decisions throughout the project:
      </p>
      <ul>
        <li><strong>Constrain:</strong> Which factor is fixed and cannot be changed?</li>
        <li><strong>Enhance:</strong> Which factor should be optimised if possible?</li>
        <li><strong>Accept:</strong> Which factor has flexibility to absorb problems?</li>
      </ul>

      <h2>Step 2: Create the Work Breakdown Structure</h2>
      <p>
        The WBS is a hierarchical breakdown of the total work required to complete the 
        project. It breaks the project into progressively smaller, more manageable pieces.
      </p>

      <div className="not-prose my-8">
        <div className="rounded-xl border border-border bg-card p-6">
          <h4 className="font-semibold text-foreground mb-4">Example WBS Structure</h4>
          <div className="space-y-2 text-sm">
            <div className="font-semibold text-primary">1.0 Website Redesign Project</div>
            <div className="ml-4">
              <div className="font-medium text-foreground">1.1 Planning</div>
              <div className="ml-4 text-muted-foreground">
                <div>1.1.1 Requirements gathering</div>
                <div>1.1.2 Technical assessment</div>
                <div>1.1.3 Content audit</div>
              </div>
            </div>
            <div className="ml-4">
              <div className="font-medium text-foreground">1.2 Design</div>
              <div className="ml-4 text-muted-foreground">
                <div>1.2.1 Wireframes</div>
                <div>1.2.2 Visual design</div>
                <div>1.2.3 Prototype</div>
              </div>
            </div>
            <div className="ml-4">
              <div className="font-medium text-foreground">1.3 Development</div>
              <div className="ml-4 text-muted-foreground">
                <div>1.3.1 Front-end build</div>
                <div>1.3.2 Back-end integration</div>
                <div>1.3.3 Content migration</div>
              </div>
            </div>
            <div className="ml-4">
              <div className="font-medium text-foreground">1.4 Launch</div>
              <div className="ml-4 text-muted-foreground">
                <div>1.4.1 Testing</div>
                <div>1.4.2 Deployment</div>
                <div>1.4.3 Training</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>WBS Best Practices</h3>
      <ul>
        <li><strong>100% rule:</strong> The WBS must capture ALL work required</li>
        <li><strong>Deliverable-focused:</strong> Define outcomes, not activities</li>
        <li><strong>Appropriate detail:</strong> Break down to the level you can estimate and control</li>
        <li><strong>Team involvement:</strong> Those doing the work should help define it</li>
      </ul>

      <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Level of Detail Rule
        </h3>
        <p className="text-amber-700">
          A common rule of thumb: no work package should be longer than <strong>5-10 
          working days</strong>. Tasks longer than this are harder to track and more 
          likely to slip without early detection. Breaking large tasks into smaller 
          chunks enables better control.
        </p>
      </div>

      <h2>Step 3: Estimate Time and Costs</h2>
      <p>
        With the WBS complete, estimate the time and cost for each work package. 
        Common estimating approaches include:
      </p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3">Top-Down Estimating</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Start with the total project and divide among components based on 
            experience or ratios from similar projects.
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Best for:</strong> Early estimates, conceptual stages
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3">Bottom-Up Estimating</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Estimate each work package individually and aggregate upward 
            to get the total.
          </p>
          <p className="text-xs text-muted-foreground">
            <strong>Best for:</strong> Detailed planning, when WBS is complete
          </p>
        </div>
      </div>

      <h3>Types of Costs</h3>
      <ul>
        <li><strong>Direct costs:</strong> Labour, materials, equipment directly used on project work</li>
        <li><strong>Direct overhead:</strong> Project-specific costs like PM salary, team space</li>
        <li><strong>G&A overhead:</strong> Organisation-wide costs allocated to projects</li>
      </ul>

      <h3>Improving Estimate Accuracy</h3>
      <p>
        Estimates are often wrong because:
      </p>
      <ul>
        <li>Interaction costs between tasks are hidden</li>
        <li>Normal conditions don&apos;t apply (resource shortages, complications)</li>
        <li>Things go wrong (design flaws, weather, accidents)</li>
        <li>Scope changes during the project</li>
        <li>People are naturally optimistic</li>
        <li>Sometimes people deliberately underestimate to get approval</li>
      </ul>
      <p>
        Build an <strong>estimating database</strong> over time - track your estimates 
        versus actuals to improve future accuracy.
      </p>

      <h2>Step 4: Develop the Schedule</h2>
      <p>
        Convert your WBS and estimates into a project schedule by:
      </p>
      <ol>
        <li>Identifying dependencies between activities</li>
        <li>Sequencing activities into a project network</li>
        <li>Calculating the critical path (longest sequence)</li>
        <li>Assigning calendar dates</li>
      </ol>

      <h3>The Critical Path</h3>
      <p>
        The critical path is the longest sequence of dependent activities. It determines 
        the minimum project duration. Activities on the critical path have zero &quot;slack&quot; - 
        any delay will delay the entire project.
      </p>

      <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h4 className="font-semibold text-foreground mb-3">Understanding Float/Slack</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
            <span><strong>Total slack:</strong> How much an activity can slip without delaying the project</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
            <span><strong>Free slack:</strong> How much an activity can slip without delaying any successor</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
            <span><strong>Critical activities:</strong> Zero slack - must be monitored closely</span>
          </li>
        </ul>
      </div>

      <h2>Step 5: Create the Budget</h2>
      <p>
        The project budget is a time-phased spending plan. It shows when costs will be 
        incurred and establishes the baseline against which actual spending will be tracked.
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <DollarSign className="h-8 w-8 mx-auto text-primary mb-3" />
          <h4 className="font-semibold text-foreground">Direct Costs</h4>
          <p className="text-sm text-muted-foreground mt-2">Labour, materials, equipment</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <Layers className="h-8 w-8 mx-auto text-primary mb-3" />
          <h4 className="font-semibold text-foreground">Overhead</h4>
          <p className="text-sm text-muted-foreground mt-2">Project and organisation costs</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <AlertTriangle className="h-8 w-8 mx-auto text-amber-500 mb-3" />
          <h4 className="font-semibold text-foreground">Contingency</h4>
          <p className="text-sm text-muted-foreground mt-2">Buffer for risks (5-15%)</p>
        </div>
      </div>

      <h2>Practical Planning Tips</h2>
      <ul>
        <li><strong>Start early:</strong> Begin planning as soon as the project is authorised</li>
        <li><strong>Involve the team:</strong> Those doing the work provide better estimates</li>
        <li><strong>Plan in iterations:</strong> Start high-level, add detail as you learn more</li>
        <li><strong>Document assumptions:</strong> Record what you&apos;re taking for granted</li>
        <li><strong>Build in buffers:</strong> Things take longer than expected</li>
        <li><strong>Get sign-off:</strong> Ensure stakeholders agree before execution begins</li>
      </ul>

      <h2>Planning for Small Organisations</h2>
      <p>
        Small businesses and charities don&apos;t need complex planning tools:
      </p>
      <ul>
        <li><strong>Simple tools work:</strong> Spreadsheets and basic Gantt charts are often sufficient</li>
        <li><strong>Focus on essentials:</strong> A clear scope, realistic estimates, and key milestones</li>
        <li><strong>Keep it visible:</strong> Post the plan where everyone can see it</li>
        <li><strong>Review regularly:</strong> Plans should be living documents, not filed and forgotten</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          &quot;Plans are worthless, but planning is everything.&quot; - Dwight D. Eisenhower. 
          The value of planning is not just the document you create, but the thinking 
          process you go through. A good plan helps everyone understand what needs to 
          happen and creates a baseline for tracking progress and making adjustments.
        </p>
      </div>
    </TopicPageLayout>
  )
}
