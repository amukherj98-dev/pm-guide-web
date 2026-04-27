import { Leaf, Globe, Users, TrendingUp, Recycle, Heart, Target } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Sustainability in Projects | PM Made Practical",
  description: "Learn how to incorporate environmental and social sustainability into project planning and delivery. Includes the UN SDGs and triple bottom line approach.",
}

const videos = [
  {
    title: "UN Sustainable Development Goals Overview",
    url: "https://www.youtube.com/watch?v=0XTBYMfZyrM",
    duration: "8:45",
    description: "Understanding the 17 SDGs"
  },
  {
    title: "Triple Bottom Line Explained",
    url: "https://www.youtube.com/watch?v=2f5m-jBf81Q",
    duration: "10:30",
    description: "People, Planet, Profit approach"
  },
  {
    title: "Sustainable Project Management",
    url: "https://www.youtube.com/watch?v=JbL6h0WxsRk",
    duration: "14:20",
    description: "Integrating sustainability throughout the lifecycle"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Triple Bottom Line section",
    type: "book" as const,
  },
  {
    title: "UN Sustainable Development Goals",
    author: "United Nations",
    source: "The 17 global goals",
    type: "guide" as const,
    url: "https://sdgs.un.org/goals",
  },
  {
    title: "PRiSM Sustainability Methodology",
    author: "GPM Global",
    source: "Projects integrating sustainable methods",
    type: "guide" as const,
  },
]

