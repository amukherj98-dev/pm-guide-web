import { Scale, Shield, AlertTriangle, CheckCircle, Heart, Eye, Users } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "Ethics in Project Management | PM Made Practical",
  description: "Learn about ethical decision-making in projects, professional codes of conduct, and how to maintain integrity throughout the project lifecycle.",
}

const videos = [
  {
    title: "PMI Code of Ethics Explained",
    url: "https://www.youtube.com/watch?v=w0RMQBhRfIk",
    duration: "10:15",
    description: "Understanding professional ethical standards"
  },
  {
    title: "Ethical Decision Making Framework",
    url: "https://www.youtube.com/watch?v=YLInfO95XPU",
    duration: "12:30",
    description: "A practical approach to ethical dilemmas"
  },
  {
    title: "Whistleblowing and Project Management",
    url: "https://www.youtube.com/watch?v=HQwEWQBfbP4",
    duration: "8:45",
    description: "When and how to raise concerns"
  },
]

const readings = [
  {
    title: "Project Management: The Managerial Process",
    author: "Larson & Gray",
    source: "Chapter 10: Ethics and Project Management section",
    type: "book" as const,
  },
  {
    title: "PMI Code of Ethics and Professional Conduct",
    author: "Project Management Institute",
    source: "The foundational ethical framework for PMs",
    type: "guide" as const,
    url: "https://www.pmi.org/about/ethics/code",
  },
  {
    title: "Ethics in Practice",
    author: "APM",
    source: "Association for Project Management guidance",
    type: "guide" as const,
  },
]

const relatedTopics = [
  { name: "Leadership", href: "/topics/leadership" },
  { name: "Governance", href: "/topics/governance" },
  { name: "Sustainability", href: "/topics/sustainability" },
  { name: "Stakeholders", href: "/topics/stakeholders" },
]

const keyTakeaways = [
  "Ethics involves both mandatory and aspirational standards",
  "Trust is built through consistent ethical behaviour",
  "Ethical dilemmas rarely have clear-cut answers",
  "Transparency and honesty are non-negotiable",
  "Consider impacts on all stakeholders, not just clients",
]

