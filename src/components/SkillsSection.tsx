import { motion } from "framer-motion";
import { Bot, Workflow, Zap, Webhook, Calendar, Mail, UserCog, Server, Lock, Wrench, Wifi, GitBranch } from "lucide-react";

const skills = [
  // Automation — highlighted first
  { icon: Bot, label: "AI Automation & LLM Integration", color: "text-glow-green" },
  { icon: Workflow, label: "n8n Workflow Engineering", color: "text-glow-green" },
  { icon: Zap, label: "Zapier Automation", color: "text-glow-green" },
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

const tiers = [
  {
    label: "Core Tools",
    accent: "border-glow-green text-glow-green",
    items: ["n8n", "Zapier", "HubSpot", "Airtable", "Google Sheets", "ManyChat"],
  },
  {
    label: "Working With",
    accent: "border-primary text-primary",
    items: ["HighLevel (GHL)", "OpenAI / GPT", "Claude", "Webhooks", "REST APIs"],
  },
  {
    label: "Familiar",
    accent: "border-glow-blue text-glow-blue",
    items: [
      "Make.com", "Windows / Linux", "Virtual Machines", "WireGuard VPN", "AnyDesk", "TeamViewer",
      "Networking", "CCTV / Alarm", "Hardware Troubleshooting",
      "Multilogin", "Dolphin Anty", "Residential Proxies", "Google Calendar",
      "Notion", "GitHub", "Lovable", "v0.app", "Vercel", "Claude Code",
    ],
  },
];

const fullBreakdown = [
  {
    title: "AI Automation & Workflow Tools",
    items: ["n8n", "Make.com", "Zapier", "HighLevel (GHL)", "OpenAI / GPT", "Claude", "Lovable AI", "Prompt Engineering", "Webhooks", "REST APIs"],
    accent: "border-glow-green",
  },
  {
    title: "Accounts & Appointment Setting",
    items: ["Facebook Marketplace", "FB Messenger", "Multilogin", "Dolphin Anty", "Residential Proxies", "Google Calendar", "CRM Pipelines", "Email Outreach"],
    accent: "border-primary",
  },
  {
    title: "IT Support & Infrastructure",
    items: ["Windows / Linux", "Virtual Machines", "WireGuard VPN", "AnyDesk", "TeamViewer", "Networking", "CCTV / Alarm Systems", "Hardware Troubleshooting"],
    accent: "border-glow-blue",
  },
  {
    title: "Dev & Productivity",
    items: ["Lovable", "v0.app", "Vercel", "Google Sheets", "Notion", "GitHub", "Claude Code"],
    accent: "border-primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <SectionHeader index="01" title="Skills & Stack" />

        {/* Capabilities */}
        <h3 className="font-mono text-sm text-glow-green uppercase tracking-wider mt-12 mb-6">// Capabilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3, ease: "easeOut" }}
              className="group flex items-center gap-4 p-4 border border-border rounded-md bg-card hover:border-primary/50 hover:border-glow-blue transition-all"
            >
              <skill.icon className={`w-5 h-5 ${skill.color} shrink-0`} />
              <span className="text-sm font-mono text-secondary-foreground group-hover:text-foreground transition-colors">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stack tiers */}
        <h3 className="font-mono text-sm text-primary uppercase tracking-wider mt-12 mb-6">// Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
              className={`p-6 border border-border rounded-md bg-card border-l-2 ${tier.accent}`}
            >
              <h4 className={`font-mono text-xs uppercase tracking-wider mb-4 ${tier.accent.split(" ")[1]}`}>
                {tier.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {tier.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Tool Breakdown */}
        <h3 className="font-mono text-sm text-glow-green uppercase tracking-wider mt-12 mb-6">// Full Tool Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fullBreakdown.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 border border-border rounded-md bg-card ${cat.accent} border-l-2`}
            >
              <h4 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-wider">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded-sm">
                    {item}
                  </span>
                ))}
              </div>
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
