import PageHeader from "@/components/layout/PageHeader";
import { Mail, GraduationCap, Award } from "lucide-react";

const students = [
  { id: "IT22915818", name: "B.A.T. Dilshan", role: "Reinforcement Learning · DQN Decision Engine", email: "it22915818@my.sliit.lk" },
  { id: "IT22356772", name: "L.B.S. Kaushalya", role: "Computer Vision · Engagement Detection", email: "it22356772@my.sliit.lk" },
  { id: "IT22916594", name: "D.T. Gunawardena", role: "Agentic AI · Multi-step Planning", email: "it22916594@my.sliit.lk" },
  { id: "IT22334060", name: "A.C. Kuruppuarachchi", role: "RAG Content Generation · LLM Integration", email: "it22334060@my.sliit.lk" },
];

const supervisors = [
  { name: "Mr. J. Perera", role: "Supervisor · Faculty of Computing, SLIIT", email: "jeewaka.p@sliit.lk" },
  { name: "Ms. K. Manatunga", role: "Co-Supervisor · Faculty of Computing, SLIIT", email: "kalpani.m@sliit.lk" },
];

const initials = (name: string) => name.split(/[\s.]+/).filter(Boolean).map(s => s[0]).slice(0, 2).join("").toUpperCase();

const PersonCard = ({ name, role, email, id }: { name: string; role: string; email: string; id?: string }) => (
  <div className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth">
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 rounded-full bg-gradient-accent text-primary-foreground font-display font-bold text-lg flex items-center justify-center shadow-elegant">
        {initials(name)}
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground">{name}</h3>
        {id && <p className="text-xs text-muted-foreground">{id}</p>}
      </div>
    </div>
    <p className="mt-4 text-sm text-foreground">{role}</p>
    <a href={`mailto:${email}`} className="mt-3 inline-flex items-center gap-2 text-sm text-accent hover:text-primary">
      <Mail className="h-4 w-4" /> {email}
    </a>
  </div>
);

const About = () => (
  <>
    <PageHeader
      eyebrow="About Us"
      title="Meet the Research Team"
      description="Final-year undergraduate research group from the Faculty of Computing, Department of Computer Science, SLIIT — Malabe, Sri Lanka."
    />
    <section className="container py-16">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="h-6 w-6 text-accent" />
        <h2 className="text-2xl font-display font-bold text-foreground">Group Members</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {students.map((p) => <PersonCard key={p.id} {...p} />)}
      </div>

      <div className="flex items-center gap-3 mt-16 mb-6">
        <Award className="h-6 w-6 text-accent" />
        <h2 className="text-2xl font-display font-bold text-foreground">Supervisors</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
        {supervisors.map((p) => <PersonCard key={p.email} {...p} />)}
      </div>
    </section>
  </>
);

export default About;