import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

const roles = [
  {
    title: "Appointment Setter & Facebook Accounts Manager",
    period: "2025–Present",
    items: [
      "Built and managed a 40+ account Facebook operation, deploying n8n automation workflows to streamline lead qualification and reduce manual follow-up time across a 6-property rental portfolio.",
      "Diagnosed and resolved Facebook account issues — restrictions, disabled accounts, verification challenges",
      "Administered IT infrastructure: virtual machines, WireGuard VPN, Multilogin browser environments for multi-account ops",
      "Designed and deployed a location-based AI agent using Google Maps API and OpenRouter/DeepSeek to match prospects to properties across 90+ listings",
      "Coordinated and optimized workflows to maintain consistent account health and messaging performance",
    ],
    tools: ["n8n", "Facebook Marketplace", "Multilogin", "WireGuard VPN", "Google Sheets"],
  },
  {
    title: "Automation Specialist — Self-Initiated Projects",
    period: "2025–Present",
    label: "Freelance / Independent",
    items: [
      "Built and deployed automation workflows across n8n and Zapier for real business operations",
      "Developed a live AI agent for FB Messenger handling lead qualification across a room rental operation",
      "Built a location-based property matching system using Google Maps API, Google Sheets, and OpenRouter/DeepSeek",
      "Designed a 5-Zap real estate lead capture and follow-up system integrating Facebook, HubSpot, Twilio, and Gmail",
      "Automated bi-monthly salary invoice generation using n8n, Google Sheets, and Documentero",
    ],
    tools: ["n8n", "Zapier", "OpenRouter", "Google Sheets", "Airtable", "HubSpot", "Twilio", "ManyChat", "Documentero"],
  },
  {
    title: "IT Support Technician — MLhuillier INC, Philippines",
    period: "2017–2023",
    items: [
      "Workstation setup, deployment, hardware & software installation and troubleshooting",
      "Basic network installation, CCTV and alarm system setup and configuration",
      "Managed and maintained IT assets across the organization",
      "Provided end-user technical support and resolved escalated issues across multiple branches",
    ],
    tools: ["Hardware Troubleshooting", "Network Setup", "CCTV", "Asset Management"],
  },
];

const learning = {
  title: "Automation Specialist — In Progress",
  items: [
    "Workflow Automation — Shipping production workflows in n8n, Make.com, and Zapier for real business operations",
    "AI Agents & Prompt Engineering — Built and deployed a live AI agent handling lead qualification via FB Messenger using OpenRouter and n8n",
    "CRM & Pipeline Automation — Implemented lead capture and follow-up systems using HighLevel (GHL), HubSpot, and Airtable for client management",
    "API & Webhook Integrations — Connecting REST APIs, parsing JSON responses, and wiring webhooks between SaaS platforms across multiple live workflows",
    "No-Code Development — Using Lovable and v0.app to prototype and deploy functional web interfaces without a traditional dev background",
  ],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/50 relative">
      <div className="container px-6">
        <SectionHeader index="05" title="Impact & Experience" />

        {/* Roles */}
        <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-6 mt-12">// Work Experience</h3>
        <div className="space-y-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-border rounded-md bg-background border-l-2 border-l-primary"
            >
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div className="flex items-start gap-2">
                  <Briefcase className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{role.title}</h4>
                    {role.label && (
                      <p className="text-xs text-muted-foreground mt-0.5">{role.label}</p>
                    )}
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{role.period}</span>
              </div>
              <ul className="space-y-1.5">
                {role.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <span className="text-glow-green mt-1.5 text-[6px]">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border/60">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">// Tools Used</div>
                <div className="flex flex-wrap gap-2">
                  {role.tools.map((t) => (
                    <span key={t} className="text-xs font-mono text-glow-green border border-glow-green/30 px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <h3 className="font-mono text-sm text-glow-green uppercase tracking-wider mb-6 mt-12">// Active Development Focus</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 border border-border rounded-md bg-background border-l-2 border-l-glow-green"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-glow-green animate-pulse-glow">●</span>
            <h4 className="font-heading font-semibold text-foreground">{learning.title}</h4>
          </div>
          <ul className="space-y-1.5">
            {learning.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-secondary-foreground">
                <span className="text-glow-green mt-1.5 text-[6px]">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-6 mt-12">// Education</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 border border-border rounded-md bg-background border-l-2 border-l-primary"
        >
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h4 className="font-heading font-semibold text-foreground">Bachelor of Science in Information Technology</h4>
              <p className="text-sm text-muted-foreground mt-1">Aldersgate College, Philippines</p>
            </div>
            <span className="text-xs font-mono text-muted-foreground">2011–2015</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
