import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Workflow, Zap, Bot, Mail, Calendar, FileSpreadsheet, MessageSquare, Database, Webhook, GitBranch, X } from "lucide-react";
import { SectionHeader } from "./SkillsSection";
import leadsEnrichmentImg from "@/assets/leads-enrichment.png";

/**
 * ============================================================
 * WORKFLOW GIF SWAP GUIDE
 * ============================================================
 * To replace a dummy thumbnail with a real workflow GIF:
 *
 * 1. Place your files in: `public/workflows/`
 *    - Static thumbnail: `workflow-01.png` (shown by default)
 *    - Animated GIF:     `workflow-01.gif` (plays on hover)
 *
 * 2. In the `workflows` array below, update the entry:
 *      thumbnail: "/workflows/workflow-01.png",
 *      gif:       "/workflows/workflow-01.gif",
 *
 * 3. Leave `thumbnail` and `gif` as `null` to keep the dummy
 *    placeholder (icon + gradient) for that slot.
 * ============================================================
 */

type Platform = "Zapier" | "Make" | "n8n";

interface WorkflowItem {
  id: string;
  title: string;
  platform: Platform;
  description: string;
  icon: typeof Workflow;
  thumbnail: string | null; // e.g. "/workflows/workflow-01.png" OR a Loom thumbnail .gif URL
  gif: string | null;       // e.g. "/workflows/workflow-01.gif" OR same Loom thumbnail .gif URL
  loomUrl?: string;         // Optional: Loom share link — card becomes clickable to open the recording
  image?: string;           // Optional: static image — clicking opens a lightbox to enlarge it
}

/**
 * LOOM EMBED TIP
 * --------------
 * When pasting a Loom thumbnail like:
 *   <img src="https://cdn.loom.com/sessions/thumbnails/<id>-<hash>-full-play.gif#t=0.1">
 * the same URL acts as both the static-looking thumbnail AND the animated GIF
 * (Loom serves an animated .gif). So set BOTH `thumbnail` and `gif` to that URL
 * and add `loomUrl` so clicking the card opens the recording.
 */

const workflows: WorkflowItem[] = [
  {
    id: "wf-01",
    title: "Salary Invoice Generator",
    platform: "n8n",
    description: "Auto-generate monthly salary invoices from Sheets.",
    icon: FileSpreadsheet,
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/02b49aac0f3b413c87b18f1f125cbfc1-4f4f881ddcbd547d-full-play.gif#t=0.1",
    gif: "https://cdn.loom.com/sessions/thumbnails/02b49aac0f3b413c87b18f1f125cbfc1-4f4f881ddcbd547d-full-play.gif",
    loomUrl: "https://www.loom.com/share/02b49aac0f3b413c87b18f1f125cbfc1",
  },
  {
    id: "wf-02",
    title: "Simple AI Agent for Room Rentals page on FB",
    platform: "n8n",
    description: "Facebook Messenger → AI Agent",
    icon: Calendar,
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/48722d4c07d74a1083268344aafe2e67-01b4b162111e2c97-full-play.gif#t=0.1",
    gif: "https://cdn.loom.com/sessions/thumbnails/48722d4c07d74a1083268344aafe2e67-01b4b162111e2c97-full-play.gif",
    loomUrl: "https://www.loom.com/share/48722d4c07d74a1083268344aafe2e67",
  },
  {
    id: "wf-03",
    title: "AI Job Scraper with Resume Optimizer",
    platform: "n8n",
    description: "Scrape job boards, filter via LLM and optimize resume, push to Slack.",
    icon: Bot,
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/479116cd8227426ea6679572171641f9-d5275cd35e94d36f-full-play.gif#t=0.1",
    gif: "https://cdn.loom.com/sessions/thumbnails/479116cd8227426ea6679572171641f9-d5275cd35e94d36f-full-play.gif",
    loomUrl: "https://www.loom.com/share/479116cd8227426ea6679572171641f9",
  },
  {
    id: "wf-04",
    title: "GHL ↔ Google Sheets Sync",
    platform: "n8n",
    description: "Two-way contact sync between GoHighLevel and Sheets.",
    icon: Database,
    thumbnail: null,
    gif: null,
  },
  {
    id: "wf-05",
    title: "Leads Enrichment Automation",
    platform: "Zapier",
    description: "Turning raw leads into organized, high-quality opportunities through smart automation.",
    icon: Zap,
    thumbnail: leadsEnrichmentImg,
    gif: leadsEnrichmentImg,
    image: leadsEnrichmentImg,
  },
  {
    id: "wf-06",
    title: "Email Auto-Responder",
    platform: "Make",
    description: "Gmail trigger → GPT classifier → templated reply.",
    icon: Mail,
    thumbnail: null,
    gif: null,
  },
  {
    id: "wf-07",
    title: "Discord Community Digest",
    platform: "n8n",
    description: "Daily AI summary of Discord channels to Telegram.",
    icon: MessageSquare,
    thumbnail: null,
    gif: null,
  },
  {
    id: "wf-08",
    title: "Webhook → CRM Pipeline",
    platform: "Zapier",
    description: "Form webhook enriched and pushed into HighLevel.",
    icon: Webhook,
    thumbnail: null,
    gif: null,
  },
  {
    id: "wf-09",
    title: "Multi-Step Data Routing",
    platform: "Make",
    description: "Branching scenario with routers and aggregators.",
    icon: GitBranch,
    thumbnail: null,
    gif: null,
  },
  {
    id: "wf-10",
    title: "Appointment Reminder Bot",
    platform: "n8n",
    description: "Auto-send SMS/email reminders before booked appointments.",
    icon: Workflow,
    thumbnail: null,
    gif: null,
  },
];

