import { motion } from "framer-motion";
import { SectionHeader } from "./SkillsSection";

const categories = [
  {
    title: "Blockchain & Wallets",
    items: ["Ethereum", "BSC", "Polygon", "zkSync", "Starknet", "Scroll", "Etherscan", "DeBank", "MetaMask", "Rabby", "Aptos", "Keplr"],
    accent: "border-primary",
  },
  {
    title: "AI Automation (In Progress)",
    items: ["n8n", "Zapier", "Make.com", "HighLevel", "Prompt Engineering", "Claude Code", "Lovable", "v0.app"],
    accent: "border-glow-green",
  },
  {
    title: "Social & Communication",
    items: ["Telegram", "Discord", "Twitter / X", "Facebook", "Multilogin", "Dolphin Anty", "Residential Proxies"],
    accent: "border-primary",
  },
  {
    title: "IT & Remote Tools",
    items: ["WireGuard VPN", "Virtual Machines", "AnyDesk", "TeamViewer", "Google Sheets", "CCTV Systems"],
    accent: "border-glow-green",
  },
];

const TechStackSection = () => {
  return (
    <section id="stack" className="py-24 bg-card/50 relative">
      <div className="container px-6">
        <SectionHeader index="02" title="Technical Stack" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 border border-border rounded-md bg-background ${cat.accent} border-l-2`}
            >
              <h3 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-wider">{cat.title}</h3>
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

export default TechStackSection;
