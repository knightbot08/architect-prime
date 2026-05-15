import { motion } from "framer-motion";
import { Terminal, ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import karlAvatar from "@/assets/karl-avatar.png";

const terminalLines = [
  "> Connecting to Google Sheets...  ✓",
  "> Fetching new leads (12 found)...  ✓",
  "> Running AI qualification filter...  ✓",
  "> Routing to Airtable CRM...  ✓",
  "> Sending confirmation via Gmail...  ✓",
  "> Workflow complete. Next run in 15m.",
];

const TerminalMock = () => {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible >= terminalLines.length) {
      const t = setTimeout(() => setVisible(0), 2500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible((v) => v + 1), 700);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="w-full max-w-md rounded-md border border-border bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-background/50">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-glow-green/70" />
        <span className="ml-2 text-[10px] font-mono text-muted-foreground">workflow.log</span>
      </div>
      <div className="p-4 font-mono text-xs text-glow-green min-h-[180px] space-y-1.5">
        {terminalLines.slice(0, visible).map((l, i) => (
          <motion.div
            key={`${visible}-${i}`}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            {l}
          </motion.div>
        ))}
        {visible < terminalLines.length && (
          <span className="inline-block w-2 h-3 bg-glow-green animate-pulse-glow" />
        )}
      </div>
    </div>
  );
};

const AvatarCard = () => {
  const [hover, setHover] = useState(false);
  const SIZE = 220;
  const SPACING = 28;
  const cols = Math.floor(SIZE / SPACING);
  const rows = Math.floor(SIZE / SPACING);
  const cx0 = SIZE / 2;
  const cy0 = SIZE * 0.4;
  const maxDist = Math.hypot(SIZE / 2, SIZE / 2);
  const dots = [] as { x: number; y: number; delay: number; dur: number; powerDelay: number }[];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * SPACING + SPACING / 2;
      const y = r * SPACING + SPACING / 2;
      const seed = (r * 31 + c * 17) % 100;
      const dist = Math.hypot(x - SIZE / 2, y - SIZE / 2);
      const powerDelay = (1 - dist / maxDist) * 0.6;
      dots.push({
        x,
        y,
        delay: powerDelay + (seed / 100) * 0.4,
        dur: 1.5 + (seed % 16) / 10,
        powerDelay,
      });
    }
  }

  const maskId = "avatar-dot-mask";

  return (
    <div className="flex flex-col items-center lg:items-start">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setHover((h) => !h)}
        className="relative overflow-hidden border-[1.5px] border-glow-green cursor-pointer group"
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: 16,
          boxShadow: "0 0 30px hsl(var(--glow-green) / 0.25), 0 0 60px hsl(var(--glow-green) / 0.1)",
        }}
      >
        <img
          src={karlAvatar}
          alt="Karl Angelo Alamida"
          className="w-full h-full object-cover"
        />

        {/* Right-side subject backlight / rim glow tracing hair + shoulder silhouette */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{
            zIndex: 10,
            opacity: hover ? 0.7 : 0,
            transition: "opacity 0.6s ease",
            filter: "blur(6px)",
          }}
        >
          <path
            d="M 165,20 C 185,50 195,90 185,130 C 178,155 165,170 150,185"
            fill="none"
            stroke="#00ccff"
            strokeWidth={8}
            strokeLinecap="round"
          />
        </svg>

        {/* Dot grid overlay — masked to background-only regions (edges/corners) */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          style={{ opacity: hover ? 1 : 0, transition: "opacity 0.6s ease" }}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
        >
          <defs>
            <mask id={maskId}>
              <rect width={SIZE} height={SIZE} fill="white" />
              <ellipse cx={cx0} cy={cy0} rx={60} ry={90} fill="black" />
            </mask>
          </defs>
          <g mask={`url(#${maskId})`}>
            {dots.map((d, i) => (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r={1}
                fill="#00d4ff"
                style={{
                  animation: hover
                    ? `dotBlink ${d.dur}s ease-in-out ${d.delay}s infinite`
                    : "none",
                  opacity: 0,
                }}
              />
            ))}
          </g>
        </svg>

        <style>{`
          @keyframes dotBlink {
            0%, 100% { opacity: 0; }
            40% { opacity: 0.3; }
            60% { opacity: 0.05; }
          }
        `}</style>
      </div>
      <span className="mt-2 font-mono text-[11px] text-glow-green/80">{">_"} karl.jpg</span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-20">
      <div className="absolute inset-0 scanline" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-green to-transparent opacity-30" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] gap-8 items-center"
        >
          {/* Avatar */}
          <AvatarCard />


          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4 font-mono text-sm text-muted-foreground">
              <Terminal className="w-4 h-4 text-glow-green" />
              <span className="text-glow-green">karl@alamida</span>
              <span className="text-slate-dim">:~$</span>
              <span>whoami</span>
              <span className="animate-pulse-glow text-primary">█</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-glow-green/40 bg-glow-green/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-glow-green opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-glow-green" />
              </span>
              <span className="text-xs font-mono text-glow-green">Available for freelance projects</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-4">
              <span className="text-foreground">Karl Angelo</span>
              <br />
              <span className="text-primary text-glow-blue">Alamida</span>
            </h1>

            <p className="font-mono text-sm md:text-base text-glow-green mt-4">
              Automation Specialist · IT Support Technician · Accounts &amp; Ops
            </p>

            <p className="text-base md:text-lg text-secondary-foreground max-w-2xl mt-6 leading-relaxed font-light">
              I build automation workflows that eliminate manual work — using <span className="text-glow-green">n8n, Make.com, Zapier, and AI agents</span>. From lead qualification pipelines to payroll systems, I turn messy processes into self-running machines.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Workflow Automation", "AI Agent Development", "CRM & Lead Systems"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono border border-border rounded-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#workflows"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-glow-green/50 text-glow-green font-mono text-sm hover:bg-glow-green/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Terminal mock - desktop only */}
          <div className="hidden lg:block">
            <TerminalMock />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
