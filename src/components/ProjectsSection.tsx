import { AnimatePresence, motion } from "framer-motion";
import { Bot, Workflow, UserCog, Server, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SkillsSection";

const projects = [
  {
    icon: Bot,
    title: "AI Agent for Room Rentals (FB Messenger)",
    problem: "A Facebook Rentals page received dozens of repetitive inquiries daily, with serious leads getting buried among FAQs.",
    solution: "Built an n8n-powered AI agent connected to Messenger that classifies intent, answers FAQs instantly, and routes qualified leads to a human operator with full context.",
    result: "Handles FAQs and qualifies leads 24/7 without human involvement.",
    tags: ["n8n", "AI Agent", "Messenger"],
  },
  {
    icon: Workflow,
    title: "Salary Invoice Automation",
    problem: "Bi-monthly payroll required manually copying staff data into invoice templates — slow, error-prone, repetitive.",
    solution: "Designed an n8n workflow that pulls staff data from Google Sheets, generates formatted salary invoices automatically, and delivers them on schedule.",
    result: "Eliminated manual spreadsheet entry across bi-monthly payroll cycles.",
    tags: ["n8n", "Sheets", "Payroll"],
  },
  {
    icon: UserCog,
    title: "Multi-Account Operations Stack",
    problem: "Running multiple Facebook accounts for high-volume outreach risks restrictions, cross-contamination, and account loss.",
    solution: "Engineered a hardened stack — virtual machines, WireGuard VPN, Multilogin, residential proxies — with per-account isolation and stable identity fingerprints.",
    result: "Enabled stable operation of 40+ accounts with zero cross-contamination.",
    tags: ["Ops", "Security", "VPN"],
  },
  {
    icon: Server,
    title: "IT Support Playbook (MLhuillier)",
    problem: "Multi-branch operations needed consistent workstation deployment, network setup, and reliable end-user support.",
    solution: "Standardized workstation imaging, network and CCTV configuration, asset tracking, and an escalation playbook across branches.",
    result: "Supported 6+ branch locations over a 6-year tenure.",
    tags: ["IT Support", "Infrastructure"],
  },
];

const ProjectsSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <SectionHeader index="03" title="Project Architecture" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
                className="group border border-border rounded-md bg-card hover:border-glow-blue transition-all relative overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-6"
                  aria-expanded={isOpen}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-start justify-between gap-4 relative">
                    <project.icon className="w-6 h-6 text-primary mb-4" />
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.problem}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-glow-green border border-glow-green/30 px-2 py-0.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-6 space-y-4">
                        <div>
                          <div className="font-mono text-[11px] text-glow-green uppercase tracking-wider mb-1">// Solution</div>
                          <p className="text-sm text-secondary-foreground leading-relaxed">{project.solution}</p>
                        </div>
                        <div className="p-3 rounded-md border border-glow-green/30 bg-glow-green/5">
                          <div className="font-mono text-[11px] text-glow-green uppercase tracking-wider mb-1">// Key Result</div>
                          <p className="text-sm text-foreground">{project.result}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
