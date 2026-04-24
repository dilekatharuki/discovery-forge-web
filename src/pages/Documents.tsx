import PageHeader from "@/components/layout/PageHeader";
import { FileText, Download, Clock } from "lucide-react";

const docs = [
  {
    name: "Topic Assessment",
    desc: "Initial project scope, stakeholders and deliverables.",
    status: "available",
    url: "https://drive.google.com/file/d/1524GndEXKvKF0JPbR0-11di3iDZD9xQb/view?usp=sharing"
  },
  {
    name: "Project Charter",
    desc: "Initial project scope, stakeholders and deliverables.",
    status: "available",
    url: "https://drive.google.com/file/d/1-wJkgGR60sMJmAVTXb0mJI1vMybLDYKx/view?usp=sharing"
  },
  {
    name: "Proposal Documents",
    desc: "Full proposal covering problem, objectives, methodology and timeline.",
    status: "available",
    url: "https://drive.google.com/drive/folders/1ZNezTvySqtsSjtZRYm3n0zgZlQE4EBJm?usp=sharing"
  },
  {
    name: "Checklist Documents",
    desc: "Group-specific checklist documents.",
    status: "available",
    url: "https://drive.google.com/drive/folders/1p8aL_wEgi6raNOAwJoTaD3cKh1cDcyy2?usp=sharing"
  },
  {
    name: "Final Report",
    desc: "Combined final thesis document for the group.",
    status: "pending"
  },
  {
    name: "Research Paper",
    desc: "IEEE-format research paper.",
    status: "pending"
  },
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
              {d.url ? (
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium shrink-0 text-accent hover:text-primary"
                  title={`Download or view ${d.name}`}
                >
                  <Download className="h-4 w-4" /> View
                </a>
              ) : (
                <span className="flex items-center gap-1 text-sm font-medium shrink-0 text-muted-foreground cursor-not-allowed">
                  <Clock className="h-4 w-4" /> Pending
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Documents;