import { Terminal, Mail, MapPin, MessageCircle, Linkedin, Github, Send, Calendar, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    Cal?: any;
  }
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const FooterSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:alamidakarl@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Opening your email client", description: "Your draft is ready to send." });
    }, 600);
  };

  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 font-mono text-sm text-glow-green mb-6">
            <Terminal className="w-4 h-4" />
            <span>contact --init</span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Let's build something <span className="text-primary text-glow-blue">together</span>.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-border rounded-md bg-card hover:border-primary/50 transition-all group">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <span className="font-mono text-sm text-secondary-foreground group-hover:text-foreground transition-colors break-all">📅 Book a call on Cal.com</span>
            </a>
            <div className="flex items-center gap-3 p-4 border border-border rounded-md bg-card">
              <MapPin className="w-4 h-4 text-glow-blue shrink-0" />
              <span className="font-mono text-sm text-secondary-foreground">Solano, Philippines</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={onSubmit} className="p-6 border border-border rounded-md bg-card space-y-4 mb-10">
            <div className="font-mono text-xs text-glow-green uppercase tracking-wider">// send a message</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                maxLength={100}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-md font-mono text-sm text-foreground focus:outline-none focus:border-glow-green focus:ring-1 focus:ring-glow-green/40 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                maxLength={255}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-md font-mono text-sm text-foreground focus:outline-none focus:border-glow-green focus:ring-1 focus:ring-glow-green/40 transition-colors"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your message..."
              value={form.message}
              maxLength={1000}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-3 py-2 bg-background border border-border rounded-md font-mono text-sm text-foreground focus:outline-none focus:border-glow-green focus:ring-1 focus:ring-glow-green/40 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              Send Message →
            </button>
          </form>

          {/* Socials */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="GitHub" className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-muted-foreground hover:text-glow-green hover:border-glow-green transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground mb-2">
              <Terminal className="w-3 h-3 text-glow-green" />
              <span>system.exit(0)</span>
            </div>
            <p className="text-xs text-slate-dim">
              Karl Angelo Alamida · Built with precision · © 2025 · Open to freelance work worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
