import { Link } from "react-router-dom";
import { ArrowRight, Brain, Eye, Cpu, BookOpen, TrendingUp, Zap, Target, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImg from "@/assets/hero-aits.jpg";

const features = [
  { icon: Eye, title: "Emotion-Aware Vision", text: "Real-time engagement detection through computer vision, gaze and emotion recognition." },
  { icon: Cpu, title: "Reinforcement Learning", text: "DQN-based decision engine selecting optimal pedagogical actions in real time." },
  { icon: Brain, title: "Agentic AI Core", text: "LangGraph-powered multi-step reasoning translating decisions into instructional strategies." },
  { icon: BookOpen, title: "RAG Content Generation", text: "Gemini Flash 3.0 + ChromaDB delivering personalized, knowledge-grounded content." },
];

const metrics = [
  { icon: Activity, label: "Engagement Stability", value: "0.81", note: "ESI score" },
  { icon: Zap, label: "Adaptation Speed", value: "32s", note: "57% faster than rule-based" },
  { icon: Target, label: "Intervention Success", value: "76%", note: "exceeds 0.70 target" },
  { icon: TrendingUp, label: "Learning Gain", value: "+24.2pp", note: "vs +8.2 non-adaptive" },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-30">
        <img src={heroImg} alt="AI tutoring concept" width={1600} height={900} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      <div className="container relative py-24 md:py-32 animate-fade-in-up">
        <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/80 mb-4">
          SLIIT Research Project · 2025
        </p>
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-4xl">
          An Agentic AI-Driven Adaptive Intelligent Tutoring System
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/85">
          Combining Reinforcement Learning, Emotion-Aware Vision and RAG-based content
          generation to deliver real-time, personalized learning at scale.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 shadow-elegant">
            <Link to="/domain">Explore the Research <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/documents">View Documents</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Abstract */}
    <section className="container py-20">
      <div className="grid lg:grid-cols-3 gap-10">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Abstract</p>
          <h2 className="text-3xl font-display font-bold text-foreground">A closed-loop tutoring framework</h2>
        </div>
        <div className="lg:col-span-2 text-muted-foreground leading-relaxed space-y-4">
          <p>
            Current intelligent tutoring systems primarily rely on performance-based metrics
            and rule-based strategies, limiting their ability to adapt in real time to changes
            in learner engagement and behavior.
          </p>
          <p>
            Our proposed AITS integrates four key components — a computer vision engagement
            detector, a Deep Q-Network decision engine, an agentic AI planner, and a
            RAG-based content generator — into a unified, closed-loop architecture that
            continuously monitors learner state and adapts instruction accordingly.
          </p>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="bg-secondary/40 py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Core Components</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Four pillars working as one</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="border-border/60 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-gradient-accent text-primary-foreground flex items-center justify-center mb-4 shadow-elegant">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Metrics */}
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Evaluation</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Results that outperform baselines</h2>
        <p className="mt-3 text-muted-foreground">Validated with 15 real participants and 500 simulated learner profiles.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <m.icon className="h-6 w-6 text-accent mb-3" />
            <div className="text-3xl font-display font-bold text-foreground">{m.value}</div>
            <div className="text-sm font-medium text-foreground mt-1">{m.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{m.note}</div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container pb-8">
      <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-10 md:p-14 shadow-elegant text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold">Dive into the project</h2>
        <p className="mt-3 text-primary-foreground/80 max-w-2xl mx-auto">
          Read the full methodology, milestones, documents and meet the team behind AITS.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
            <Link to="/domain">Domain & Methodology</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/about">Meet the Team</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Index;
