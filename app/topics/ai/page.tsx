import { Cpu, Bot, Brain, Sparkles, AlertTriangle, CheckCircle2, Zap, FileText, Users, BarChart3 } from "lucide-react"
import { TopicPageLayout } from "@/components/topic-page-layout"

export const metadata = {
  title: "AI in Projects | PM Made Practical",
  description: "Learn how to leverage artificial intelligence tools to enhance project outcomes. A practical guide for small businesses and charities in Ireland.",
}

const videos = [
  {
    title: "AI for Project Management",
    url: "https://www.youtube.com/watch?v=L_4BPjLBF4E",
    duration: "18:45",
    description: "Overview of AI applications in project management"
  },
  {
    title: "ChatGPT for Project Managers",
    url: "https://www.youtube.com/watch?v=jHv63Uvk5VA",
    duration: "22:30",
    description: "Practical uses of generative AI in projects"
  },
  {
    title: "AI Ethics in Business",
    url: "https://www.youtube.com/watch?v=UwsrzCVZAb8",
    duration: "15:10",
    description: "Understanding ethical AI implementation"
  },
]

const readings = [
  {
    title: "Artificial Intelligence in Project Management",
    author: "Project Management Institute",
    source: "PMI Research Reports",
    type: "guide" as const,
    url: "https://www.pmi.org/learning/library/artificial-intelligence-project-management"
  },
  {
    title: "AI and the Future of Work",
    author: "World Economic Forum",
    source: "Future of Jobs Report",
    type: "guide" as const,
  },
  {
    title: "Responsible AI Principles",
    author: "Microsoft",
    source: "AI Ethics Guidelines",
    type: "guide" as const,
    url: "https://www.microsoft.com/en-us/ai/responsible-ai"
  },
]

const relatedTopics = [
  { name: "Planning", href: "/topics/planning" },
  { name: "Risk Management", href: "/topics/risk" },
  { name: "Ethics", href: "/topics/ethics" },
  { name: "Implementation", href: "/topics/implementation" },
]

const keyTakeaways = [
  "AI is a tool to augment human decision-making, not replace it",
  "Start with clear use cases that add genuine value",
  "Always verify AI-generated content before using it",
  "Consider ethical implications and data privacy",
  "Build team skills progressively through experimentation",
]

