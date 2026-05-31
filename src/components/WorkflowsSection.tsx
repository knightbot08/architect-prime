import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Workflow, Zap, Bot, Mail, Calendar, FileSpreadsheet, MessageSquare, Database, Webhook, GitBranch, X, Play } from "lucide-react";
import { SectionHeader } from "./SkillsSection";
import leadsEnrichmentImg from "@/assets/leads-enrichment.png";
import aiContentRepurposingImg from "@/assets/ai-content-repurposing.png";
import realEstateAutomationImg from "@/assets/real-estate-automation.png";
import simpleReminderAutomationImg from "@/assets/simple-reminder-automation.png";
import simpleReminderAutomationThumb from "@/assets/simple-reminder-automation-thumb.png";
import salaryInvoiceGeneratorThumb from "@/assets/salary-invoice-generator-thumb.png";
import locationPropertyThumb from "@/assets/location-property-availability-thumb.png";
import oljphJobScraperThumb from "@/assets/oljph-job-scraper-thumb.png";

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
  badge?: string;           // Optional: small label shown on the card (e.g. "Personal Project")
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
    title: "AI Agent – Location-Based Property Availability",
    platform: "n8n",
    description: "An n8n workflow that takes a plain-language location query and returns the nearest available rental properties with approximate distances.",
    icon: Bot,
    thumbnail: locationPropertyThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/3fdb4474eb984f9c80d09c846823b85f-3aafebbe0f1c770d-full-play.gif",
    loomUrl: "https://www.loom.com/share/3fdb4474eb984f9c80d09c846823b85f",
  },
  {
    id: "wf-02",
    title: "Simple Reminder Automation",
    platform: "n8n",
    description: "Remind book inspectors via sms and remind the team for sending manual reminder from different channel/lead sources.",
    icon: Database,
    thumbnail: simpleReminderAutomationThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/ecf63d4e288b4762bcd23d4e9ed74244-68def2fabb83b16a-full-play.gif",
    loomUrl: "https://www.loom.com/share/ecf63d4e288b4762bcd23d4e9ed74244",
  },
  {
    id: "wf-03",
    title: "Salary Invoice Generator",
    platform: "n8n",
    description: "Auto-generate monthly salary invoices from Sheets.",
    icon: FileSpreadsheet,
    thumbnail: salaryInvoiceGeneratorThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/02b49aac0f3b413c87b18f1f125cbfc1-4f4f881ddcbd547d-full-play.gif",
    loomUrl: "https://www.loom.com/share/02b49aac0f3b413c87b18f1f125cbfc1",
  },
  {
    id: "wf-04",
    title: "OLJPH Job Scraper with cover letter optimizer",
    platform: "n8n",
    description: "Scrapes job listings from OnlineJobs.ph based on search keywords Generates a personalized cover letter for each job using an AI language model via OpenRouter after.",
    icon: Bot,
    thumbnail: oljphJobScraperThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/8d1b8b62548744b78ab922215fd99023-beb7bdbaa70f8dd9-full-play.gif",
    loomUrl: "https://www.loom.com/share/8d1b8b62548744b78ab922215fd99023",
    badge: "Personal Project",
  },
];

const platformStyles: Record<Platform, string> = {
  Zapier: "text-primary border-primary/40",
  Make:   "text-glow-blue border-glow-blue/40",
  n8n:    "text-glow-green border-glow-green/40",
};

const WorkflowCard = ({ workflow, index }: { workflow: WorkflowItem; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const Icon = workflow.icon;
  const hasMedia = workflow.thumbnail && workflow.gif;
  const isImage = !!workflow.image;

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightboxOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

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
        const MediaWrapper: any = workflow.loomUrl ? "a" : isImage ? "button" : "div";
        const showPlayOverlay = hasMedia && !isImage && !hovered;
        const handleMediaClick = (e: React.MouseEvent) => {
          // On touch devices (no hover), first tap previews the GIF; second tap follows the link / opens lightbox.
          const isTouch = typeof window !== "undefined" && window.matchMedia?.("(hover: none)").matches;
          if (isTouch && hasMedia && !hovered) {
            e.preventDefault();
            setHovered(true);
            return;
          }
          if (isImage) setLightboxOpen(true);
        };
        const wrapperProps = workflow.loomUrl
          ? { href: workflow.loomUrl, target: "_blank", rel: "noopener noreferrer", onClick: handleMediaClick }
          : isImage
          ? { type: "button", onClick: handleMediaClick, "aria-label": `Enlarge ${workflow.title}` }
          : {};
        return (
          <MediaWrapper
            {...wrapperProps}
            className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border block cursor-pointer text-left"
          >
            {hasMedia ? (
              <>
                {/* Static thumbnail (default) */}
                <img
                  src={workflow.thumbnail as string}
                  alt={`${workflow.title} workflow preview`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-out ${
                    isImage ? "object-contain bg-background group-hover:scale-105" : "object-cover"
                  } ${hovered ? "opacity-0" : "opacity-100"}`}
                />
                {/* Animated GIF (revealed on hover/tap) */}
                <img
                  src={workflow.gif as string}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-out ${
                    isImage ? "object-contain bg-background" : "object-cover"
                  } ${hovered ? "opacity-100" : "opacity-0"}`}
                />
                {/* YouTube-style play button overlay */}
                {showPlayOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-background/60 backdrop-blur-sm border border-foreground/20 shadow-lg transition-transform duration-200 group-hover:scale-110">
                      <Play className="w-6 h-6 text-foreground fill-foreground translate-x-0.5" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              // No recording yet — styled terminal placeholder
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card via-secondary/40 to-card">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <Icon className={`w-8 h-8 text-primary/60 transition-transform duration-500 ${hovered ? "scale-110" : ""}`} />
                  <span className="font-mono text-xs text-glow-green/80 px-3 py-1 border border-glow-green/30 rounded-sm bg-background/50">
                    [ Recording coming soon ]
                  </span>
                </div>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono text-muted-foreground/60">
                  {workflow.id}
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

            {/* Image badge */}
            {isImage && (
              <div className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-mono rounded-sm bg-background/80 backdrop-blur-sm text-muted-foreground border border-border">
                ⤢ enlarge
              </div>
            )}

            {/* Recording coming soon badge for screenshot-based Zapier cards */}
            {isImage && (
              <span className="absolute bottom-2 right-2 font-mono text-[10px] text-glow-green/80 px-2 py-0.5 border border-glow-green/30 rounded-sm bg-background/70 backdrop-blur-sm">
                [ Recording coming soon ]
              </span>
            )}

            <div
              className={`absolute bottom-2 left-2 px-2 py-0.5 text-[10px] font-mono rounded-sm bg-background/80 backdrop-blur-sm text-muted-foreground border border-border transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {isImage ? "⤢ click to enlarge" : "▶ playing"}
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && isImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-6 cursor-zoom-out"
          >
            <motion.button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 p-2 rounded-full border border-border bg-card/80 hover:bg-card text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>
            <motion.img
              src={workflow.image as string}
              alt={`${workflow.title} enlarged`}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-md shadow-2xl border border-border cursor-default"
            />
          </motion.div>
        )}
      </AnimatePresence>
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
