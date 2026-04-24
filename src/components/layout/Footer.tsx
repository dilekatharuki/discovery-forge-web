import { Mail, MapPin, Brain } from "lucide-react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
};

const Footer = () => (
  <footer className="border-t border-border bg-secondary/40">
    <div className="container py-12 grid gap-8 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 font-display font-bold text-foreground mb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-accent text-primary-foreground">
            <Brain className="h-4 w-4" />
          </span>
          AITS Research
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          An Agentic AI-Driven Adaptive Intelligent Tutoring System combining
          reinforcement learning, emotion-aware vision and RAG.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><button onClick={() => scrollTo("domain")} className="hover:text-primary">Domain & Methodology</button></li>
          <li><button onClick={() => scrollTo("milestones")} className="hover:text-primary">Milestones</button></li>
          <li><button onClick={() => scrollTo("documents")} className="hover:text-primary">Documents</button></li>
          <li><button onClick={() => scrollTo("about")} className="hover:text-primary">About Us</button></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-3">Contact</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />SLIIT, Malabe, Sri Lanka</li>
          <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" />it22915818@my.sliit.lk</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;