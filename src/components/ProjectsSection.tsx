import { motion } from "framer-motion";
import { Brain, Wrench, Hammer, GraduationCap } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

type Card = {
  icon: typeof Brain;
  title: string;
  body: string;
  flow?: string;
  tags?: string[];
};

const cards: Card[] = [
  {
    icon: Brain,
    title: "Automation-first thinking",
    body: "Before writing a single node, I map the manual process first — what triggers it, what decisions get made, where it breaks. I only automate what's worth automating.",
    flow: "diagnose → design → build → test → iterate",
  },
  {
    icon: Wrench,
    title: "Grounded in real IT experience",
    body: "6 years as a field IT technician taught me that systems fail at the edges — bad data, network issues, human error. I build automations with that in mind: error handling, fallbacks, and clear failure logs.",
    tags: ["Infrastructure", "Troubleshooting", "VPN · VMs"],
  },
  {
    icon: Hammer,
    title: "Built from real operations",
    body: "I didn't learn automation in a course — I built it because I was drowning in repetitive VA work. Every workflow I've shipped started as a real problem in a live operation, not a tutorial exercise.",
    tags: ["Lead Ops", "CRM", "Inbox Mgmt"],
  },
  {
    icon: GraduationCap,
    title: "Self-taught, hands-on learner",
    body: "No bootcamp, no course completion certificates. I learn by building real things, breaking them, and rebuilding. If I don't know how to do something, I figure it out — then I document it.",
    flow: "attempt → break → debug → ship → repeat",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <SectionHeader index="03" title="How I Work" />
        <p className="text-sm font-mono text-muted-foreground mt-4 max-w-2xl">
          {"// the approach, background, and mindset behind every workflow I build"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
              className="group relative border border-border rounded-md bg-card p-6 hover:border-glow-blue transition-all overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-glow-green/60" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <card.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {card.body}
                </p>
                {card.flow && (
                  <div className="font-mono text-xs text-glow-green">
                    {"> "}
                    {card.flow}
                  </div>
                )}
                {card.tags && (
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-glow-green border border-glow-green/30 px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
