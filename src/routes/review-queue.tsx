import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Sparkles,
  Check,
  Pencil,
  RefreshCcw,
  X,
  Clock,
  Filter,
  ArrowRight,
  MapPin,
  FileText,
  MessageCircleQuestion,
  AlertTriangle,
  TrendingUp,
  CalendarDays,
  Star,
  Swords,
  Activity,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { AGENTS, INBOX, type InboxItem } from "@/lib/ai-agents";
import { RESORTS } from "@/data/resorts";

export const Route = createFileRoute("/review-queue")({
  head: () => ({
    meta: [
      { title: "Review Queue — Sterling AEO/GEO" },
      {
        name: "description",
        content:
          "One place to review every AI discovery, generated draft, and content update awaiting a human decision.",
      },
    ],
  }),
  component: ReviewQueue,
});

// ─── Unified item model ──────────────────────────────────────────────────
type ActionKind = "Generate" | "Approve" | "Review" | "Update";
type TypeKey =
  | "new-attraction"
  | "generated-page"
  | "updated-faq"
  | "outdated-guide"
  | "trending"
  | "seasonal"
  | "review-insight"
  | "competitor"
  | "performance";

type QueueItem = {
  id: string;
  type: TypeKey;
  typeLabel: string;
  title: string;
  detail: string;
  source: string;      // agent or resort
  sourceHref?: { to: string; params?: Record<string, string> };
  createdAt: string;
  priority: "High" | "Medium" | "Low";
  action: ActionKind;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;      // tailwind text/bg color
};

const TYPE_META: Record<
  TypeKey,
  { label: string; icon: QueueItem["icon"]; accent: string; action: ActionKind }
