import { motion } from "framer-motion";
import { Shield, Search, Users, Layers, Wrench, Wifi, Bot, Calendar, Mail, Server, Lock, UserCog } from "lucide-react";

const skills = [
  { icon: Search, label: "Airdrop Research & Qualification", color: "text-primary" },
  { icon: Shield, label: "Scam Detection & Risk Mitigation", color: "text-destructive" },
  { icon: Layers, label: "DeFi, NFT & Layer 2 Interaction", color: "text-primary" },
  { icon: Users, label: "Telegram & Discord Community Mgmt", color: "text-glow-blue" },
  { icon: UserCog, label: "Multi-Account Social Media Management", color: "text-glow-green" },
  { icon: Calendar, label: "Appointment Setting", color: "text-primary" },
  { icon: Mail, label: "High Volume Inbox Manager", color: "text-muted-foreground" },
  { icon: Server, label: "Virtual Machine Management", color: "text-glow-blue" },
  { icon: Lock, label: "WireGuard VPN Configuration", color: "text-glow-green" },
  { icon: Wrench, label: "Hardware & Software Troubleshooting", color: "text-muted-foreground" },
  { icon: Wifi, label: "Basic Networking & CCTV Setup", color: "text-glow-blue" },
  { icon: Bot, label: "AI Automation (In Progress)", color: "text-glow-green" },
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
