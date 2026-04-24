import { motion } from "framer-motion";
import { CheckCircle2, Briefcase } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

const airdrops = [
  { name: "LayerZero", metric: "Qualified", detail: "Active cross-chain transactions and ecosystem engagement via LayerZero dApps." },
  { name: "zkSync", metric: "Eligible", detail: "Interacted with zkSync Era & Lite — bridging, swapping, providing liquidity, utilizing Paymaster." },
  { name: "Starknet", metric: "Qualified", detail: "Maintained $100+ balance, $100+ transaction volume over 3+ months. Participated in testnet activities." },
  { name: "Scroll", metric: "200+ Marks", detail: "Interacted with officially endorsed zkEVM dApps, completed transactions, contributed to ecosystem growth, minted badges." },
  { name: "Grass", metric: "Qualified", detail: "Leveraged decentralized compute network participation to qualify for rewards." },
  { name: "Orbiter", metric: "Eligible", detail: "Completed cross-chain bridging tasks across multiple L2 chains to earn eligibility points." },
];

const roles = [
  {
    title: "Appointment Setter / Facebook Account Manager",
    period: "2025–Present",
    items: [
      "Managed high-volume Facebook Marketplace inboxes, converting leads into appointments",
      "Diagnosed and resolved Facebook account issues — restrictions, disabled accounts, verification challenges",
      "Administered IT infrastructure: virtual machines, WireGuard VPN, Multilogin browser environments for multi-account ops",
      "Coordinated and optimized workflows to maintain consistent account health and messaging performance",
    ],
  },
  {
    title: "Crypto Community Member, Researcher & Airdrop Farmer",
    period: "2023–2025",
    items: [
      "Active participation in crypto communities on X, Telegram, and Discord — DeFi, NFTs, DePIN, Layer 2",
      "Researched airdrop opportunities by analyzing whitepapers, tokenomics, and roadmap viability",
      "Followed KOLs for airdrop strategies, scam prevention, and best practices",
      "Monitored and reported suspicious activities or scam links to protect community members",
      "Executed qualification strategies on a limited budget — wallet setup, transaction optimization, ecosystem interaction",
      "Created and managed multiple social media accounts to support social task completion for airdrops",
    ],
  },
  {
    title: "IT Support Technician — MLhuillier INC, Philippines",
    period: "2017–2023",
    items: [
      "Workstation setup, deployment, hardware & software installation and troubleshooting",
      "Basic network installation, CCTV and alarm system setup and configuration",
      "Managed and maintained IT assets across the organization",
    ],
  },
];

const learning = {
  title: "AI Automation Specialist (In Progress)",
  items: [
    "Workflow Automation — Zapier, Make.com (Integromat), n8n for automated pipelines and integrations",
    "AI & Prompt Engineering — Crafting effective prompts for LLMs; exploring Claude Code for AI-assisted development",
    "CRM & Marketing Automation — HighLevel (GoHighLevel) for client management and automated funnels",
    "Portfolio Development — Building and deploying with Lovable and v0.app (Vercel)",
  ],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/50 relative">
      <div className="container px-6">
        <SectionHeader index="04" title="Impact & Experience" />

        {/* Airdrop Results */}
        <div className="mt-12 mb-16">
          <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-6">// Notable Airdrop Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {airdrops.map((ad, i) => (
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
                    <CheckCircle2 className="w-3 h-3" />
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
