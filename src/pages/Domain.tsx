import PageHeader from "@/components/layout/PageHeader";
import {
  Brain,
  Eye,
  Bot,
  Puzzle,
  Puzzle as PuzzleIcon,
  Clock,
  HelpCircle,
  Activity,
  BarChart3,
  Workflow,
  FileText,
  Camera,
  Cpu,
  ArrowRight,
} from "lucide-react";

const literature = [
  {
    icon: Brain,
    title: "Reinforcement Learning for Adaptive Tutoring",
    body:
      "RL and DRL approaches (e.g., DQN) have been used to select optimal pedagogical actions based on learner states, leading to improved long-term learning outcomes compared to rule-based systems.",
    refs: "[1], [2], [6]",
  },
  {
    icon: Eye,
    title: "Emotion-Aware Vision for Engagement",
    body:
      "Computer vision techniques such as facial expression recognition, gaze tracking and posture analysis can detect attention, confusion and boredom in real time, providing valuable signals for adaptive systems.",
    refs: "[3], [4]",
  },
  {
    icon: Bot,
    title: "RAG & LLMs for Content Generation",
    body:
      "RAG combined with large language models enables generation of accurate, contextually relevant and personalized instructional content by retrieving knowledge from external sources.",
    refs: "[7], [10]",
  },
  {
    icon: Puzzle,
    title: "Integration & Agentic Planning Gap",
    body:
      "Existing works typically address these components in isolation. There is a lack of unified frameworks that integrate perception, RL decision-making, agentic planning and content generation in a closed-loop architecture.",
    refs: "[5], [8], [9]",
  },
];

const references = [
  "N. Alam, K. Fazeli, X. Tian, M. Chi, and T. Barnes, “Determining problem type using deep reinforcement learning in a data-driven intelligent tutor,” in Proc. AIED 2025, LNCS 15882, Springer, 2025, pp. 1–12.",
  "G. Zhou, H. Azizsoltani, M. S. Ausin, T. Barnes, and M. Chi, “Leveraging granularity: Hierarchical reinforcement learning for pedagogical policy induction,” Int. J. Artif. Intell. Educ., vol. 32, pp. 669–710, 2022.",
  "L. Yan, X. Wu, and Y. Wang, “Student engagement assessment using multimodal deep learning,” PLOS ONE, vol. 20, no. 6, p. e0325377, Jun. 2025.",
  "M. Sharif and D. Uckelmann, “Multi-modal LA in personalized education using deep reinforcement learning based approach,” IEEE Access, vol. 12, pp. 54049–54065, 2024.",
  "K. Hilali, C. Meriyem, and A. Ammoumou, “Adaptive learning systems: A comprehensive overview and identification of challenges,” in Proc. ICTMOD, 2023, pp. 1–7.",
  "X. Li, H. Xu, J. Zhang, and H. Chang, “Deep reinforcement learning for adaptive learning systems,” J. Educ. Behav. Stat., vol. 48, no. 2, pp. 220–243, 2023.",
  "P. Lewis et al., “Retrieval-augmented generation for knowledge-intensive NLP tasks,” in Proc. NeurIPS, 2020.",
  "L. Wang et al., “A survey on large language model based autonomous agents,” Front. Comput. Sci., vol. 18, no. 6, p. 186345, 2024.",
  "S. Yao et al., “ReAct: Synergizing reasoning and acting in language models,” in Proc. ICLR, 2023.",
  "H. Alawwad et al., “Retrieval-augmented generation for educational application: A systematic survey,” Comput. Educ. Artif. Intell., vol. 8, p. 100278, 2025.",
  "Google DeepMind, “Gemini Flash 3.0 Technical Report,” Google, 2025.",
];

const gaps = [
  {
    icon: PuzzleIcon,
    title: "Lack of Integration",
    body:
      "Existing systems address engagement detection, decision making, or content generation separately. There is a lack of a unified framework integrating CV, RL, Agentic AI and RAG.",
  },
  {
    icon: Clock,
    title: "No Real-Time Adaptation",
    body:
      "Most systems do not adapt to fluctuating engagement and behaviour in real time, leading to irrelevant interventions and reduced learning effectiveness.",
  },
  {
    icon: Brain,
    title: "Absence of Intelligent Planning",
    body:
      "Current approaches lack goal-oriented planning and reasoning capabilities required to create multi-step instructional strategies based on learner context.",
  },
];

const objectives = [
  {
    icon: Eye,
    title: "Detect Engagement",
    body:
      "Detect learner engagement states (engaged, confused, bored, etc.) using computer vision and contextual signals in real time.",
  },
  {
    icon: BarChart3,
    title: "Optimize Learning Decisions",
    body:
      "Use reinforcement learning to select the most effective pedagogical actions based on learner state and feedback.",
  },
  {
    icon: Bot,
    title: "Plan Instruction Strategically",
    body:
      "Employ an Agentic AI core to perform multi-step reasoning and plan goal-oriented instructional strategies.",
  },
  {
    icon: FileText,
    title: "Generate Personalized Content",
    body:
      "Use RAG-based content generation to deliver accurate, contextual and personalized learning materials.",
  },
];

