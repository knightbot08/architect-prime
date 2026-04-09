import { motion } from "framer-motion";
import { CheckCircle2, Briefcase } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

const airdrops = [
  { name: "LayerZero", metric: "Qualified", detail: "Active cross-chain transactions and ecosystem engagement using LayerZero dApps." },
  { name: "zkSync", metric: "Eligible", detail: "Interacted with zkSync Era & Lite — bridging, swapping, providing liquidity, utilizing Paymaster." },
  { name: "Starknet", metric: "Qualified", detail: "Maintained $100+ balance, $100+ transaction volume over 3+ months. Participated in testnet activities." },
  { name: "Scroll", metric: "200+ Marks", detail: "Interacted with Scroll zkEVM endorsed dApps, completed transactions, minted badges." },
  { name: "Grass", metric: "Qualified", detail: "Leveraged decentralized compute network participation to qualify for rewards." },
  { name: "Orbiter", metric: "Eligible", detail: "Completed bridging tasks across different L2 chains to earn required eligibility points." },
];

const roles = [
  {
    title: "AI Automation Trainee",
    period: "2024–Present",
    items: [
      "Built AI Agent for Facebook (AI appointment setter)",
      "Automated salary invoice generation workflow",
      "Developed AI Job Scraper using N8N",
      "Connected GHL and Google Sheets via N8N integrations",
    ],
  },
  {
    title: "Appointment Setter",
    period: "2024–Present",
    items: [
      "Managed high-volume inquiries across Marketplace and Flatmates channels",
      "Increased booking efficiency by 100% through automated workflows",
    ],
  },
  {
    title: "Crypto Community Member & Airdrop Farmer",
    period: "2023–2025",
    items: [
      "Researched airdrop opportunities by analyzing whitepapers, tokenomics, and roadmaps",
      "Developed wallet setup and transaction optimization strategies on limited budget",
      "Monitored and reported scam links and suspicious activities",
      "Collaborated with communities to improve collective success rates",
    ],
  },
  {
    title: "IT Support — MLhuillier INC, Philippines",
    period: "Previous",
    items: [
      "Workstation deployment, hardware & software installation and troubleshooting",
      "Basic network installation, CCTV & alarm system setup and configuration",
      "IT asset handling and management",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/50 relative">
      <div className="container px-6">
        <SectionHeader index="04" title="Impact & Experience" />

        {/* Airdrop Results */}
        <div className="mt-12 mb-16">
          <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-6">// Airdrop Qualifications</h3>
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
        <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-6">// Professional Roles</h3>
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
      </div>
    </section>
  );
};

export default ExperienceSection;
