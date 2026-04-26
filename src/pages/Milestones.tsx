import PageHeader from "@/components/layout/PageHeader";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Award } from "lucide-react";

const milestones = [
  {
    name: "Project Proposal",
    date: "September 2025",
    marks: "12%",
    details: "A Project Proposal is presented to potential clients to receive funding or get your project approved."
  },
  {
    name: "Progress Presentation 1 (PP1)",
    date: "January 2026",
    marks: "15%",
    details: "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the"
  },
  {
    name: "Progress Presentation 2 (PP2)",
    date: "March 2026",
    marks: "18%",
    details: "Progress Presentation II reviews the 90% completetion status demonstration of the project"
  },
   {
    name: "Final Presentation & Viva",
    date: "May 2026",
    marks: "20%",
    details: "Viva is held individually to assess each members contribution to the project."
  },
  {
    name: "Final Report",
    date: "May 2026",
    marks: "19%",
    details: "Complete thesis document covering background, methodology, implementation, evaluation and discussion."
  },
 
  {
    name: "Research Paper",
    date: "May 2026",
    marks: "10%",
    details: "IEEE-format research paper submission documenting the proposed Edusynthframework and results."
  },

   {
    name: "Website Evaluation",
    date: "May 2026",
    marks: "2%",
    details: "Evaluation of the developed website's functionality, user experience, and performance."
  },
  {
    name: "Logbook",
    date: "May 2026",
    marks: "4%",
    details: "Documentation of all project activities, meetings, and progress updates."
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