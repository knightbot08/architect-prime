import { Terminal, Mail, MapPin, Linkedin, Github, Calendar, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const FooterSection = () => {
  const [calOpen, setCalOpen] = useState(false);
  const calInitialized = useRef(false);

  useEffect(() => {
    if (!calOpen) return;

    const initCal = () => {
      if (!window.Cal) return;
      if (!calInitialized.current) {
        window.Cal("init", { origin: "https://cal.com" });
        calInitialized.current = true;
      }
      window.Cal("inline", {
        elementOrSelector: "#cal-modal-inline",
        calLink: "karl-alamida-yr8o5v/discovery-call",
        config: { theme: "dark" },
      });
    };

    if (window.Cal) {
      initCal();
    } else {
      const existing = document.querySelector<HTMLScriptElement>('script[data-cal-embed]');
      if (existing) {
        existing.addEventListener("load", initCal, { once: true });
      } else {
        const script = document.createElement("script");
        script.dataset.calEmbed = "true";
        script.text = `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");`;
        document.head.appendChild(script);
        initCal();
      }
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      const el = document.getElementById("cal-modal-inline");
      if (el) el.innerHTML = "";
    };
  }, [calOpen]);

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

          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => setCalOpen(true)}
            className="w-full flex flex-col items-center justify-center gap-1 py-5 px-6 rounded-md bg-primary text-primary-foreground font-mono hover:bg-primary/90 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-base font-semibold">Book a Discovery Call</span>
            <span className="text-xs opacity-75">30 min · Free · I'll ask about your ops before pitching anything</span>
          </button>

          {/* Secondary row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-10">
            <a
              href="mailto:alamidakarl@gmail.com"
              className="flex items-center gap-3 p-4 border border-border rounded-md bg-card font-mono text-sm text-secondary-foreground hover:border-primary/50 transition-colors"
            >
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>alamidakarl@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 p-4 border border-border rounded-md bg-card font-mono text-sm text-secondary-foreground">
              <MapPin className="w-4 h-4 text-glow-blue shrink-0" />
              <span>Solano, Philippines</span>
            </div>
          </div>

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

      {calOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 md:p-4"
          onClick={() => setCalOpen(false)}
        >
          <div
            className="relative w-[95vw] md:w-full md:min-w-[900px] max-w-[1000px] max-h-[95vh] min-h-[600px] bg-card border border-border rounded-xl shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setCalOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-9 h-9 rounded-md bg-background/80 border border-border text-foreground hover:bg-background transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div id="cal-modal-inline" style={{ width: "100%", minHeight: "650px" }} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default FooterSection;
