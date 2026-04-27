import { Users, Lightbulb, MessageSquare, Shield, Heart, Handshake, Target, Zap } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Leadership | PM Made Practical",
  description: "Develop effective project leadership skills. Learn the difference between managing and leading, and how to inspire your team to achieve project goals.",
}

const videos = [
  {
    title: "Managing vs Leading Projects",
    url: "https://www.youtube.com/watch?v=fHCOLJgQcTQ",
    duration: "10:15",
    description: "Understanding the key differences"
  },
  {
    title: "Building Trust in Project Teams",
    url: "https://www.youtube.com/watch?v=pVeq-0dIqpk",
    duration: "14:22",
    description: "The foundation of effective leadership"
  },
  {
    title: "Stakeholder Influence Strategies",
    url: "https://www.youtube.com/watch?v=6J-J8hQOv9Q",
    duration: "12:08",
    description: "How to build support for your projects"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapter 10: Being an Effective Project Manager",
    type: "book" as const,
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    source: "Leadership principles applicable to projects",
    type: "book" as const,
  },
  {
    title: "Give and Take: A Revolutionary Approach to Success",
    author: "Adam Grant",
    source: "How giving builds influence",
    type: "book" as const,
  },
]

const relatedTopics = [
  { name: "Teams", href: "/topics/teams" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
  { name: "Ethics", href: "/topics/ethics" },
  { name: "Implementation", href: "/topics/implementation" },
]

const keyTakeaways = [
  "Managing and leading are different but complementary",
  "Influence is built through reciprocity and trust",
  "Map your stakeholder dependencies",
  "Lead by example - actions speak louder than words",
  "Building trust takes time but can be lost instantly",
]

export default function LeadershipPage() {
  return (
    <TopicPageLayout
      title="Leadership"
      subtitle="Inspiring Project Success"
      description="Project managers don&apos;t just manage tasks and schedules - they lead people. Effective leadership involves building relationships, influencing without formal authority, and inspiring teams to give their best effort. For small organisations, where everyone wears multiple hats, leadership skills are essential for getting things done."
      icon={<Users className="h-8 w-8 text-blue-600" />}
      iconBgClass="bg-blue-50 border border-blue-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>Managing vs Leading</h2>
      <p>
        According to Kotter (1990), management and leadership serve different but complementary 
        purposes. Understanding this distinction is crucial for project success:
      </p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 mb-4">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Management</h3>
          <p className="text-muted-foreground text-sm mb-4">Coping with <strong>complexity</strong></p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Formulating plans and objectives</li>
            <li>Designing structures and procedures</li>
            <li>Monitoring results against plans</li>
            <li>Taking corrective action when necessary</li>
            <li>Bringing order and stability</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Leadership</h3>
          <p className="text-muted-foreground text-sm mb-4">Coping with <strong>change</strong></p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Recognising the need to alter direction</li>
            <li>Aligning people to new goals</li>
            <li>Motivating teams through challenges</li>
            <li>Articulating a compelling vision</li>
            <li>Inspiring innovation and adaptation</li>
          </ul>
        </div>
      </div>

      <p>
        Well-defined projects with few surprises may require little leadership. But projects 
        facing uncertainty - changing requirements, technical challenges, or coordination 
        breakdowns - demand strong leadership. The best project managers can do both.
      </p>

      <h2>Engaging Project Stakeholders</h2>
      <p>
        Project success depends not just on the project team, but on contributions from senior 
        management, functional managers, customers, suppliers, and others. A project manager 
        must build cooperative relationships with all these groups.
      </p>

      <blockquote className="not-prose my-8 border-l-4 border-primary pl-6 italic text-muted-foreground">
        &quot;I couldn&apos;t wait to be the manager of my own project and run the project the way 
        I thought it should be done. Boy, did I have a lot to learn!&quot;
        <footer className="mt-2 text-sm font-medium text-foreground not-italic">
          — First-time project manager
        </footer>
      </blockquote>

      <h2>Influence as Exchange</h2>
      <p>
        Project managers rarely have formal authority over everyone they need to influence. 
        Instead, they must build influence through <strong>reciprocity</strong> - the exchange 
        of resources and favours. Cohen and Bradford call these exchanges &quot;currencies&quot;:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Target,
            category: "Task-Related Currencies",
            items: ["New resources", "Challenge/learning opportunities", "Assistance on tasks", "Organisational support", "Rapid response time"]
          },
          {
            icon: Shield,
            category: "Position-Related Currencies",
            items: ["Recognition", "Visibility", "Reputation enhancement", "Insiderness/importance", "Network connections"]
          },
          {
            icon: Lightbulb,
            category: "Inspiration-Related Currencies",
            items: ["Vision", "Excellence", "Ethical correctness", "Purpose and meaning"]
          },
          {
            icon: Heart,
            category: "Relationship-Related Currencies",
            items: ["Acceptance/inclusion", "Personal support", "Understanding", "Emotional backing"]
          },
          {
            icon: Zap,
            category: "Personal-Related Currencies",
            items: ["Gratitude", "Ownership/involvement", "Self-concept enhancement", "Comfort and security"]
          },
        ].map((currency) => (
          <div key={currency.category} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <currency.icon className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground">{currency.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {currency.items.map((item) => (
                <span key={item} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p>
        The key is to understand what the other person values and find ways to provide it. 
        When you help others achieve their goals, they become more willing to help you 
        achieve yours.
      </p>

      <h2>Social Network Building</h2>
      <p>
        Effective project managers proactively build networks of relationships before they 
        need them. Two key activities support this:
      </p>

      <h3>Mapping Stakeholder Dependencies</h3>
      <p>
        Early in a project, identify who you will need cooperation from and the basis of 
        your dependency. Ask yourself:
      </p>
      <ul>
        <li>Whose cooperation do I need?</li>
        <li>Whose agreement or approval do I need?</li>
        <li>Whose opposition would prevent me from achieving my goals?</li>
      </ul>

      <h3>Management By Wandering Around (MBWA)</h3>
      <p>
        Rather than sitting in an office waiting for problems to come to you, successful 
        project managers spend time with their teams and stakeholders. This &quot;wandering&quot; 
        serves multiple purposes:
      </p>
      <ul>
        <li>Staying current on project status and potential issues</li>
        <li>Building and maintaining relationships</li>
        <li>Identifying problems before they escalate</li>
        <li>Being visible and accessible to team members</li>
      </ul>

      <h2>Managing Upward Relations</h2>
      <p>
        One of the most critical relationships to manage is with senior management and 
        project sponsors. Best practices include:
      </p>
      <ul>
        <li><strong>No surprises:</strong> Keep sponsors informed of problems early</li>
        <li><strong>Understand their priorities:</strong> What does success look like to them?</li>
        <li><strong>Present solutions, not just problems:</strong> Come with options</li>
        <li><strong>Manage expectations:</strong> Be honest about what&apos;s achievable</li>
        <li><strong>Make them look good:</strong> Their success depends on project success</li>
      </ul>

      <h2>Leading by Example</h2>
      <p>
        Perhaps nothing is more important than demonstrating through your own behaviour 
        the values and work ethic you expect from others. Research consistently shows that:
      </p>

      <div className="not-prose my-8 rounded-2xl border border-green-200 bg-green-50 p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">Actions That Build Credibility</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <ul className="space-y-2 text-sm text-green-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Meeting your own deadlines
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Admitting mistakes openly
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Being consistent and fair
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Sharing credit generously
            </li>
          </ul>
          <ul className="space-y-2 text-sm text-green-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Following through on commitments
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Taking responsibility for problems
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Working hard alongside the team
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Maintaining composure under pressure
            </li>
          </ul>
        </div>
      </div>

      <h2>Building Trust</h2>
      <p>
        Trust is the foundation of all effective project relationships. According to Larson 
        & Gray, &quot;Trust is the key to exercising influence.&quot; Trust is built over time 
        through consistent behaviour, but can be damaged in an instant.
      </p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Handshake className="h-5 w-5 text-primary" />
            Trust Builders
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Keep confidences</li>
            <li>Do what you say you will do</li>
            <li>Be honest, even when it&apos;s difficult</li>
            <li>Show respect for others&apos; expertise</li>
            <li>Give credit where it&apos;s due</li>
            <li>Listen actively and empathetically</li>
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Trust Destroyers
          </h4>
          <ul className="space-y-2 text-sm text-red-700">
            <li>Breaking confidences</li>
            <li>Over-promising and under-delivering</li>
            <li>Taking credit for others&apos; work</li>
            <li>Blame-shifting when things go wrong</li>
            <li>Inconsistent or unfair treatment</li>
            <li>Saying one thing, doing another</li>
          </ul>
        </div>
      </div>

      <h2>Qualities of Effective Project Managers</h2>
      <p>
        Research has identified several traits consistently associated with effective 
        project leadership:
      </p>
      <ol>
        <li><strong>Systems thinker:</strong> Sees the big picture and how parts connect</li>
        <li><strong>Personal integrity:</strong> Acts ethically and builds trust</li>
        <li><strong>Proactive:</strong> Anticipates problems rather than reacting</li>
        <li><strong>High stress tolerance:</strong> Stays calm under pressure</li>
        <li><strong>General business perspective:</strong> Understands organisational context</li>
        <li><strong>Good communicator:</strong> Clear, timely, and appropriate communication</li>
        <li><strong>Effective time manager:</strong> Prioritises and delegates well</li>
        <li><strong>Skilled politician:</strong> Navigates organisational dynamics</li>
      </ol>

      <h2>Leadership in Small Organisations</h2>
      <p>
        For small businesses and charities in Ireland, leadership challenges may include:
      </p>
      <ul>
        <li><strong>Multiple roles:</strong> You may be the project manager, team member, and 
        stakeholder simultaneously</li>
        <li><strong>Limited resources:</strong> You must achieve more with less</li>
        <li><strong>Volunteer management:</strong> Leading people you can&apos;t direct or pay</li>
        <li><strong>Board relations:</strong> Managing governance while driving execution</li>
        <li><strong>Community visibility:</strong> Your reputation matters in close-knit communities</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          Leadership is not about your position or title - it&apos;s about your ability to 
          influence others and inspire them to achieve shared goals. In project management, 
          everyone can be a leader, regardless of their formal role. Focus on building 
          relationships, acting with integrity, and helping others succeed.
        </p>
      </div>
    </TopicPageLayout>
  )
}