> = {
  "new-attraction":   { label: "New Attraction", icon: MapPin,               accent: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",  action: "Generate" },
  "generated-page":   { label: "Generated Page", icon: FileText,             accent: "text-violet-600  bg-violet-500/10  border-violet-500/20",   action: "Approve" },
  "updated-faq":      { label: "Updated FAQ",    icon: MessageCircleQuestion,accent: "text-blue-600    bg-blue-500/10    border-blue-500/20",     action: "Review" },
  "outdated-guide":   { label: "Outdated Guide", icon: AlertTriangle,        accent: "text-amber-600   bg-amber-500/10   border-amber-500/20",    action: "Update" },
  "trending":         { label: "Trending Query", icon: TrendingUp,           accent: "text-pink-600    bg-pink-500/10    border-pink-500/20",     action: "Generate" },
  "seasonal":         { label: "Seasonal",       icon: CalendarDays,         accent: "text-orange-600  bg-orange-500/10  border-orange-500/20",   action: "Generate" },
  "review-insight":   { label: "Review Insight", icon: Star,                 accent: "text-yellow-600  bg-yellow-500/10  border-yellow-500/20",   action: "Review" },
  "competitor":       { label: "Competitor",     icon: Swords,               accent: "text-red-600     bg-red-500/10     border-red-500/20",      action: "Review" },
  "performance":      { label: "Performance",    icon: Activity,             accent: "text-cyan-600    bg-cyan-500/10    border-cyan-500/20",     action: "Review" },
};

const CATEGORY_TO_TYPE: Record<InboxItem["category"], TypeKey> = {
  opportunities: "new-attraction",
  approvals:     "generated-page",
  updates:       "outdated-guide",
  reviews:       "review-insight",
  trending:      "trending",
  seasonal:      "seasonal",
  competitor:    "competitor",
  performance:   "performance",
};

function buildQueue(): QueueItem[] {
  // Base items from the inbox
  const fromInbox: QueueItem[] = INBOX.map((i) => {
    // Nudge a few "updates" items into the "updated FAQ" bucket for variety
    const type: TypeKey =
      i.category === "updates" && /faq|schema|policy/i.test(i.title + i.detail)
        ? "updated-faq"
        : CATEGORY_TO_TYPE[i.category];
    const meta = TYPE_META[type];
    const agent = AGENTS.find((a) => a.id === i.agent)!;
    return {
      id: i.id,
      type,
      typeLabel: meta.label,
      title: i.title,
      detail: i.detail,
      source: agent.name,
      sourceHref: { to: "/ai-mode/agents/$id", params: { id: agent.id } },
      createdAt: i.createdAt,
      priority: i.impact,
      action: meta.action,
      icon: meta.icon,
      accent: meta.accent,
    };
  });

  // Additional generated drafts derived from resorts with pending pages
  const fromResorts: QueueItem[] = RESORTS
    .filter((r) => r.pagesPending > 0)
    .slice(0, 6)
    .map((r, i) => {
      const meta = TYPE_META["generated-page"];
      return {
        id: `rq_res_${r.slug}_${i}`,
        type: "generated-page",
        typeLabel: meta.label,
        title: `Things to do in ${r.location}`,
        detail: `AI-drafted guide for ${r.shortName} — 720 words, 6 FAQs, 4 internal links.`,
        source: r.shortName,
        sourceHref: { to: "/resorts/$slug", params: { slug: r.slug } },
        createdAt: `${(i % 5) + 1}h ago`,
        priority: i < 2 ? "High" : "Medium",
        action: meta.action,
        icon: meta.icon,
        accent: meta.accent,
      };
    });

  return [...fromInbox, ...fromResorts];
}

const ACTION_ICON: Record<ActionKind, QueueItem["icon"]> = {
  Generate: Sparkles,
  Approve:  Check,
  Review:   Pencil,
  Update:   RefreshCcw,
};

function ReviewQueue() {
  const all = useMemo(() => buildQueue(), []);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [typeFilter, setTypeFilter] = useState<TypeKey | "all">("all");
  const [priorityFilter, setPriorityFilter] = useState<"all" | "High" | "Medium" | "Low">("all");
  const [resortFilter, setResortFilter] = useState<string>("all");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const visible = all.filter((it) => {
    if (dismissed.has(it.id)) return false;
    if (typeFilter !== "all" && it.type !== typeFilter) return false;
    if (priorityFilter !== "all" && it.priority !== priorityFilter) return false;
    if (resortFilter !== "all") {
      const matchesResortSource = it.sourceHref?.params?.slug === resortFilter;
      const resortName = RESORTS.find((r) => r.slug === resortFilter)?.shortName ?? "";
      const matchesText =
        resortName &&
        (it.title.toLowerCase().includes(resortName.toLowerCase()) ||
          it.detail.toLowerCase().includes(resortName.toLowerCase()) ||
          it.source.toLowerCase().includes(resortName.toLowerCase()));
      if (!matchesResortSource && !matchesText) return false;
    }
    if (q) {
      const s = q.toLowerCase();
      if (!it.title.toLowerCase().includes(s) && !it.detail.toLowerCase().includes(s)) return false;
    }
    return true;
  });

  const countsByType = useMemo(() => {
    const m: Record<string, number> = {};
    for (const it of all) if (!dismissed.has(it.id)) m[it.type] = (m[it.type] ?? 0) + 1;
    return m;
  }, [all, dismissed]);

  const totalActive = all.length - dismissed.size;
  const highCount = all.filter((i) => !dismissed.has(i.id) && i.priority === "High").length;
  const generatedCount = countsByType["generated-page"] ?? 0;

  const dismiss = (ids: string[], msg: string, kind: "success" | "error" | "default" = "success") => {
    setDismissed((prev) => {
      const next = new Set(prev);
      for (const id of ids) next.add(id);
      return next;
    });
    setSelected(new Set());
    if (kind === "success") toast.success(msg);
    else if (kind === "error") toast.error(msg);
    else toast(msg);
  };

  const toggleSelect = (id: string) =>
    setSelected((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const allVisibleSelected = visible.length > 0 && visible.every((v) => selected.has(v.id));
  const toggleSelectAll = () => {
    if (allVisibleSelected) setSelected(new Set());
    else setSelected(new Set(visible.map((v) => v.id)));
  };

  const bulk = (kind: ActionKind) => {
    const ids = Array.from(selected);
    if (!ids.length) return toast.error("Select items first");
    dismiss(ids, `${kind === "Approve" ? "Approved" : kind + "d"} ${ids.length} item${ids.length > 1 ? "s" : ""}`);
  };

  const typeChips: { key: TypeKey | "all"; label: string; count: number }[] = [
    { key: "all", label: "All", count: totalActive },
    ...(Object.keys(TYPE_META) as TypeKey[]).map((k) => ({
      key: k,
      label: TYPE_META[k].label,
      count: countsByType[k] ?? 0,
    })),
  ];

  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ClipboardList className="h-4 w-4" /> Review Queue
          </div>
          <h1 className="text-3xl font-bold tracking-tight mt-1">Everything waiting on you</h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            New attractions the AI discovered, drafts it wrote, FAQs it updated, and guides it wants to refresh —
            all in one place. Approve, edit, or dismiss to keep the pipeline moving.
          </p>
        </div>
        <Button variant="outline"><Filter className="h-4 w-4 mr-1" /> Save view</Button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KPI label="In queue" value={totalActive} />
        <KPI label="High priority" value={highCount} warn />
        <KPI label="Drafts to approve" value={generatedCount} accent />
        <KPI label="Avg. review time" value="4.2h" />
      </div>

      {/* Filters */}
      <Card className="p-3">
        <div className="flex flex-wrap items-center gap-2">
          {typeChips.map((c) => {
            const active = typeFilter === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setTypeFilter(c.key)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs border transition flex items-center gap-1.5",
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-violet"
                    : "bg-background hover:bg-muted border-border"
                )}
              >
                <span>{c.label}</span>
                <span
                  className={cn(
                    "text-[10px] font-semibold rounded-full px-1.5 min-w-[18px] text-center",
                    active ? "bg-primary-foreground/20" : "bg-muted"
                  )}
                >
                  {c.count}
                </span>
              </button>
            );
          })}
          <div className="ml-auto flex items-center gap-2">
            <select
              value={resortFilter}
              onChange={(e) => setResortFilter(e.target.value)}
              className="h-8 rounded-md border bg-background px-2 text-xs max-w-[200px]"
              aria-label="Filter by resort"
            >
              <option value="all">All resorts ({RESORTS.length})</option>
              {[...RESORTS]
                .sort((a, b) => a.shortName.localeCompare(b.shortName))
                .map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.shortName}
                  </option>
                ))}
            </select>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value as typeof priorityFilter)}
              className="h-8 rounded-md border bg-background px-2 text-xs"
            >
              <option value="all">All priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <Input
              placeholder="Search…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="h-8 w-[220px] text-xs"
            />
          </div>
        </div>
      </Card>

      {/* Bulk actions bar */}
      {selected.size > 0 && (
        <Card className="p-3 flex items-center justify-between gradient-soft border-primary/30">
          <div className="text-sm font-medium">{selected.size} selected</div>
          <div className="flex gap-2">
            <Button size="sm" onClick={() => bulk("Approve")}><Check className="h-4 w-4 mr-1" /> Approve</Button>
            <Button size="sm" variant="outline" onClick={() => bulk("Generate")}><Sparkles className="h-4 w-4 mr-1" /> Generate</Button>
            <Button size="sm" variant="outline" onClick={() => bulk("Update")}><RefreshCcw className="h-4 w-4 mr-1" /> Update</Button>
            <Button size="sm" variant="ghost" onClick={() => dismiss(Array.from(selected), `Dismissed ${selected.size} item(s)`, "default")}>
              <X className="h-4 w-4 mr-1" /> Dismiss
            </Button>
          </div>
        </Card>
      )}

      {/* Queue table */}
      <Card className="overflow-hidden">
        <div className="grid grid-cols-[36px_180px_1fr_140px_90px_180px] items-center gap-3 px-4 py-2.5 border-b bg-muted/40 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          <Checkbox checked={allVisibleSelected} onCheckedChange={toggleSelectAll} />
          <div>Type</div>
          <div>Item</div>
          <div>Source</div>
          <div>Priority</div>
          <div className="text-right pr-1">Action</div>
        </div>

        <div className="divide-y">
          <AnimatePresence initial={false}>
            {visible.map((it) => {
              const Icon = it.icon;
              const ActionIcon = ACTION_ICON[it.action];
              const isSel = selected.has(it.id);
              return (
                <motion.div
                  key={it.id}
                  layout
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.18 }}
                  className={cn(
                    "grid grid-cols-[36px_180px_1fr_140px_90px_180px] items-center gap-3 px-4 py-3 hover:bg-accent/40 transition",
                    isSel && "bg-primary/5"
                  )}
                >
                  <Checkbox checked={isSel} onCheckedChange={() => toggleSelect(it.id)} />

                  <div>
                    <div className={cn("inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-medium", it.accent)}>
                      <Icon className="h-3.5 w-3.5" />
                      {it.typeLabel}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="font-medium text-sm truncate">{it.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{it.detail}</div>
                  </div>

                  <div className="min-w-0 text-xs">
                    {it.sourceHref ? (
                      <Link
                        to={it.sourceHref.to}
                        params={it.sourceHref.params as never}
                        className="text-primary hover:underline flex items-center gap-1 truncate"
                      >
                        <span className="truncate">{it.source}</span>
                        <ArrowRight className="h-3 w-3 shrink-0" />
                      </Link>
                    ) : (
                      <span className="text-muted-foreground truncate">{it.source}</span>
                    )}
                    <div className="text-[11px] text-muted-foreground">{it.createdAt}</div>
                  </div>

                  <PriorityPill priority={it.priority} />

                  <div className="flex justify-end gap-1">
                    <Button
                      size="sm"
                      onClick={() =>
                        dismiss([it.id], `${it.action === "Approve" ? "Approved" : it.action + "d"}: ${it.title}`)
                      }
                    >
                      <ActionIcon className="h-3.5 w-3.5 mr-1" /> {it.action}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      title="Snooze"
                      onClick={() => dismiss([it.id], "Snoozed for later", "default")}
                    >
                      <Clock className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      title="Dismiss"
                      onClick={() => dismiss([it.id], "Dismissed", "error")}
                    >
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {visible.length === 0 && (
            <div className="p-12 text-center text-muted-foreground">
              <div className="text-4xl mb-2">✨</div>
              <div className="font-medium text-foreground">Queue clear</div>
              <div className="text-sm">Your agents will drop new items here as they discover them.</div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function KPI({
  label,
  value,
  accent,
  warn,
}: {
  label: string;
  value: number | string;
  accent?: boolean;
  warn?: boolean;
}) {
  return (
    <Card className="p-4">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div
        className={cn(
          "mt-1 text-3xl font-bold tabular-nums",
          accent && "text-primary",
          warn && "text-warning-foreground"
        )}
      >
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
    </Card>
  );
}

function PriorityPill({ priority }: { priority: "High" | "Medium" | "Low" }) {
  const cls =
    priority === "High"
      ? "bg-red-500/10 text-red-600 border-red-500/20"
      : priority === "Medium"
      ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
      : "bg-slate-500/10 text-slate-600 border-slate-500/20";
  return (
    <Badge variant="outline" className={cn("text-[10px] w-fit", cls)}>
      {priority}
    </Badge>
  );
}
