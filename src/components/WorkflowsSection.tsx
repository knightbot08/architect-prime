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
import realEstateLeadCaptureThumb from "@/assets/real-estate-lead-capture-thumb.png";

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
  thumbnail: string | null;
  gif: string | null;
  loomUrl?: string;
  image?: string;
  badge?: string;
  problem?: string;
  solution?: string;
  stack?: string[];
  result?: string;
}

export const workflows: WorkflowItem[] = [
  {
    id: "wf-01",
    title: "AI Agent – Location-Based Property Availability",
    platform: "n8n",
    description: "Property managers were manually answering 'do you have anything near X?' dozens of times a day. Now a plain-language query returns the nearest available listings with distances — automatically.",
    icon: Bot,
    thumbnail: locationPropertyThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/3fdb4474eb984f9c80d09c846823b85f-3aafebbe0f1c770d-full-play.gif",
    loomUrl: "https://www.loom.com/share/3fdb4474eb984f9c80d09c846823b85f",
  },
  {
    id: "wf-02",
    title: "Simple Reminder Automation",
    platform: "n8n",
    description: "Inspection no-shows were a recurring problem. This workflow sends SMS reminders to booked leads and WhatsApp alerts to the team for leads without phone numbers — zero manual follow-up required.",
    icon: Database,
    thumbnail: simpleReminderAutomationThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/ecf63d4e288b4762bcd23d4e9ed74244-68def2fabb83b16a-full-play.gif",
    loomUrl: "https://www.loom.com/share/ecf63d4e288b4762bcd23d4e9ed74244",
  },
  {
    id: "wf-03",
    title: "Salary Invoice Generator",
    platform: "n8n",
    description: "Bi-monthly invoices were being built manually from a spreadsheet every pay cycle. Now n8n pulls the data, generates the PDF via Documentero, and sends it — unsupervised.",
    icon: FileSpreadsheet,
    thumbnail: salaryInvoiceGeneratorThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/02b49aac0f3b413c87b18f1f125cbfc1-4f4f881ddcbd547d-full-play.gif",
    loomUrl: "https://www.loom.com/share/02b49aac0f3b413c87b18f1f125cbfc1",
  },
  {
    id: "wf-04",
    title: "OLJPH Job Scraper with cover letter optimizer",
    platform: "n8n",
    description: "Manually scanning OnlineJobs.ph and writing a cover letter per listing was taking hours. This scrapes matching jobs and generates a tailored cover letter via OpenRouter — on demand.",
    icon: Bot,
    thumbnail: oljphJobScraperThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/8d1b8b62548744b78ab922215fd99023-beb7bdbaa70f8dd9-full-play.gif",
    loomUrl: "https://www.loom.com/share/8d1b8b62548744b78ab922215fd99023",
    badge: "Personal Project",
  },
  {
    id: "wf-05",
    title: "Real Estate Lead Capture & Follow-Up Automation",
    platform: "Zapier",
    description: "Leads from Facebook ads were going cold before anyone followed up. This 5-Zap system captures, qualifies via AI, and triggers SMS + email follow-up within minutes of a form submission.",
    icon: Zap,
    thumbnail: realEstateLeadCaptureThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/f9e580fe3ff74a13b692f902945dd18c-c4387eed7885ca0c-full-play.gif",
    loomUrl: "https://www.loom.com/share/f9e580fe3ff74a13b692f902945dd18c",
  },
];

const platformStyles: Record<Platform, string> = {
  Zapier: "text-primary border-primary/40",
  Make:   "text-glow-blue border-glow-blue/40",
  n8n:    "text-glow-green border-glow-green/40",
};

const WorkflowModal = ({ workflow, onClose }: { workflow: WorkflowItem; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const embedSrc = workflow.loomUrl
    ? workflow.loomUrl.replace("https://www.loom.com/share/", "https://www.loom.com/embed/") +
      "?autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[720px] w-full bg-card border border-border rounded-xl shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 p-2 rounded-full border border-border bg-card/80 hover:bg-card text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full aspect-video">
          {embedSrc ? (
            <iframe
              src={embedSrc}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/30 font-mono text-xs text-muted-foreground">
              No recording available
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading font-semibold text-lg text-foreground">{workflow.title}</h3>
            <div
              className={`shrink-0 px-2 py-0.5 text-[10px] font-mono rounded-sm bg-background/80 backdrop-blur-sm border ${platformStyles[workflow.platform]}`}
            >
              {workflow.platform}
            </div>
          </div>

          <div className="my-4 h-px bg-border" />

          {workflow.problem && (
            <div className="mb-4">
              <span className="font-mono text-xs text-glow-green uppercase tracking-wider">Problem</span>
              <p className="mt-1 text-sm text-secondary-foreground leading-relaxed">{workflow.problem}</p>
            </div>
          )}

          {workflow.solution && (
            <div className="mb-4">
              <span className="font-mono text-xs text-glow-green uppercase tracking-wider">Solution</span>
              <p className="mt-1 text-sm text-secondary-foreground leading-relaxed">{workflow.solution}</p>
            </div>
          )}

          {workflow.stack && workflow.stack.length > 0 && (
            <div className="mb-4">
              <span className="font-mono text-xs text-glow-green uppercase tracking-wider">Stack</span>
              <div className="mt-1 flex flex-wrap gap-2">
                {workflow.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-glow-green border border-glow-green/30 px-2 py-0.5 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {workflow.result && (
            <div className="mb-4">
              <span className="font-mono text-xs text-glow-green uppercase tracking-wider">Result</span>
              <p className="mt-1 text-sm text-secondary-foreground leading-relaxed">{workflow.result}</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorkflowCard = ({ workflow, index }: { workflow: WorkflowItem; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
      <div
        className="relative aspect-video w-full overflow-hidden bg-muted/30 border-b border-border block text-left"
        onClick={() => {
          if (isImage) setLightboxOpen(true);
        }}
      >
        {hasMedia ? (
          <>
            <img
              src={workflow.thumbnail as string}
              alt={`${workflow.title} workflow preview`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-out ${
                isImage ? "object-contain bg-background group-hover:scale-105" : "object-cover"
              } ${hovered ? "opacity-0" : "opacity-100"}`}
            />
            <img
              src={workflow.gif as string}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-out ${
                isImage ? "object-contain bg-background" : "object-cover"
              } ${hovered ? "opacity-100" : "opacity-0"}`}
            />
            {!isImage && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setModalOpen(true);
                  }}
                  aria-label={`Play ${workflow.title}`}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-background/60 backdrop-blur-sm border border-foreground/20 shadow-lg transition-transform duration-200 group-hover:scale-110"
                >
                  <Play className="w-6 h-6 text-foreground fill-foreground translate-x-0.5" />
                </button>
              </div>
            )}
          </>
        ) : (
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

        <div
          className={`absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono rounded-sm bg-background/80 backdrop-blur-sm border ${platformStyles[workflow.platform]}`}
        >
          {workflow.platform}
        </div>

        {isImage && (
          <div className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-mono rounded-sm bg-background/80 backdrop-blur-sm text-muted-foreground border border-border">
            ⤢ enlarge
          </div>
        )}

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
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-heading font-semibold text-base text-foreground">
            {workflow.title}
          </h3>
          {workflow.badge && (
            <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-glow-green border border-glow-green/40 px-2 py-0.5 rounded-sm bg-glow-green/5">
              {workflow.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed font-mono">
          {workflow.description}
        </p>
      </div>

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

      <AnimatePresence>
        {modalOpen && (
          <WorkflowModal workflow={workflow} onClose={() => setModalOpen(false)} />
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