const methodology = [
  {
    icon: Camera,
    title: "CV Model",
    subtitle: "Engagement Detection",
    body: "Captures facial expressions, gaze and head movements to identify learner state.",
  },
  {
    icon: Cpu,
    title: "RL Decision Engine",
    subtitle: "Action Selection",
    body: "DQN-based RL model selects optimal pedagogical action based on current state.",
  },
  {
    icon: Bot,
    title: "Agentic AI Core",
    subtitle: "Instructional Planning",
    body: "Goal-driven agent decomposes actions into multi-step plans using reasoning and context.",
  },
  {
    icon: FileText,
    title: "RAG Content Generation",
    subtitle: "Personalized Content",
    body: "Retrieves relevant knowledge and generates accurate, contextual learning content.",
  },
];

const SectionLabel = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-2xl md:text-3xl font-display font-bold text-primary">{number}.</span>
    <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground uppercase">
      {title}
    </h2>
  </div>
);

const Domain = () => (
  <>
    <PageHeader
      eyebrow="Domain"
      title="Project Domain & Methodology"
      description="Literature survey, research gap, problem, objectives and methodology behind the Adaptive Intelligent Tutoring System."
    />

    {/* 1. LITERATURE SURVEY */}
    <section className="container py-16">
      <SectionLabel number="1" title="Literature Survey" />
      <p className="text-muted-foreground max-w-4xl mb-10 leading-relaxed">
        Recent studies have explored various techniques to enable adaptive, intelligent and
        engagement-aware tutoring systems. Key findings are summarized below.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {literature.map((l) => (
          <div
            key={l.title}
            className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <l.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2 leading-snug">
              {l.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{l.body}</p>
            <p className="mt-4 text-xs font-medium text-accent">{l.refs}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-secondary/40 p-6">
        <h3 className="font-display font-semibold text-foreground mb-4">References</h3>
        <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          {references.map((r, i) => (
            <li key={i} className="leading-relaxed">{r}</li>
          ))}
        </ol>
      </div>
    </section>

    {/* 2. RESEARCH GAP */}
    <section className="bg-secondary/40 py-16">
      <div className="container">
        <SectionLabel number="2" title="Research Gap" />
        <p className="text-muted-foreground max-w-4xl mb-10 leading-relaxed">
          Despite significant progress, most existing studies have the following gaps.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {gaps.map((g) => (
            <div key={g.title} className="rounded-xl border border-border bg-card p-6 shadow-card text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                <g.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">{g.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. RESEARCH PROBLEM */}
    <section className="container py-16">
      <SectionLabel number="3" title="Research Problem" />
      <div className="rounded-2xl border border-border bg-card shadow-card p-8 md:p-10 flex gap-6 items-start">
        <div className="hidden sm:flex h-14 w-14 shrink-0 rounded-full bg-primary/10 text-primary items-center justify-center">
          <HelpCircle className="h-7 w-7" />
        </div>
        <div>
          <p className="text-xl md:text-2xl font-display font-semibold text-foreground leading-snug">
            How to dynamically adapt learning based on real-time student engagement and behavior to maximize learning outcomes?
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Current systems rely on static content and rule-based strategies, which cannot effectively
            respond to learners' changing engagement states, motivation, and learning pace.
          </p>
        </div>
      </div>
    </section>

    {/* 4. RESEARCH OBJECTIVES */}
    <section className="bg-secondary/40 py-16">
      <div className="container">
        <SectionLabel number="4" title="Research Objectives" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((o, idx) => (
            <div key={o.title} className="rounded-xl border border-border bg-card p-6 shadow-card text-center">
              <div className="relative mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <o.icon className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-card">
                  {idx + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 5. METHODOLOGY */}
    <section className="container py-16">
      <SectionLabel number="5" title="Methodology" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {methodology.map((m, i) => (
          <div key={m.title} className="relative">
            <div className="h-full rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="h-12 w-12 rounded-lg bg-gradient-accent text-primary-foreground flex items-center justify-center mb-4">
                <m.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-primary">{m.title}</h3>
              <p className="text-xs uppercase tracking-wider text-accent font-medium mt-1">{m.subtitle}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
            </div>
            {i < methodology.length - 1 && (
              <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 h-6 w-6 text-accent z-10" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
        <Workflow className="h-4 w-4 text-accent" />
        <span className="italic">Continuous Feedback Loop</span>
      </div>
    </section>
  </>
);

export default Domain;