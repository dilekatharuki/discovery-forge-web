import PageHeader from "@/components/layout/PageHeader";
import { Mail, GraduationCap, Award } from "lucide-react";

const students = [
  { id: "IT22915818", name: "B.A.T. Dilshan", role:"Group Leader", email: "it22915818@my.sliit.lk", image: "/team/dilshan.jpg" },
  { id: "IT22356772", name: "L.B.S. Kaushalya", role: "Group Member", email: "it22356772@my.sliit.lk", image: "/team/kaushalya.jpg" },
  { id: "IT22916594", name: "D.T. Gunawardena", role: "Group Member", email: "it22916594@my.sliit.lk", image: "/team/gunawardena.jpg" },
  { id: "IT22334060", name: "A.C. Kuruppuarachchi", role: "Group Member", email: "it22334060@my.sliit.lk", image: "/team/kuruppuarachchi.jpg" },
];

const supervisors = [
  { name: "Mr. J. Perera", role: "Supervisor · Faculty of Computing, SLIIT", email: "jeewaka.p@sliit.lk" },
  { name: "Ms. K. Manatunga", role: "Co-Supervisor · Faculty of Computing, SLIIT", email: "kalpani.m@sliit.lk" },
];

const initials = (name: string) => name.split(/[\s.]+/).filter(Boolean).map(s => s[0]).slice(0, 2).join("").toUpperCase();

const StudentCard = ({ name, role, email, id, image }: { name: string; role: string; email: string; id: string; image?: string }) => (
  <div className="rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elegant transition-smooth flex flex-col">
    <div className="aspect-square bg-gradient-accent text-primary-foreground font-display font-bold text-2xl flex items-center justify-center overflow-hidden">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-contain p-4" />
      ) : (
        <span>{initials(name)}</span>
      )}
    </div>
    <div className="p-6">
      <h3 className="font-display font-semibold text-foreground">{name}</h3>
      <p className="text-xs text-muted-foreground mt-1">{id}</p>
      <p className="mt-4 text-sm text-foreground font-medium">{role}</p>
      <a href={`mailto:${email}`} className="mt-3 inline-flex items-center gap-2 text-sm text-accent hover:text-primary">
        <Mail className="h-4 w-4" /> {email}
      </a>
    </div>
  </div>
);

const SupervisorCard = ({ name, role, email }: { name: string; role: string; email: string }) => (
  <div className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth">
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 rounded-full bg-gradient-accent text-primary-foreground font-display font-bold text-lg flex items-center justify-center shadow-elegant overflow-hidden flex-shrink-0">
        <span>{initials(name)}</span>
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground">{name}</h3>
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
      title="Meet Our Team"
    />
    <section className="container py-16">
      <div className="flex items-center gap-3 mb-6">
        <Award className="h-6 w-6 text-accent" />
        <h2 className="text-2xl font-display font-bold text-foreground">Supervisors</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mb-16">
        {supervisors.map((p) => <SupervisorCard key={p.email} {...p} />)}
      </div>

      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="h-6 w-6 text-accent" />
        <h2 className="text-2xl font-display font-bold text-foreground">Group Members</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {students.map((p) => <StudentCard key={p.id} {...p} />)}
      </div>
    </section>
  </>
);

export default About;