import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, AlertCircle, HelpCircle, Target, Workflow, Cpu } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Literature Survey",
    body: "Existing Intelligent Tutoring Systems (ITS) model learner behavior to adapt instructional strategies, but most rely on rule-based approaches or shallow learner models. Recent work has explored reinforcement learning for adaptive decision-making, computer vision for engagement detection, and large language models for content generation — yet these approaches are typically developed in isolation."
  },
  {
    icon: AlertCircle,
    title: "Research Gap",
    body: "Current systems lack a unified framework that tightly integrates perception, decision-making and content delivery into a closed-loop tutoring architecture. Existing approaches also frequently overlook over-intervention, where excessive system responses disrupt the learner's natural learning flow."
  },
  {
    icon: HelpCircle,
    title: "Research Problem",
    body: "How can we design an intelligent tutoring system that continuously perceives learner engagement, plans pedagogically sound interventions in real time, and generates personalized, knowledge-grounded content — without over-intervening?"
  },
  {
    icon: Target,
    title: "Research Objectives",
    body: "(1) Detect learner engagement using multimodal computer vision. (2) Optimize pedagogical actions via Deep Reinforcement Learning. (3) Refine actions through agentic, multi-step planning. (4) Generate personalized content with RAG. (5) Evaluate against rule-based and non-adaptive baselines."
  },
];

const methodology = [
  { step: "01", title: "Engagement Detection", text: "OpenCV + MediaPipe + HuggingFace transformers extract attention, confusion and boredom signals from webcam." },
  { step: "02", title: "DQN Decision Engine", text: "PyTorch 2.4 DQN trained over 12,000 episodes on 500 synthetic learner profiles selects optimal pedagogical actions." },
  { step: "03", title: "Agentic Planning", text: "LangGraph + ReAct reasoning decomposes high-level actions into multi-step instructional strategies." },
  { step: "04", title: "RAG Content Layer", text: "Gemini Flash 3.0 with ChromaDB and SentenceTransformers (MiniLM, 384-dim) generates grounded content. Precision@5 ≈ 0.82." },
];

const tech = [
  ["Deep Learning", "PyTorch 2.4"],
  ["Backend API", "FastAPI"],
  ["Frontend", "React 18"],
  ["Computer Vision", "OpenCV 4.10"],
  ["Pose & Gaze", "MediaPipe 0.10"],
  ["Emotion Recognition", "HuggingFace Transformers"],
  ["Vector Database", "ChromaDB 0.5"],
  ["LLM", "Gemini Flash 3.0"],
  ["Agent Framework", "LangGraph + ReAct"],
];

const Domain = () => (
  <>
    <PageHeader
      eyebrow="Domain"
      title="Project Domain & Methodology"
      description="Background, gap, problem, objectives, and the integrated methodology behind the Adaptive Intelligent Tutoring System."
    />
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((s) => (
          <Card key={s.title} className="border-border/60 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-lg bg-gradient-accent text-primary-foreground flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </span>
                <h2 className="font-display font-semibold text-xl text-foreground">{s.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    <section className="bg-secondary/40 py-16">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <Workflow className="h-7 w-7 text-accent" />
          <h2 className="text-3xl font-display font-bold text-foreground">Methodology</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((m) => (
            <div key={m.step} className="rounded-xl bg-card border border-border p-6 shadow-card">
              <div className="text-4xl font-display font-bold text-accent/30">{m.step}</div>
              <h3 className="mt-2 font-display font-semibold text-foreground">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-16">
      <div className="flex items-center gap-3 mb-8">
        <Cpu className="h-7 w-7 text-accent" />
        <h2 className="text-3xl font-display font-bold text-foreground">Technologies Used</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {tech.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
            <span className="text-sm font-medium text-foreground">{k}</span>
            <span className="text-sm text-muted-foreground">{v}</span>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Domain;