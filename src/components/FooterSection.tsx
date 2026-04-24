import { Terminal, Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => (
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a href="mailto:alamidakarl@gmail.com" className="flex items-center gap-3 p-4 border border-border rounded-md bg-card hover:border-primary/50 transition-all group">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <span className="font-mono text-sm text-secondary-foreground group-hover:text-foreground transition-colors break-all">alamidakarl@gmail.com</span>
          </a>
          <a href="tel:+639215415206" className="flex items-center gap-3 p-4 border border-border rounded-md bg-card hover:border-glow-green/50 transition-all group">
            <Phone className="w-4 h-4 text-glow-green shrink-0" />
            <span className="font-mono text-sm text-secondary-foreground group-hover:text-foreground transition-colors">+63 921 541 5206</span>
          </a>
          <div className="flex items-center gap-3 p-4 border border-border rounded-md bg-card">
            <MapPin className="w-4 h-4 text-glow-blue shrink-0" />
            <span className="font-mono text-sm text-secondary-foreground">Solano, Philippines</span>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground mb-2">
            <Terminal className="w-3 h-3 text-glow-green" />
            <span>system.exit(0)</span>
          </div>
          <p className="text-xs text-slate-dim">Karl Angelo Alamida · Built with precision · © 2025</p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
