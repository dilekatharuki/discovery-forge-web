import { BookOpen, FileText, Eye, Brain, Bot, FileCode2, ArrowRight, TrendingUp, Zap, Target, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-aits.png";

const flow = [
  { icon: Eye, label: "1. CV Model", sub: "(Emotion Detection)", color: "bg-primary/10 text-primary" },
  { icon: Brain, label: "2. Reinforcement Learning", sub: "(RL)", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Bot, label: "3. Agentic AI Core", sub: "", color: "bg-violet-500/10 text-violet-600" },
  { icon: FileCode2, label: "4. RAG Model", sub: "(Content Generation)", color: "bg-amber-500/10 text-amber-600" },
];

const metrics = [
  { icon: Activity, value: "0.81", label: "Engagement Stability", sub: "Index (ESI)", color: "text-primary", bg: "bg-primary/10" },
  { icon: Zap, value: "32s", label: "Modality Adaptation", sub: "Speed (MAS)", color: "text-emerald-600", bg: "bg-emerald-500/10" },
  { icon: Target, value: "0.76", label: "Intervention Success", sub: "Rate (ISR)", color: "text-violet-600", bg: "bg-violet-500/10" },
  { icon: TrendingUp, value: "+24.2", unit: "pp", label: "Learning Gain", sub: "vs. rule-based baseline", color: "text-amber-600", bg: "bg-amber-500/10" },
];

const scrollToDomain = () => {
  const el = document.getElementById("domain");
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
};
const scrollToDocs = () => {
  const el = document.getElementById("documents");
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
};

const Hero = () => (
  <>
    {/* Hero */}
    <div className="bg-gradient-to-b from-secondary/40 to-background">
      <div className="container py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center animate-fade-in-up">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
            An Agentic AI-Driven<br />
            Adaptive Intelligent<br />
            <span className="text-primary-glow">Tutoring System</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Combining emotion-aware vision, reinforcement learning, agentic AI planning, and RAG-based content generation to deliver real-time, personalized learning at scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={scrollToDomain} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant">
              <BookOpen className="mr-2 h-4 w-4" /> Explore the Research <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-3xl rounded-full" />
          <img src={heroImg} alt="Adaptive AI tutoring illustration" width={1024} height={800} className="w-full max-w-lg h-auto" />
        </div>
      </div>
    </div>

    {/* How AITS Works */}
    <div className="bg-background py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">How AITS Works</h2>
          <span className="block mx-auto mt-2 h-1 w-12 rounded-full bg-primary" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-2">
          {flow.map((f, i) => (
            <div key={f.label} className="flex items-center">
              <div className="flex flex-col items-center text-center w-40">
                <div className={`h-20 w-20 rounded-full ${f.color} flex items-center justify-center shadow-card`}>
                  <f.icon className="h-9 w-9" />
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">{f.label}</p>
                {f.sub && <p className="text-xs text-muted-foreground">{f.sub}</p>}
              </div>
              {i < flow.length - 1 && (
                <ArrowRight className="hidden md:block h-6 w-6 text-primary mx-2 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Key Highlights */}
    <div className="bg-secondary/40 py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Key Highlights</h2>
          <span className="block mx-auto mt-2 h-1 w-12 rounded-full bg-primary" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-card border border-border p-5 shadow-card flex items-center gap-4">
              <div className={`h-14 w-14 rounded-full ${m.bg} ${m.color} flex items-center justify-center shrink-0`}>
                <m.icon className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-display font-bold ${m.color}`}>{m.value}</span>
                  {m.unit && <span className={`text-sm font-semibold ${m.color}`}>{m.unit}</span>}
                </div>
                <div className="text-sm font-medium text-foreground leading-tight">{m.label}</div>
                <div className="text-xs text-muted-foreground">{m.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Hero;
