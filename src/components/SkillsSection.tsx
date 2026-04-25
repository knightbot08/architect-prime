import { motion } from "framer-motion";
import { Bot, Workflow, Zap, Webhook, Calendar, Mail, UserCog, Server, Lock, Wrench, Wifi, GitBranch } from "lucide-react";

const skills = [
  // Automation — highlighted first
  { icon: Bot, label: "AI Automation & LLM Integration", color: "text-glow-green" },
  { icon: Workflow, label: "n8n Workflow Engineering", color: "text-glow-green" },
  { icon: Zap, label: "Zapier & Make.com Automation", color: "text-glow-green" },
  { icon: Webhook, label: "API & Webhook Integrations", color: "text-glow-green" },
  { icon: GitBranch, label: "Process Automation & Routing", color: "text-glow-green" },
  // Appointment / Accounts
  { icon: Calendar, label: "Appointment Setting", color: "text-primary" },
  { icon: Mail, label: "High-Volume Inbox Management", color: "text-primary" },
  { icon: UserCog, label: "Multi-Account Operations", color: "text-primary" },
  // IT Support
  { icon: Server, label: "Virtual Machine Management", color: "text-glow-blue" },
  { icon: Lock, label: "WireGuard VPN Configuration", color: "text-glow-blue" },
  { icon: Wrench, label: "Hardware & Software Troubleshooting", color: "text-glow-blue" },
  { icon: Wifi, label: "Networking & CCTV Setup", color: "text-glow-blue" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <SectionHeader index="01" title="Technical Capabilities" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center gap-4 p-4 border border-border rounded-md bg-card hover:border-primary/50 hover:border-glow-blue transition-all"
            >
              <skill.icon className={`w-5 h-5 ${skill.color} shrink-0`} />
              <span className="text-sm font-mono text-secondary-foreground group-hover:text-foreground transition-colors">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({ index, title }: { index: string; title: string }) => (
  <div className="flex items-center gap-4 mb-2">
    <span className="font-mono text-sm text-glow-green">[{index}]</span>
    <h2 className="text-3xl font-heading font-bold text-foreground">{title}</h2>
    <div className="flex-1 h-px bg-border ml-4" />
  </div>
);

export default SkillsSection;
