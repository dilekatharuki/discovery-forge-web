import PageHeader from "@/components/layout/PageHeader";
import { Send } from "lucide-react";
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
    const subject = encodeURIComponent(`Edusynth Inquiry from ${name}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${name}\n${data.get("email")}`);
    window.location.href = `mailto:ai.edusynth@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Have questions about our research? We'd love to hear from you."
      />
      
      <section className="container py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </Label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-background border-border" 
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email address
                </Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="w-full bg-background border-border" 
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message or Query
                </Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6}  
                  className="w-full bg-background border-border resize-none" 
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-accent hover:opacity-90 text-primary-foreground font-semibold py-2.5"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-card h-fit">
            <h3 className="text-lg font-display font-bold text-foreground mb-6">Contact Details</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-foreground leading-relaxed">
                  For further queries please reach us at
                </p>
                <a href="mailto:ai.edusynth@gmail.com" className="text-base font-semibold text-accent hover:text-primary mt-2 block">
                  ai.edusynth@gmail.com
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-foreground leading-relaxed">
                  Hope this project helped you in some manner. Thank you!
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-medium text-foreground">-Team Edusynth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;