export default function AIPage() {
  return (
    <TopicPageLayout
      title="AI in Projects"
      subtitle="Intelligent Assistance"
      description="Artificial Intelligence is transforming how projects are planned, executed, and monitored. For small businesses and charities, AI tools offer opportunities to work smarter with limited resources. However, successful AI adoption requires understanding both its capabilities and limitations."
      icon={<Cpu className="h-8 w-8 text-teal-600" />}
      iconBgClass="bg-teal-50 border border-teal-100"
      videos={videos}
      readings={readings}
      relatedTopics={relatedTopics}
      keyTakeaways={keyTakeaways}
    >
      <h2>What is AI in Project Management?</h2>
      <p>
        AI in project management refers to the use of intelligent systems that can learn from data,
        recognise patterns, and make predictions or recommendations to support project activities.
        These tools range from simple automation to sophisticated machine learning applications.
      </p>
      <p>
        For small organisations, the most accessible AI applications are <strong>generative AI tools</strong> 
        (like ChatGPT, Claude, or Copilot) and <strong>AI-enhanced software features</strong> built into 
        existing project management platforms.
      </p>

      <div className="not-prose my-8 rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">AI Capabilities Spectrum</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { 
              icon: Zap, 
              title: "Automation", 
              desc: "Repetitive tasks handled automatically",
              examples: "Status updates, reminders, data entry"
            },
            { 
              icon: Brain, 
              title: "Analysis", 
              desc: "Pattern recognition and insights",
              examples: "Risk prediction, resource optimisation"
            },
            { 
              icon: Sparkles, 
              title: "Generation", 
              desc: "Creating content and solutions",
              examples: "Draft documents, meeting summaries"
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col p-4 rounded-xl bg-secondary/50">
              <item.icon className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              <p className="mt-2 text-xs text-muted-foreground italic">e.g., {item.examples}</p>
            </div>
          ))}
        </div>
      </div>

      <h2>Practical AI Applications for Projects</h2>
      <p>
        Here are specific ways AI can support project management activities:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: FileText,
            title: "Document Creation",
            desc: "Draft project charters, status reports, stakeholder communications, and meeting agendas",
            tools: "ChatGPT, Claude, Microsoft Copilot"
          },
          {
            icon: Users,
            title: "Meeting Support",
            desc: "Generate summaries from meeting transcripts, extract action items, and create follow-up emails",
            tools: "Otter.ai, Fireflies, Teams Premium"
          },
          {
            icon: BarChart3,
            title: "Data Analysis",
            desc: "Analyse project data, identify trends, create visualisations from raw data",
            tools: "ChatGPT Advanced Data Analysis, Power BI Copilot"
          },
          {
            icon: Brain,
            title: "Risk Identification",
            desc: "Brainstorm potential risks, suggest mitigation strategies, review historical patterns",
            tools: "Any generative AI with good prompting"
          },
          {
            icon: Bot,
            title: "Planning Assistance",
            desc: "Create work breakdown structures, estimate durations, suggest task dependencies",
            tools: "Project management tools with AI features"
          },
        ].map((app) => (
          <div key={app.title} className="flex gap-4 rounded-xl border border-border bg-card p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              <app.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">{app.title}</h4>
              <p className="text-sm text-muted-foreground">{app.desc}</p>
              <p className="mt-1 text-xs text-primary">Tools: {app.tools}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Using Generative AI Effectively</h2>
      <p>
        Generative AI tools like ChatGPT can be powerful assistants, but their effectiveness 
        depends on how you use them. Key principles include:
      </p>

      <h3>The Art of Prompting</h3>
      <p>
        The quality of AI output depends heavily on the quality of your input. Good prompts:
      </p>
      <ul>
        <li><strong>Provide context:</strong> Explain your role, organisation type, and project situation</li>
        <li><strong>Be specific:</strong> State exactly what format and content you need</li>
        <li><strong>Give examples:</strong> Show the AI what good output looks like</li>
        <li><strong>Iterate:</strong> Refine outputs through follow-up questions</li>
      </ul>

      <div className="not-prose my-8 rounded-2xl border border-border bg-secondary/30 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Example Prompt Structure</h3>
        <div className="space-y-4 text-sm">
          <div className="rounded-lg bg-card p-4 border border-border">
            <p className="font-medium text-muted-foreground mb-2">Weak prompt:</p>
            <p className="text-foreground">&quot;Write a project status report&quot;</p>
          </div>
          <div className="rounded-lg bg-card p-4 border border-primary/30">
            <p className="font-medium text-primary mb-2">Strong prompt:</p>
            <p className="text-foreground">
              &quot;I&apos;m a project manager at a small Irish charity running a community garden project. 
              Write a monthly status report for our board of trustees covering: overall progress (we&apos;re 
              75% complete), key achievements this month (secured 20 new volunteers), upcoming milestones 
              (garden opening in 6 weeks), risks (weather delays possible), and budget status (on track). 
              Keep the tone professional but accessible, and limit to one page.&quot;
            </p>
          </div>
        </div>
      </div>

      <h2>AI Limitations and Risks</h2>
      <p>
        AI tools have significant limitations that project managers must understand:
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h4 className="font-semibold text-amber-800 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Key Limitations
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-amber-700">
            <li><strong>Hallucinations:</strong> AI can generate plausible-sounding but incorrect information</li>
            <li><strong>No real understanding:</strong> AI processes patterns, not meaning</li>
            <li><strong>Training cutoffs:</strong> Knowledge may be outdated</li>
            <li><strong>Context limits:</strong> Cannot remember long conversations perfectly</li>
            <li><strong>No judgement:</strong> Cannot weigh ethical or political considerations</li>
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h4 className="font-semibold text-red-800 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Potential Risks
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-red-700">
            <li><strong>Data privacy:</strong> Confidential info may be stored/used for training</li>
            <li><strong>Over-reliance:</strong> Teams may stop developing critical skills</li>
            <li><strong>Bias:</strong> AI can reflect and amplify existing biases</li>
            <li><strong>Intellectual property:</strong> Ownership of AI-generated content is unclear</li>
            <li><strong>Quality variance:</strong> Output quality can be inconsistent</li>
          </ul>
        </div>
      </div>

      <h2>Responsible AI Use Guidelines</h2>
      <p>
        For small businesses and charities, responsible AI use means:
      </p>
      <ul>
        <li>
          <strong>Always verify:</strong> Never publish or act on AI-generated content without 
          human review and fact-checking
        </li>
        <li>
          <strong>Protect sensitive data:</strong> Don&apos;t input confidential information, personal 
          data, or proprietary information into public AI tools
        </li>
        <li>
          <strong>Be transparent:</strong> Disclose when AI has been used to create content, 
          especially for external communications
        </li>
        <li>
          <strong>Maintain skills:</strong> Use AI to augment, not replace, human expertise and 
          critical thinking
        </li>
        <li>
          <strong>Consider impact:</strong> Think about how AI use affects stakeholders, 
          especially vulnerable groups
        </li>
      </ul>

      <div className="not-prose my-8 rounded-2xl border border-green-200 bg-green-50 p-6">
        <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          AI Best Practices Checklist
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-green-700">
          {[
            "Start with low-risk use cases",
            "Create an AI usage policy for your team",
            "Train team members on effective prompting",
            "Establish review processes for AI outputs",
            "Track what works and share learnings",
            "Stay updated on AI developments and risks",
            "Consider environmental impact of AI use",
            "Budget time for learning and experimentation",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>Getting Started with AI</h2>
      <p>
        For organisations new to AI, here&apos;s a practical approach:
      </p>
      <ol>
        <li>
          <strong>Identify friction points:</strong> What repetitive or time-consuming tasks 
          slow down your projects?
        </li>
        <li>
          <strong>Start small:</strong> Choose one use case with low risk (e.g., drafting 
          internal meeting agendas)
        </li>
        <li>
          <strong>Experiment safely:</strong> Use free tiers of tools, don&apos;t input sensitive 
          data while learning
        </li>
        <li>
          <strong>Build skills gradually:</strong> Learn prompting techniques, understand 
          limitations
        </li>
        <li>
          <strong>Scale what works:</strong> Once you&apos;ve validated a use case, expand to 
          similar applications
        </li>
      </ol>

      <h2>The ECCSR Connection</h2>
      <p>
        AI adoption should align with your organisation&apos;s values through the 
        <strong> ECCSR framework</strong>:
      </p>
      <ul>
        <li><strong>Ethics:</strong> Is AI being used responsibly? Are we transparent about its use?</li>
        <li><strong>Community:</strong> Does AI use benefit or potentially harm our stakeholders?</li>
        <li><strong>Collaboration:</strong> Are we sharing AI learnings with partner organisations?</li>
        <li><strong>Sustainability:</strong> What is the environmental impact of AI computing resources?</li>
        <li><strong>Resilience:</strong> Are we building capabilities or creating new dependencies?</li>
      </ul>

      <div className="not-prose mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
        <p className="text-muted-foreground">
          AI is a powerful tool, but it&apos;s just that - a tool. The project manager&apos;s 
          judgement, relationships, and understanding of context remain irreplaceable. Use AI 
          to handle routine work so you can focus on what humans do best: creative problem-solving, 
          building relationships, and making complex decisions that require wisdom and empathy.
        </p>
      </div>
    </TopicPageLayout>
  )
}
