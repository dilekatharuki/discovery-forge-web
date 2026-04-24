import { useState, useEffect } from "react";
import { Menu, X, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "domain", label: "Domain" },
  { id: "milestones", label: "Milestones" },
  { id: "documents", label: "Documents" },
  { id: "presentations", label: "Slides" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 font-display font-bold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent text-primary-foreground shadow-elegant">
            <Brain className="h-5 w-5" />
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="text-lg tracking-tight">Edusynth</span>
          </span>
        </button>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "relative px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                active === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="container flex flex-col py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "px-3 py-3 rounded-md text-sm font-medium text-left",
                  active === item.id ? "text-primary bg-secondary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;