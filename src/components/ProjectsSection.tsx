import { motion } from "framer-motion";
import { Bot, Workflow, UserCog, Server } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

const projects = [
  {
    icon: Bot,
    title: "AI Agent for Room Rentals (FB Messenger)",
    desc: "Built an n8n-powered AI agent that handles inquiries on a Facebook Rentals page — qualifying leads, answering FAQs, and routing serious inquiries to a human.",
    tags: ["n8n", "AI Agent"],
  },
  {
    icon: Workflow,
    title: "Salary Invoice Automation",
    desc: "n8n workflow that pulls staff data from Google Sheets and auto-generates monthly salary invoices — eliminating manual spreadsheet work.",
    tags: ["n8n", "Sheets"],
  },
  {
    icon: UserCog,
    title: "Multi-Account Operations Stack",
    desc: "Designed a secure stack — VMs, WireGuard VPN, Multilogin, residential proxies — to run multiple Facebook accounts safely for high-volume appointment setting.",
    tags: ["Ops", "Security"],
  },
  {
    icon: Server,
    title: "IT Support Playbook (MLhuillier)",
    desc: "6 years of structured workstation deployment, network setup, CCTV/alarm configuration and asset management across a multi-branch organization.",
    tags: ["IT Support", "Infrastructure"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <SectionHeader index="03" title="Project Architecture" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 border border-border rounded-md bg-card hover:border-glow-blue transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors" />
              <project.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-glow-green border border-glow-green/30 px-2 py-0.5 rounded-sm">
                    {tag}
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

export default ProjectsSection;
