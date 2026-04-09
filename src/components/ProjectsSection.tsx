import { motion } from "framer-motion";
import { Database, FileSpreadsheet, BookOpen, CalendarCheck } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

const projects = [
  {
    icon: Database,
    title: "Airdrop Research Database",
    desc: "Personal database tracking airdrop opportunities, eligibility criteria, and qualification progress across multiple chains.",
    tags: ["Research", "Data"],
  },
  {
    icon: FileSpreadsheet,
    title: "DeFi Transaction Tracker",
    desc: "Tracking sheet of wallet transactions and activities for auditing and eligibility verification purposes.",
    tags: ["Tracking", "Audit"],
  },
  {
    icon: BookOpen,
    title: "DeFi Interaction Tutorials",
    desc: "Step-by-step guides for interacting with DeFi protocols to qualify for airdrops across L2 ecosystems.",
    tags: ["Education", "DeFi"],
  },
  {
    icon: CalendarCheck,
    title: "Automated Appointment Setter",
    desc: "Google Sheets-based automated booking system via vibe coding. Increased efficiency by 100% for inspector scheduling.",
    tags: ["Automation", "Productivity"],
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