export default function EthicsPage() {
  return (
    <TopicPageLayout
      title="Ethics in Project Management"
      subtitle="Doing the Right Thing"
      description="Ethics involves making decisions that are morally right, even when they&apos;re difficult or unpopular. In project management, ethical behaviour builds trust, protects reputation, and ensures projects create value without causing harm. For small organisations and charities, where reputation is everything, ethical practice is essential."
      icon={<Scale className="h-8 w-8 text-purple-600" />}
      iconBgClass="bg-purple-50 border border-purple-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>Why Ethics Matter</h2>
      <p>
        As Larson & Gray note in <em>Project Management: The Managerial Process</em>, 
        ethical behaviour is fundamental to building trust, and trust is the foundation 
        of effective project relationships. Without trust, cooperation breaks down, 
        communication suffers, and projects fail.
      </p>
      <p>
        Ethical lapses can also have severe consequences:
      </p>
      <ul>
        <li>Legal liability and regulatory sanctions</li>
        <li>Reputation damage that takes years to repair</li>
        <li>Loss of funding, customers, and partners</li>
        <li>Harm to stakeholders and communities</li>
        <li>Personal career consequences for those involved</li>
      </ul>

      <h2>The PMI Code of Ethics</h2>
      <p>
        The Project Management Institute&apos;s Code of Ethics and Professional Conduct 
        identifies four fundamental values:
      </p>

      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        {[
          {
            icon: Shield,
            title: "Responsibility",
            description: "Take ownership of decisions and actions. Accept only assignments we can perform based on our background and experience.",
            color: "bg-blue-50 text-blue-600 border-blue-200"
          },
          {
            icon: Eye,
            title: "Respect",
            description: "Show high regard for ourselves, others, and resources entrusted to us. Treat people with dignity even when we disagree.",
            color: "bg-green-50 text-green-600 border-green-200"
          },
          {
            icon: Scale,
            title: "Fairness",
            description: "Make decisions impartially and objectively. Behave without favouritism, prejudice, or self-interest.",
            color: "bg-purple-50 text-purple-600 border-purple-200"
          },
          {
            icon: Heart,
            title: "Honesty",
            description: "Understand the truth and act in a truthful manner. Create an environment where others feel safe to tell the truth.",
            color: "bg-amber-50 text-amber-600 border-amber-200"
          },
        ].map((value) => (
          <div key={value.title} className={`rounded-xl border p-5 ${value.color}`}>
            <div className="flex items-center gap-3 mb-3">
              <value.icon className="h-6 w-6" />
              <h4 className="font-semibold">{value.title}</h4>
            </div>
            <p className="text-sm opacity-90">{value.description}</p>
          </div>
        ))}
      </div>

      <h3>Mandatory vs Aspirational Standards</h3>
      <p>
        The code distinguishes between:
      </p>
      <ul>
        <li><strong>Mandatory standards:</strong> Requirements that establish firm limits on behaviour. Violations may result in disciplinary action.</li>
        <li><strong>Aspirational standards:</strong> Behaviours we strive for but recognise we may not always achieve. They represent the ideal.</li>
      </ul>

      <h2>Common Ethical Dilemmas in Projects</h2>
      <p>
        Project managers frequently face situations where ethical principles may 
        conflict or where the right course of action is unclear:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            dilemma: "Pressure to hide problems",
            scenario: "Your sponsor wants you to understate schedule delays to the board.",
            considerations: "Honesty requires accurate reporting. But loyalty to sponsor, job security, and desire to avoid conflict all push the other way."
          },
          {
            dilemma: "Conflicts of interest",
            scenario: "Your friend&apos;s company is bidding on a contract you&apos;ll evaluate.",
            considerations: "Fairness requires impartial evaluation. Personal relationships and desire to help a friend create bias."
          },
          {
            dilemma: "Scope and safety trade-offs",
            scenario: "Cutting testing would save time but might compromise quality.",
            considerations: "Responsibility to stakeholders means delivering safely. Pressure to meet deadlines creates temptation."
          },
          {
            dilemma: "Taking credit",
            scenario: "You could take credit for a team member&apos;s innovation.",
            considerations: "Honesty and respect mean giving credit where due. Self-interest and visibility pull the other way."
          },
        ].map((item) => (
          <div key={item.dilemma} className="rounded-xl border border-border bg-card p-5">
            <h4 className="font-semibold text-foreground mb-2">{item.dilemma}</h4>
            <p className="text-sm text-muted-foreground mb-3"><strong>Scenario:</strong> {item.scenario}</p>
            <p className="text-sm text-muted-foreground"><strong>Considerations:</strong> {item.considerations}</p>
          </div>
        ))}
      </div>

      <h2>An Ethical Decision-Making Framework</h2>
      <p>
        When facing an ethical dilemma, work through these questions:
      </p>
      <ol>
        <li><strong>Identify the issue:</strong> What exactly is the ethical concern?</li>
        <li><strong>Gather facts:</strong> What information do you need to decide?</li>
        <li><strong>Consider stakeholders:</strong> Who is affected and how?</li>
        <li><strong>Evaluate options:</strong> What are the possible courses of action?</li>
        <li><strong>Apply ethical principles:</strong> How do your options measure against responsibility, respect, fairness, and honesty?</li>
        <li><strong>Consider consequences:</strong> What are the likely outcomes of each option?</li>
        <li><strong>Make a decision:</strong> Choose the option that best upholds ethical principles</li>
        <li><strong>Reflect:</strong> After the fact, consider what you learned</li>
      </ol>

      <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3">The &quot;Newspaper Test&quot;</h3>
        <p className="text-amber-700">
          A simple check: How would you feel if your decision appeared on the front 
          page of tomorrow&apos;s newspaper? If you&apos;d be embarrassed or ashamed, 
          reconsider your choice.
        </p>
      </div>

      <h2>Creating an Ethical Environment</h2>
      <p>
        As a project manager, you influence the ethical climate of your team:
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Promote
          </h4>
          <ul className="space-y-2 text-sm text-green-700">
            <li>Open discussion of ethical concerns</li>
            <li>Rewarding honesty even when news is bad</li>
            <li>Admitting your own mistakes</li>
            <li>Consistent application of standards</li>
            <li>Safe channels for raising concerns</li>
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Prevent
          </h4>
          <ul className="space-y-2 text-sm text-red-700">
            <li>&quot;Shooting the messenger&quot;</li>
            <li>Pressure to cut ethical corners</li>
            <li>Tolerance for dishonesty</li>
            <li>Favouritism and unfair treatment</li>
            <li>Retaliation for raising concerns</li>
          </ul>
        </div>
      </div>

      <h2>Ethics in AI Usage</h2>
      <p>
        The Company Project Module Outline provides clear guidance on AI ethics:
      </p>
      <ul>
        <li>AI tools can help access and structure thinking</li>
        <li>Text generated by AI is plagiarism unless sources are cited</li>
        <li>Learn to ask good questions for better AI outputs</li>
        <li>Don&apos;t assume AI responses are correct - verify everything</li>
        <li>Disclose AI usage and the prompts used in your work</li>
      </ul>

      <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          AI Disclosure Requirement
        </h4>
        <p className="text-sm text-muted-foreground">
          &quot;If you do utilise AI in the preparation of any of your assignments, you must 
          include a section in your introduction or early in your submission explaining 
          what you used AI for, and the prompts you used to surface your results. 
          Failure to do this will be regarded as a violation of the academic integrity 
          rules already in existence.&quot;
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          — Company Project Module Outline, 2026
        </p>
      </div>

      <h2>The ECCSR Connection</h2>
      <p>
        Ethics is the first pillar of the <strong>ECCSR framework</strong> (Ethics, 
        Community, Collaboration, Sustainability, Resilience) that guides responsible 
        project management. Ethical practice:
      </p>
      <ul>
        <li>Builds trust with communities we serve</li>
        <li>Enables genuine collaboration based on honest communication</li>
        <li>Supports sustainable outcomes that don&apos;t harm future generations</li>
        <li>Creates resilient relationships that withstand challenges</li>
      </ul>

      <h2>Ethics for Small Organisations</h2>
      <p>
        Small businesses and charities often face unique ethical pressures:
      </p>
      <ul>
        <li><strong>Resource scarcity:</strong> Temptation to cut corners when funds are tight</li>
        <li><strong>Close relationships:</strong> Harder to maintain boundaries with people you know well</li>
        <li><strong>Mission pressure:</strong> The ends may seem to justify questionable means</li>
        <li><strong>Less oversight:</strong> Fewer checks and balances than larger organisations</li>
        <li><strong>High visibility:</strong> Ethical lapses are quickly noticed in small communities</li>
      </ul>
      <p>
        However, small organisations also have advantages: clearer purpose, closer 
        relationships, and faster ability to address concerns when they arise.
      </p>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          Ethics is not about following rules - it&apos;s about character. Your reputation 
          is built over time through consistent ethical behaviour. Every decision is an 
          opportunity to demonstrate integrity. When in doubt, choose the path you&apos;d 
          be proud to explain to someone you respect.
        </p>
      </div>
    </TopicPageLayout>
  )
}
