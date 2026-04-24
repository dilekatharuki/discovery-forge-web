import PageHeader from "@/components/layout/PageHeader";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FormEvent } from "react";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message ready — opening your email client…");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const subject = encodeURIComponent(`AITS Inquiry from ${name}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${name} (${data.get("email")})`);
    window.location.href = `mailto:it22915818@my.sliit.lk?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Reach out for collaboration, questions about our research, or to request access to our datasets and code."
      />
      <section className="container py-16 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">Contact Information</h2>
          <p className="text-muted-foreground mt-2">We respond within 2-3 business days.</p>
          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="h-11 w-11 shrink-0 rounded-lg bg-gradient-accent text-primary-foreground flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Address</p>
                <p className="text-sm text-muted-foreground">SLIIT — Sri Lanka Institute of Information Technology<br />New Kandy Rd, Malabe 10115, Sri Lanka</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-11 w-11 shrink-0 rounded-lg bg-gradient-accent text-primary-foreground flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a href="mailto:it22915818@my.sliit.lk" className="text-sm text-accent hover:text-primary">it22915818@my.sliit.lk</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-11 w-11 shrink-0 rounded-lg bg-gradient-accent text-primary-foreground flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">+94 11 754 4801 (SLIIT main)</p>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-5">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required placeholder="Your full name" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required rows={6} placeholder="How can we help?" className="mt-1.5" />
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-accent hover:opacity-90 text-primary-foreground shadow-elegant">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;