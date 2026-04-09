import { Terminal } from "lucide-react";

const FooterSection = () => (
  <footer className="py-12 border-t border-border">
    <div className="container px-6 text-center">
      <div className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground mb-2">
        <Terminal className="w-3 h-3 text-glow-green" />
        <span>system.exit(0)</span>
      </div>
      <p className="text-xs text-slate-dim">Built with precision. © 2025</p>
    </div>
  </footer>
);

export default FooterSection;
