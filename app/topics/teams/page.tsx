import { Users, Target, MessageSquare, Calendar, Award, Lightbulb, ArrowRight } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Managing Project Teams | PM Made Practical",
  description: "Build high-performing project teams. Learn about team development, effective meetings, and creating a shared vision for success.",
}

const videos = [
  {
    title: "Tuckman&apos;s Stages of Team Development",
    url: "https://www.youtube.com/watch?v=hb8I2RK7BzY",
    duration: "8:45",
    description: "Forming, Storming, Norming, Performing"
  },
  {
    title: "Running Effective Project Meetings",
    url: "https://www.youtube.com/watch?v=KZGz6mGfyzo",
    duration: "11:30",
    description: "Tips for productive team meetings"
  },
  {
    title: "Building Psychological Safety in Teams",
    url: "https://www.youtube.com/watch?v=LhoLuui9gX8",
    duration: "15:12",
    description: "Creating an environment where people can take risks"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapter 11: Managing Project Teams",
    type: "book" as const,
  },
  {
    title: "The Five Dysfunctions of a Team",
    author: "Patrick Lencioni",
    source: "A leadership fable about team dynamics",
    type: "book" as const,
  },
  {
    title: "Team of Teams",
    author: "General Stanley McChrystal",
    source: "New rules of engagement for a complex world",
    type: "book" as const,
  },
]