const relatedTopics = [
  { name: "Ethics", href: "/topics/ethics" },
  { name: "Governance", href: "/topics/governance" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
  { name: "Strategy", href: "/topics/strategy" },
]

const keyTakeaways = [
  "Sustainability goes beyond environmental concerns",
  "The triple bottom line: People, Planet, Profit",
  "Consider impacts throughout the project lifecycle",
  "Align projects with UN Sustainable Development Goals",
  "Sustainability creates long-term value",
]

export default function SustainabilityPage() {
  return (
    <TopicPageLayout
      title="Sustainability in Projects"
      subtitle="Building for the Future"
      description="Sustainability means meeting present needs without compromising the ability of future generations to meet their own needs. In project management, this means considering environmental, social, and economic impacts throughout the project lifecycle - not just delivering outputs, but creating lasting positive outcomes."
      icon={<Leaf className="h-8 w-8 text-green-600" />}
      iconBgClass="bg-green-50 border border-green-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>The Triple Bottom Line</h2>
      <p>
        As Larson & Gray note, modern project management increasingly embraces 
        the &quot;triple bottom line&quot; - measuring success not just in financial terms, 
        but across three dimensions:
      </p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center">
          <Globe className="h-10 w-10 mx-auto text-green-600 mb-3" />
          <h4 className="font-semibold text-green-800">Planet</h4>
          <p className="text-sm text-green-700 mt-2">
            Environmental impact: resources consumed, emissions, waste, biodiversity
          </p>
        </div>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-center">
          <Users className="h-10 w-10 mx-auto text-blue-600 mb-3" />
          <h4 className="font-semibold text-blue-800">People</h4>
          <p className="text-sm text-blue-700 mt-2">
            Social impact: workers, communities, health, equity, human rights
          </p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
          <TrendingUp className="h-10 w-10 mx-auto text-amber-600 mb-3" />
          <h4 className="font-semibold text-amber-800">Profit</h4>
          <p className="text-sm text-amber-700 mt-2">
            Economic impact: financial returns, local economy, sustainable growth
          </p>
        </div>
      </div>

      <p>
        Truly successful projects create positive outcomes across all three dimensions, 
        not just short-term financial returns.
      </p>

      <h2>UN Sustainable Development Goals</h2>
      <p>
        The Company Project Module references the <strong>17 UN Sustainable Development 
        Goals</strong> as a framework for responsible project management. These goals 
        provide a shared blueprint for peace and prosperity:
      </p>

      <div className="not-prose my-8 grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {[
          { num: 1, name: "No Poverty", color: "bg-red-600" },
          { num: 2, name: "Zero Hunger", color: "bg-amber-500" },
          { num: 3, name: "Good Health", color: "bg-green-600" },
          { num: 4, name: "Quality Education", color: "bg-red-700" },
          { num: 5, name: "Gender Equality", color: "bg-orange-600" },
          { num: 6, name: "Clean Water", color: "bg-cyan-500" },
          { num: 7, name: "Clean Energy", color: "bg-yellow-500" },
          { num: 8, name: "Decent Work", color: "bg-rose-700" },
          { num: 9, name: "Industry & Innovation", color: "bg-orange-500" },
          { num: 10, name: "Reduced Inequalities", color: "bg-pink-600" },
          { num: 11, name: "Sustainable Cities", color: "bg-amber-600" },
          { num: 12, name: "Responsible Consumption", color: "bg-amber-700" },
          { num: 13, name: "Climate Action", color: "bg-green-700" },
          { num: 14, name: "Life Below Water", color: "bg-blue-500" },
          { num: 15, name: "Life on Land", color: "bg-lime-600" },
          { num: 16, name: "Peace & Justice", color: "bg-blue-700" },
          { num: 17, name: "Partnerships", color: "bg-blue-800" },
        ].map((goal) => (
          <div key={goal.num} className={`${goal.color} text-white p-3 rounded-lg`}>
            <span className="text-lg font-bold">{goal.num}</span>
            <p className="text-xs mt-1 leading-tight">{goal.name}</p>
          </div>
        ))}
      </div>

      <p>
        When planning projects, consider which SDGs your work might contribute to - 
        or potentially harm - and design accordingly.
      </p>

      <h2>The ECCSR Framework</h2>
      <p>
        The ECCSR model, developed by Joe Houghton for project teams, provides a 
        focus for aligning projects with societal values:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            letter: "E",
            title: "Ethics",
            description: "Acting with integrity, honesty, and respect for all stakeholders"
          },
          {
            letter: "C",
            title: "Community",
            description: "Considering impacts on local and broader communities affected by the project"
          },
          {
            letter: "C",
            title: "Collaboration",
            description: "Working effectively with partners, stakeholders, and team members"
          },
          {
            letter: "S",
            title: "Sustainability",
            description: "Ensuring projects support environmental and social wellbeing"
          },
          {
            letter: "R",
            title: "Resilience",
            description: "Building capacity to adapt and thrive despite challenges"
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              {item.letter}
            </span>
            <div>
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p>
        When creating project plans, bearing these aspects in mind ensures projects 
        can stand up to external scrutiny and create positive change.
      </p>

      <h2>Sustainable Project Practices</h2>
      <p>
        Practical ways to integrate sustainability into project management:
      </p>

      <h3>During Planning</h3>
      <ul>
        <li>Assess environmental and social impacts alongside financial feasibility</li>
        <li>Consider the full lifecycle, including end-of-life disposal</li>
        <li>Engage affected communities in requirements gathering</li>
        <li>Set sustainability targets alongside traditional success criteria</li>
        <li>Include sustainability in risk assessment</li>
      </ul>

      <h3>During Execution</h3>
      <ul>
        <li>Choose suppliers with good sustainability practices</li>
        <li>Minimise waste, energy use, and carbon emissions</li>
        <li>Create inclusive, fair working conditions</li>
        <li>Monitor sustainability metrics alongside cost and schedule</li>
        <li>Report transparently on sustainability performance</li>
      </ul>

      <h3>At Closure</h3>
      <ul>
        <li>Document lessons learned about sustainability</li>
        <li>Measure actual sustainability outcomes against plans</li>
        <li>Plan for sustainable operation and eventual decommissioning</li>
        <li>Share good practices with other projects</li>
      </ul>

      <div className="not-prose my-8 rounded-2xl border border-green-200 bg-green-50 p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
          <Recycle className="h-5 w-5" />
          Circular Economy Thinking
        </h3>
        <p className="text-green-700 mb-4">
          Move from &quot;take-make-dispose&quot; to circular approaches:
        </p>
        <ul className="space-y-2 text-sm text-green-700">
          <li><strong>Reduce:</strong> Minimise materials and energy used</li>
          <li><strong>Reuse:</strong> Design for multiple uses or second life</li>
          <li><strong>Recycle:</strong> Enable materials to be recovered</li>
          <li><strong>Recover:</strong> Capture value from waste streams</li>
        </ul>
      </div>

      <h2>Business Case for Sustainability</h2>
      <p>
        Sustainability isn&apos;t just about ethics - it makes business sense:
      </p>
      <ul>
        <li><strong>Cost savings:</strong> Energy efficiency, waste reduction</li>
        <li><strong>Risk reduction:</strong> Regulatory compliance, reputation protection</li>
        <li><strong>Access to funding:</strong> Many funders require sustainability credentials</li>
        <li><strong>Talent attraction:</strong> People want to work for responsible organisations</li>
        <li><strong>Customer preference:</strong> Increasingly, customers choose sustainable options</li>
        <li><strong>Long-term viability:</strong> Sustainable practices ensure continued operation</li>
      </ul>

      <h2>Sustainability for Small Organisations</h2>
      <p>
        Small businesses and charities can integrate sustainability proportionately:
      </p>
      <ul>
        <li><strong>Start where you are:</strong> You don&apos;t need elaborate systems - begin with simple practices</li>
        <li><strong>Focus on material impacts:</strong> Prioritise the sustainability issues most relevant to your work</li>
        <li><strong>Leverage your flexibility:</strong> Small organisations can adapt quickly</li>
        <li><strong>Collaborate:</strong> Partner with others to achieve shared sustainability goals</li>
        <li><strong>Tell your story:</strong> Communicate your sustainability efforts to stakeholders</li>
      </ul>

      <h3>For Charities</h3>
      <p>
        Charities have a particular responsibility to model sustainable practices, 
        as their missions often align directly with social and environmental goals. 
        Donors increasingly expect charities to operate sustainably.
      </p>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          Sustainability is not a constraint on project success - it&apos;s a dimension of 
          success. Projects that create value while protecting the environment and 
          benefiting communities are more likely to achieve lasting positive outcomes. 
          As project managers, we have both the opportunity and responsibility to 
          build sustainability into everything we do.
        </p>
      </div>
    </TopicPageLayout>
  )
}
