import PageHeader from "@/components/layout/PageHeader";
import { Presentation, Download, Clock } from "lucide-react";

const slides = [
  {
    name: "Proposal Presentation",
    date: "Week 4",
    status: "available",
    url: "https://docs.google.com/presentation/d/1xuzEcIZqIo5RfaPmqAn8yJrXO52uc7wW/edit?usp=sharing&ouid=111241369680179771674&rtpof=true&sd=true"
  },
  {
    name: "Progress Presentation 1",
    date: "Week 10",
    status: "available",
    url: "https://docs.google.com/presentation/d/1SX9cHLXUHDonjAgsfnvvZgWQ4STUrH0k/edit?usp=sharing&ouid=111241369680179771674&rtpof=true&sd=true"
  },
  {
    name: "Progress Presentation 2",
    date: "Week 18",
    status: "available",
    url: "https://docs.google.com/presentation/d/14GHuraumcJ7GQUpV7j-XqYwpxjtFN61u/edit?usp=sharing&ouid=111241369680179771674&rtpof=true&sd=true"
  },
  {
    name: "Final Presentation",
    date: "Week 24",
    status: "available",
    url: "https://docs.google.com/presentation/d/1u0WoOBLbBTLvKZF_BWkEjJ1P_j0qkfZP/edit?usp=sharing&ouid=111241369680179771674&rtpof=true&sd=true"
  },
];

const Presentations = () => (
  <div className="bg-blue-50 min-h-screen">
    <PageHeader
      eyebrow="Presentations"
      title="Presentation Slides"
      description="Slides used during proposal, progress and final presentations. Future presentation slots are reserved below."
    />
    <section className="container py-16">
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {slides.map((s) => {
          const available = s.status === "available";
          return (
            <div key={s.name} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth">
              <span className="h-11 w-11 rounded-lg bg-gradient-accent text-primary-foreground flex items-center justify-center mb-4">
                <Presentation className="h-5 w-5" />
              </span>
              <h3 className="font-display font-semibold text-foreground">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.date}</p>
              {s.url ? (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-primary"
                  title={`View ${s.name}`}
                >
                  <Download className="h-4 w-4" /> Download Slides
                </a>
              ) : (
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground cursor-not-allowed">
                  <Clock className="h-4 w-4" /> Coming soon
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  </div>
);

export default Presentations;