const relatedTopics = [
  { name: "Leadership", href: "/topics/leadership" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
  { name: "Implementation", href: "/topics/implementation" },
  { name: "Methodologies", href: "/topics/methodologies" },
]

const keyTakeaways = [
  "Teams go through predictable development stages",
  "The kick-off meeting sets the tone for team culture",
  "Ground rules prevent misunderstandings later",
  "A shared vision inspires discretionary effort",
  "Celebrate milestones to build team identity",
]

export default function TeamsPage() {
  return (
    <TopicPageLayout
      title="Managing Project Teams"
      subtitle="Building High-Performance Teams"
      description="Projects are delivered by people, not processes. Building and managing an effective project team is one of the most important skills a project manager can develop. This guide covers how to recruit the right people, develop team cohesion, run effective meetings, and create the conditions for high performance."
      icon={<Users className="h-8 w-8 text-sky-600" />}
      iconBgClass="bg-sky-50 border border-sky-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>Team Development Stages</h2>
      <p>
        Research by Bruce Tuckman identified four stages that teams typically go through 
        as they develop. Understanding these stages helps project managers support their 
        teams appropriately at each phase.
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            stage: "1. Forming",
            color: "bg-blue-50 border-blue-200 text-blue-800",
            description: "Team members get acquainted and establish initial relationships. Excitement mixed with anxiety about the project.",
            manager_role: "Provide clear direction, establish structure, and help people get to know each other."
          },
          {
            stage: "2. Storming",
            color: "bg-red-50 border-red-200 text-red-800",
            description: "Conflicts emerge as people assert themselves. Competition for roles and disagreements about approaches.",
            manager_role: "Facilitate conflict resolution, maintain focus on goals, and model constructive behaviour."
          },
          {
            stage: "3. Norming",
            color: "bg-amber-50 border-amber-200 text-amber-800",
            description: "Team develops shared expectations and working relationships. Trust begins to build.",
            manager_role: "Reinforce positive behaviours, delegate more responsibility, and strengthen team identity."
          },
          {
            stage: "4. Performing",
            color: "bg-green-50 border-green-200 text-green-800",
            description: "Team works effectively together. High trust, open communication, and strong commitment to goals.",
            manager_role: "Get out of the way, remove obstacles, and celebrate achievements."
          },
        ].map((item) => (
          <div key={item.stage} className={`rounded-xl border p-5 ${item.color}`}>
            <h4 className="font-semibold mb-2">{item.stage}</h4>
            <p className="text-sm mb-3">{item.description}</p>
            <p className="text-xs"><strong>Your role:</strong> {item.manager_role}</p>
          </div>
        ))}
      </div>

      <p>
        Note that teams may cycle back through these stages when membership changes, 
        when the project shifts direction, or when major conflicts arise.
      </p>

      <h2>Recruiting Team Members</h2>
      <p>
        When you have input into team composition, look for a balance of skills and 
        attributes. Beyond technical expertise, consider:
      </p>
      <ul>
        <li><strong>Problem-solving ability:</strong> Can they figure things out independently?</li>
        <li><strong>Availability:</strong> Are they overcommitted to other work?</li>
        <li><strong>Credibility:</strong> Will their reputation strengthen the project?</li>
        <li><strong>Political connections:</strong> Do they have relationships with key stakeholders?</li>
        <li><strong>Ambition and initiative:</strong> Will they go beyond the minimum?</li>
        <li><strong>Diversity of perspective:</strong> Will they bring fresh thinking?</li>
      </ul>

      <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">Research Insight</h3>
        <p className="text-amber-700">
          Studies suggest that teams who have worked together before may be more efficient, 
          but teams with some new members tend to be more innovative. On challenging, 
          breakthrough projects, consider bringing in experts who haven&apos;t collaborated 
          with the core team before (Skilton & Dooley, 2010).
        </p>
      </div>

      <h2>The First Team Meeting</h2>
      <p>
        The project kick-off meeting is critical. As one veteran project manager put it:
      </p>

      <blockquote className="not-prose my-8 border-l-4 border-primary pl-6 italic text-muted-foreground">
        &quot;The first team meeting sets the tone for how the team will work together. 
        If it is disorganised, or becomes bogged down with little sense of closure, 
        then this can often become a self-fulfilling prophecy for subsequent group work.&quot;
      </blockquote>

      <p>A successful kick-off meeting achieves three objectives:</p>
      <ol>
        <li><strong>Project overview:</strong> Scope, objectives, schedule, methods, and procedures</li>
        <li><strong>Team introduction:</strong> Who is everyone? How will we work together?</li>
        <li><strong>Model behaviour:</strong> Demonstrate the meeting style and standards expected going forward</li>
      </ol>

      <h2>Establishing Ground Rules</h2>
      <p>
        Early in the project, establish clear operational procedures. These create shared 
        expectations and prevent misunderstandings later:
      </p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Planning Decisions
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>How will plans be developed?</li>
            <li>What software tools will we use?</li>
            <li>Who needs to be informed of decisions?</li>
            <li>What are the deliverables and sign-offs?</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Tracking Decisions
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>How will progress be assessed?</li>
            <li>How often will team members report status?</li>
            <li>Who generates and distributes reports?</li>
            <li>At what level of detail will we track?</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Meeting Decisions
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Where and when will meetings be held?</li>
            <li>Who will run them?</li>
            <li>How will agendas be produced?</li>
            <li>How will decisions be recorded?</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-primary" />
            Change Decisions
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>How will changes be proposed and approved?</li>
            <li>Who has change approval authority?</li>
            <li>How will changes be documented?</li>
            <li>How will we assess change impact?</li>
          </ul>
        </div>
      </div>

      <h2>Team Norms</h2>
      <p>
        Beyond procedures, high-performing teams develop behavioural norms that guide 
        how members interact. Research has identified norms associated with effective teams:
      </p>
      <ul>
        <li><strong>Confidentiality:</strong> What&apos;s discussed in the team stays in the team</li>
        <li><strong>No surprises:</strong> It&apos;s okay to have problems, but tell others immediately</li>
        <li><strong>Zero tolerance for bullying:</strong> No forcing your way through issues</li>
        <li><strong>Commit to decisions:</strong> Once decided, move forward regardless of personal views</li>
        <li><strong>Respect outsiders:</strong> Don&apos;t flaunt your position on the team</li>
        <li><strong>Balance work and fun:</strong> Hard work doesn&apos;t preclude enjoyment</li>
      </ul>

      <h3>Team Charters</h3>
      <p>
        Some teams formalise their norms in a <strong>team charter</strong> that goes beyond 
        the project scope statement. When team members collaboratively create and sign the 
        charter, it increases commitment to the principles it contains. However, the charter 
        must be a living document - periodically reviewed and enforced - or it becomes meaningless.
      </p>

      <h2>Creating Team Identity</h2>
      <p>
        For teams where members work part-time or are spread across locations, creating a 
        sense of &quot;team-ness&quot; can be challenging. Strategies include:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Calendar,
            title: "Regular Meetings",
            description: "Periodic gatherings where members see they&apos;re part of something larger than their individual work"
          },
          {
            icon: Users,
            title: "Co-location or War Rooms",
            description: "Physical space where team members can work together and project information is displayed"
          },
          {
            icon: Award,
            title: "Team Names and Logos",
            description: "Creating an identity like &apos;The A-Team&apos; or &apos;Project Phoenix&apos; with associated branding"
          },
          {
            icon: Lightbulb,
            title: "Early Collaboration",
            description: "Working on something together early in the project reinforces the sense of team"
          },
          {
            icon: Award,
            title: "Team Rituals",
            description: "Special practices that mark milestones, such as cutting stripes off ties after each achievement"
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Creating a Shared Vision</h2>
      <p>
        A project vision is an image team members hold in common about how the project 
        will look upon completion, how they will work together, and how customers will 
        accept the results. Unlike formal scope statements, visions capture the emotional 
        and aspirational aspects of the work.
      </p>
      <p>
        A good vision:
      </p>
      <ul>
        <li><strong>Inspires:</strong> Motivates people to give discretionary effort</li>
        <li><strong>Unites:</strong> Brings diverse people together around a common aspiration</li>
        <li><strong>Guides:</strong> Helps members make judgment calls when rules don&apos;t cover everything</li>
        <li><strong>Sustains:</strong> Encourages commitment to the long term over expedient shortcuts</li>
      </ul>

      <blockquote className="not-prose my-8 border-l-4 border-primary pl-6 italic text-muted-foreground">
        &quot;In the presence of greatness, pettiness disappears.&quot;
        <footer className="mt-2 text-sm font-medium text-foreground not-italic">
          — Robert Fritz, Psychologist
        </footer>
      </blockquote>

      <h2>Running Effective Meetings</h2>
      <p>
        Meetings are often considered unproductive, but they don&apos;t have to be. 
        Guidelines for effective project meetings:
      </p>
      <ul>
        <li>Start on time, regardless of who is present</li>
        <li>Distribute an agenda before the meeting</li>
        <li>Set and announce an adjournment time</li>
        <li>Review the agenda at the start and allocate time for each item</li>
        <li>Ask questions rather than making statements to encourage participation</li>
        <li>Summarise decisions and review assignments at the end</li>
        <li>Distribute meeting notes promptly</li>
        <li>Periodically assess meeting effectiveness and make improvements</li>
      </ul>

      <h2>Special Challenges for Small Organisations</h2>
      <p>
        Small businesses and charities often face unique team challenges:
      </p>
      <ul>
        <li><strong>Volunteer teams:</strong> People give time freely but may have limited availability</li>
        <li><strong>Part-time involvement:</strong> Team members juggle multiple responsibilities</li>
        <li><strong>Skill gaps:</strong> May lack specialists for certain technical areas</li>
        <li><strong>High turnover:</strong> Frequent team changes disrupt development</li>
        <li><strong>Resource constraints:</strong> Limited budget for tools, training, or recognition</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          Great teams are made, not born. As a project manager, you have tremendous 
          influence over how your team develops. Invest time in building relationships, 
          establishing clear expectations, and creating a positive team culture. 
          The return on this investment will show in the quality of work and the 
          commitment of your team members.
        </p>
      </div>
    </TopicPageLayout>
  )
}
