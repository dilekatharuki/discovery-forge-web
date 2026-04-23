import PageHeader from "@/components/layout/PageHeader";
import { FileText, Download, Clock } from "lucide-react";

const docs = [
  { name: "Project Charter", desc: "Initial project scope, stakeholders and deliverables.", status: "available" },
  { name: "Proposal Document", desc: "Full proposal covering problem, objectives, methodology and timeline.", status: "available" },
  { name: "Status Document I", desc: "Mid-progress status report following PP1.", status: "available" },
  { name: "Status Document II", desc: "Status report following PP2.", status: "pending" },
  { name: "Final Thesis (Main)", desc: "Combined final thesis document for the group.", status: "pending" },
  { name: "Final Thesis — B.A.T. Dilshan", desc: "Individual final document — Reinforcement Learning component.", status: "pending" },
  { name: "Final Thesis — L.B.S. Kaushalya", desc: "Individual final document — Engagement Detection component.", status: "pending" },
  { name: "Final Thesis — D.T. Gunawardena", desc: "Individual final document — Agentic AI Planning component.", status: "pending" },
  { name: "Final Thesis — A.C. Kuruppuarachchi", desc: "Individual final document — RAG Content Generation component.", status: "pending" },
  { name: "Research Paper", desc: "IEEE-format research paper.", status: "available" },
  { name: "Logbook", desc: "Weekly meeting logbook with supervisor and co-supervisor.", status: "available" },
];

const Documents = () => (
  <>
    <PageHeader
      eyebrow="Documents"
      title="Project Documents"
      description="All documents produced during the project. Pending items will be linked once submitted."
    />
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {docs.map((d) => {
          const available = d.status === "available";
          return (
            <div
              key={d.name}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant transition-smooth"
            >
              <span className="h-11 w-11 shrink-0 rounded-lg bg-gradient-accent text-primary-foreground flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-foreground">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
              <button
                disabled={!available}
                className={`flex items-center gap-1 text-sm font-medium shrink-0 ${
                  available ? "text-accent hover:text-primary" : "text-muted-foreground cursor-not-allowed"
                }`}
              >
                {available ? <><Download className="h-4 w-4" /> View</> : <><Clock className="h-4 w-4" /> Pending</>}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Documents;