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
    description:
      "Property managers were manually answering 'do you have anything near X?' dozens of times a day. Now a plain-language query returns the nearest available listings with distances — automatically.",
    icon: Bot,
    thumbnail: locationPropertyThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/3fdb4474eb984f9c80d09c846823b85f-3aafebbe0f1c770d-full-play.gif",
    loomUrl: "https://www.loom.com/share/3fdb4474eb984f9c80d09c846823b85f",
    problem:
      "Manually checking whether a prospect's preferred location was near any of 90+ managed properties was slow and required constant map lookups — a real daily bottleneck for someone handling high-volume inquiries across Sydney suburbs they're not personally familiar with.",
    solution:
      "A live n8n workflow triggered by a chat input. The agent extracts a location from the message, fetches its coordinates via the Google Maps API, then pulls all active properties from a Google Sheet where each property is manually geocoded. A custom JavaScript code node calculates the distance between the input location and every property, filters results within a 10km radius, and categorizes the output: exact match, nearby, or outside Sydney. The result passes to an AI agent via OpenRouter instructed to return a direct, no-frills summary with matched properties and approximate distances.",
    stack: [
      "n8n",
      "Google Maps Geocoding API",
      "Google Sheets",
      "OpenRouter (DeepSeek)",
      "JavaScript code node",
    ],
    result:
      "Running live in production. Replaced a manual map-checking process for a high-volume room rental inquiry operation. Returns property availability with approximate distances from a plain-language location query in seconds. The live version runs against real property data — demo uses a sanitized sheet with the same structure and anonymized addresses.",
  },
  {
    id: "wf-02",
    title: "Simple Reminder Automation",
    platform: "n8n",
    description:
      "Inspection no-shows were a recurring problem. This workflow sends SMS reminders to booked leads and WhatsApp alerts to the team for leads without phone numbers — zero manual follow-up required.",
    icon: Database,
    thumbnail: simpleReminderAutomationThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/ecf63d4e288b4762bcd23d4e9ed74244-68def2fabb83b16a-full-play.gif",
    loomUrl: "https://www.loom.com/share/ecf63d4e288b4762bcd23d4e9ed74244",
    problem:
      "Several lead channels don't support automated reminders unless a phone number was collected. The only fallback was manually pulling up a master inspection sheet every morning to identify who needed a reminder and then notifying the team to follow up — a slow, easy-to-miss process.",
    solution:
      "A scheduled n8n workflow that runs every morning at 9AM. It pulls all inspection records from Google Sheets and filters for two conditions: leads scheduled for tomorrow and reminders not yet sent. From there the workflow splits into two paths. If a lead has a phone number, their contact is cleaned and formatted via a code node, and a Twilio SMS reminder is sent directly to them — their status is updated to 'reminded' in the sheet automatically. If no phone number exists, those leads are aggregated into a single structured summary and sent via Twilio WhatsApp to each team member, giving the appointment setting team and management visibility into who needs a manual follow-up before the inspection.",
    stack: ["n8n", "Google Sheets", "Twilio SMS", "Twilio WhatsApp"],
    result:
      "Built and tested on a demo dataset. Not yet deployed — currently being refined before pitching internally. Eliminates the need to manually scan a master inspection sheet every morning and ensures no scheduled inspection falls through without at least one reminder attempt.",
  },
  {
    id: "wf-03",
    title: "Salary Invoice Generator",
    platform: "n8n",
    description:
      "Bi-monthly invoices were being built manually from a spreadsheet every pay cycle. Now n8n pulls the data, generates the PDF via Documentero, and sends it — unsupervised.",
    icon: FileSpreadsheet,
    thumbnail: salaryInvoiceGeneratorThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/02b49aac0f3b413c87b18f1f125cbfc1-4f4f881ddcbd547d-full-play.gif",
    loomUrl: "https://www.loom.com/share/02b49aac0f3b413c87b18f1f125cbfc1",
    problem:
      "Generating and sending a salary invoice twice a month was fully manual — and easy to forget. With fixed pay amounts and a predictable schedule, there was no reason a person needed to be involved in the process at all.",
    solution:
      "A scheduled n8n workflow that triggers automatically on the 10th and 25th of each month. Luxon date expressions determine the current pay period and select the correct invoice amount for that cycle. The invoice number is pulled dynamically from Google Sheets, passed to Documentero to generate a formatted Excel invoice, and the output is sent automatically to a fixed payroll email via Gmail. An error handling branch monitors the workflow and sends a Gmail alert if anything fails mid-run.",
    stack: ["n8n", "Documentero", "Google Sheets", "Gmail", "Luxon"],
    result:
      "Fully automated bi-monthly invoice generation and delivery. Zero manual intervention required per cycle. Error handling ensures failures are caught and flagged immediately rather than silently missed.",
  },
  {
    id: "wf-04",
    title: "OLJPH Job Scraper with Cover Letter Optimizer",
    platform: "n8n",
    description:
      "Manually scanning OnlineJobs.ph and writing a cover letter per listing was taking hours. This scrapes matching jobs and generates a tailored cover letter via OpenRouter — on demand.",
    icon: Bot,
    thumbnail: oljphJobScraperThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/8d1b8b62548744b78ab922215fd99023-beb7bdbaa70f8dd9-full-play.gif",
    loomUrl: "https://www.loom.com/share/8d1b8b62548744b78ab922215fd99023",
    badge: "Personal Project",
    problem:
      "Manually searching OnlineJobs.ph, filtering relevant listings, and writing a tailored cover letter for each one is time-consuming — especially without a mobile app to check on the go.",
    solution:
      "A chat-driven n8n workflow that accepts natural language job search requests directly in the n8n chat interface. The user types a request like 'find me 5 part-time automation jobs using deepseek' and the workflow handles everything from there. An AI information extractor parses the message and pulls the keyword, job type, result count, and preferred model. Available models are maintained manually in Google Sheets, populated from OpenRouter's model list, and mapped dynamically to their full model strings at runtime. The extracted parameters are sent to an Apify scraper via HTTP request. A polling loop checks the run status every 5 minutes until the scrape completes, then fetches the full dataset. Each listing runs through a loop — the description is sanitized, then a personalized cover letter is generated via OpenRouter based on the job details and a personal profile. Results are logged to Google Sheets with full job details and cover letters side by side. A summary is returned in chat with job titles, employment type, salary, date posted, and a direct link to the sheet.",
    stack: ["n8n", "Apify", "OpenRouter", "Google Sheets"],
    result:
      "Actively used for personal job searching. Reduces a multi-step manual process to a single chat message. Next planned iteration: Telegram or Slack push notifications to replace the missing OnlineJobs.ph mobile app.",
  },
  {
    id: "wf-05",
    title: "Real Estate Lead Capture & Follow-Up Automation",
    platform: "Zapier",
    description:
      "Leads from Facebook ads were going cold before anyone followed up. This 5-Zap system captures, qualifies via AI, and triggers SMS + email follow-up within minutes of a form submission.",
    icon: Zap,
    thumbnail: realEstateLeadCaptureThumb,
    gif: "https://cdn.loom.com/sessions/thumbnails/f9e580fe3ff74a13b692f902945dd18c-c4387eed7885ca0c-full-play.gif",
    loomUrl: "https://www.loom.com/share/f9e580fe3ff74a13b692f902945dd18c",
    problem:
      "Real estate leads coming from multiple sources — Facebook Messenger and Facebook Lead Ads — had no unified capture system, no consistent follow-up, and no way to automatically re-engage prospects who went quiet. Every touchpoint required manual action.",
    solution:
      "A 5-Zap architecture built in Zapier that handles the full lead lifecycle from capture to re-engagement. Zap 1 captures leads from Chatfuel's Facebook Messenger flow, creates or updates a contact in HubSpot, and creates an associated deal. Zap 2 does the same for Facebook Lead Ads — both sources feed into a single HubSpot pipeline with deal associations intact. Zap 3 triggers when a new HubSpot contact is created and uses Zapier's AI action to generate a personalized welcome email, sent automatically via Gmail. Zap 4 triggers when a deal stage moves to 'Interested' — it pulls the deal stage, looks up the associated contact, filters to confirm the deal is still active, and uses AI to draft a personalized SMS sent via Twilio matched to the prospect's pipeline stage. Zap 5 runs on a daily schedule, finds HubSpot deals with no activity for more than 3 days, splits into three paths based on deal stage — New Inquiry, Interested, or Follow Up — and uses AI to draft a stage-appropriate re-engagement message sent back through Chatfuel as a direct message.",
    stack: [
      "Zapier",
      "HubSpot",
      "Chatfuel",
      "Facebook Lead Ads",
      "OpenAI",
      "Twilio",
      "Gmail",
    ],
    result:
      "Built and fully tested end-to-end — lead capture, welcome email, AI SMS on interest, and automated re-engagement all verified in a triggered test run. Adapted from a real client brief as a practical build to develop Zapier and CRM integration skills. Next planned iteration: full AI autonomy on Zap 5 response handling.",
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
        className="relative max-w-[720px] w-full bg-card border border-border rounded-xl shadow-2xl flex flex-col max-h-[90vh]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 p-2 rounded-full border border-border bg-card/80 hover:bg-card text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full aspect-video shrink-0">
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

        <div className="overflow-y-auto max-h-[40vh] p-6">
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
