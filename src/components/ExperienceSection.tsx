import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

const automationHighlights = [
  { name: "n8n", metric: "Building", detail: "Designing multi-step workflows: AI agents, data sync, invoice generation, lead routing." },
  { name: "Make.com", metric: "Practiced", detail: "Branching scenarios with routers, aggregators and error handlers for resilient automations." },
  { name: "Zapier", metric: "Practiced", detail: "Lightweight automations connecting CRMs, forms, email and AI classifiers." },
  { name: "AI Agents", metric: "Shipped", detail: "Conversational AI agent for a Facebook Rentals page that qualifies leads and answers FAQs." },
  { name: "HighLevel (GHL)", metric: "Learning", detail: "Funnels, pipelines and CRM automations for client management and follow-up." },
  { name: "APIs & Webhooks", metric: "Comfortable", detail: "Connecting REST APIs, parsing JSON, and wiring webhooks between SaaS tools." },
];

const roles = [
  {
    title: "Automation & Operations Specialist",
    period: "2025–Present",
    items: [
      "Built and managed a 40+ account Facebook operation, deploying n8n automation workflows to streamline lead qualification and reduce manual follow-up time across a 6-property rental portfolio.",
      "Diagnosed and resolved Facebook account issues — restrictions, disabled accounts, verification challenges",
      "Administered IT infrastructure: virtual machines, WireGuard VPN, Multilogin browser environments for multi-account ops",
      "Built and tested n8n automations to streamline lead qualification and follow-up workflows",
      "Coordinated and optimized workflows to maintain consistent account health and messaging performance",
    ],
    tools: ["n8n", "Facebook Marketplace", "Multilogin", "WireGuard VPN", "Google Sheets"],
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
  title: "AI Automation Specialist — Active Focus",
  items: [
    "Workflow Automation — Building production-ready pipelines in n8n, Make.com and Zapier",
    "AI Agents & Prompt Engineering — Designing LLM-powered agents (OpenAI, Claude) for real client use cases",
    "CRM & Marketing Automation — HighLevel (GoHighLevel) for client management and automated funnels",
    "AI-Assisted Development — Claude Code, Lovable and v0.app for rapid full-stack prototyping",
    "API Integrations — REST, webhooks and JSON wrangling to connect any SaaS to any other SaaS",
  ],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/50 relative">
      <div className="container px-6">
        <SectionHeader index="05" title="Impact & Experience" />

        {/* Automation Highlights — featured first */}
        <div className="mt-12 mb-16">
          <h3 className="font-mono text-sm text-glow-green uppercase tracking-wider mb-6">// Automation Toolkit & Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {automationHighlights.map((ad, i) => (
              <motion.div
                key={ad.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 border border-border rounded-md bg-background hover:border-glow-green/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-semibold text-foreground">{ad.name}</span>
                  <span className="flex items-center gap-1 text-xs font-mono text-glow-green">
                    <Sparkles className="w-3 h-3" />
                    {ad.metric}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{ad.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roles */}
        <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-6">// Work Experience</h3>
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
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <h4 className="font-heading font-semibold text-foreground">{role.title}</h4>
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
        <h3 className="font-mono text-sm text-glow-green uppercase tracking-wider mb-6 mt-12">// Currently Learning</h3>
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
