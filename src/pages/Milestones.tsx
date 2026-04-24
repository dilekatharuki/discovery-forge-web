import PageHeader from "@/components/layout/PageHeader";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Award } from "lucide-react";

const milestones = [
  {
    name: "Project Proposal",
    date: "Week 4 — 2025",
    marks: "6%",
    details: "Initial submission outlining problem, motivation, objectives, scope and proposed methodology for the AITS research."
  },
  {
    name: "Progress Presentation 1 (PP1)",
    date: "Week 10 — 2025",
    marks: "15%",
    details: "Demonstration of 50% project completion: engagement detection module and DQN training pipeline."
  },
  {
    name: "Progress Presentation 2 (PP2)",
    date: "Week 18 — 2025",
    marks: "18%",
    details: "Demonstration of 90% completion: agentic planning, RAG layer integration and end-to-end closed-loop evaluation."
  },
  {
    name: "Final Report",
    date: "Week 22 — 2025",
    marks: "19%",
    details: "Complete thesis document covering background, methodology, implementation, evaluation and discussion."
  },
  {
    name: "Final Presentation & Viva",
    date: "Week 24 — 2025",
    marks: "22%",
    details: "Final defense including live demonstration and individual viva-voce examination."
  },
  {
    name: "Research Paper",
    date: "Week 26 — 2025",
    marks: "10%",
    details: "IEEE-format research paper submission documenting the proposed AITS framework and results."
  },
];

const Milestones = () => (
  <div className="bg-blue-50 min-h-screen">
    <PageHeader
      eyebrow="Milestones"
      title="Project Milestones & Assessments"
      description="All assessments scheduled across the project lifecycle, with allocated marks and key deliverables."
    />
    <section className="container py-16">
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {milestones.map((m, idx) => (
          <AccordionItem key={m.name} value={`item-${idx}`} className="border border-border rounded-lg mb-3 px-4 bg-card">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="font-display font-semibold text-foreground text-left">{m.name}</span>
                <span className="text-sm font-medium text-accent ml-4">{m.marks}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Calendar className="h-4 w-4 text-accent" /> {m.date}
                <span className="mx-2">·</span>
                <Award className="h-4 w-4 text-accent" /> Allocated marks: {m.marks}
              </div>
              <p className="leading-relaxed">{m.details}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </div>
);

export default Milestones;