const platformStyles: Record<Platform, string> = {
  Zapier: "text-primary border-primary/40",
  Make:   "text-glow-blue border-glow-blue/40",
  n8n:    "text-glow-green border-glow-green/40",
};

const WorkflowCard = ({ workflow, index }: { workflow: WorkflowItem; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = workflow.icon;
  const hasMedia = workflow.thumbnail && workflow.gif;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group border border-border rounded-md bg-card overflow-hidden hover:border-glow-blue transition-all"
    >
      {(() => {
        const MediaWrapper: any = workflow.loomUrl ? "a" : "div";
        const wrapperProps = workflow.loomUrl
          ? { href: workflow.loomUrl, target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <MediaWrapper
            {...wrapperProps}
            className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border block"
          >
            {hasMedia ? (
              <img
                src={hovered ? (workflow.gif as string) : (workflow.thumbnail as string)}
                alt={`${workflow.title} workflow preview`}
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              // Dummy placeholder — swap by setting `thumbnail` + `gif` above
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card via-secondary/40 to-card">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:24px_24px]" />
                <Icon
                  className={`w-12 h-12 text-primary/70 transition-transform duration-500 ${
                    hovered ? "scale-110 animate-pulse" : "scale-100"
                  }`}
                />
                <span className="absolute bottom-2 right-2 text-[10px] font-mono text-muted-foreground/60">
                  {workflow.id}.gif
                </span>
              </div>
            )}

            {/* Platform tag */}
            <div
              className={`absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono rounded-sm bg-background/80 backdrop-blur-sm border ${platformStyles[workflow.platform]}`}
            >
              {workflow.platform}
            </div>

            {/* Loom badge */}
            {workflow.loomUrl && (
              <div className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-mono rounded-sm bg-background/80 backdrop-blur-sm text-muted-foreground border border-border">
                ↗ loom
              </div>
            )}

            <div
              className={`absolute bottom-2 left-2 px-2 py-0.5 text-[10px] font-mono rounded-sm bg-background/80 backdrop-blur-sm text-muted-foreground border border-border transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              ▶ playing
            </div>
          </MediaWrapper>
        );
      })()}

      {/* Meta */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-base text-foreground mb-1">
          {workflow.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed font-mono">
          {workflow.description}
        </p>
      </div>
    </motion.div>
  );
};

const WorkflowsSection = () => {
  return (
    <section id="workflows" className="py-24 relative">
      <div className="container px-6">
        <SectionHeader index="04" title="Project Workflows" />
        <p className="text-sm font-mono text-muted-foreground mt-4 max-w-2xl">
          {"// hover any thumbnail to play the workflow recording"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
          {workflows.map((wf, i) => (
            <WorkflowCard key={wf.id} workflow={wf} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowsSection;
