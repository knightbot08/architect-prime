import { motion } from "framer-motion";
import { Terminal, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 scanline" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-green to-transparent opacity-30" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-6 font-mono text-sm text-muted-foreground">
            <Terminal className="w-4 h-4 text-glow-green" />
            <span className="text-glow-green">karl@alamida</span>
            <span className="text-slate-dim">:~$</span>
            <span>whoami</span>
            <span className="animate-pulse-glow text-primary">█</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-4">
            <span className="text-foreground">Karl Angelo</span>
            <br />
            <span className="text-primary text-glow-blue">Alamida</span>
          </h1>

          <p className="font-mono text-sm md:text-base text-glow-green mt-4">
            AI Automation Specialist · IT Support Technician · Accounts Manager · Appointment Setter
          </p>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mt-6 leading-relaxed font-light">
            Building intelligent automation workflows with <span className="text-glow-green">n8n, Make.com, and Zapier</span> — backed by years of hands-on IT support, multi-account operations, and appointment-setting experience. Turning manual processes into self-running systems.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["AI Automation", "n8n / Make / Zapier", "IT Support", "Appointment Setting", "Accounts Manager"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono border border-border rounded-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tag}
              </span>
            ))}
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
