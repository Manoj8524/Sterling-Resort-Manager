import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Search,
  ExternalLink,
  FileText,
  MapPin,
  Sparkles,
  HelpCircle,
  Compass,
  Building2,
  Eye,
  CheckCircle2,
  Clock,
  Info,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { RESORTS } from "@/data/resorts";
import {
  LAYERS,
  generatePages,
  renderPage,
  type Layer,
  type GenPage,
  type Block,
} from "@/data/generated";

export const Route = createFileRoute("/pages")({
  head: () => ({ meta: [{ title: "Generated Pages — Sterling AEO/GEO" }] }),
  component: PagesIndex,
});

const LAYER_ICON: Record<Layer, typeof Building2> = {
  master: Building2,
  hyperlocal: MapPin,
  geo: Sparkles,
  aeo: HelpCircle,
  guides: Compass,
};

type Status = "needs-review" | "approved" | "published";
const STATUS_META: Record<Status, { label: string; tone: string; icon: typeof CheckCircle2 }> = {
  "needs-review": { label: "Needs review", tone: "text-warning-foreground border-warning/50", icon: Clock },
  approved:       { label: "Approved",     tone: "text-primary border-primary/40",             icon: CheckCircle2 },
  published:      { label: "Published",    tone: "text-success border-success/40",             icon: CheckCircle2 },
};

// Deterministic pseudo-status from slug so the demo is stable across renders.
function statusOf(slug: string): Status {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const n = h % 10;
  if (n < 3) return "needs-review";  // 30% need review
  if (n < 6) return "approved";       // 30% approved
  return "published";                 // 40% published
}

function PagesIndex() {
  const [resortSlug, setResortSlug] = useState<string>(RESORTS[0]?.slug ?? "");
  const [q, setQ] = useState("");
  const [layer, setLayer] = useState<Layer | "all">("all");
  const [status, setStatus] = useState<Status | "all">("all");
  const [helpOpen, setHelpOpen] = useState(false);
  const [preview, setPreview] = useState<GenPage | null>(null);
  const [approvals, setApprovals] = useState<Record<string, Status>>({});

  const resort = useMemo(() => RESORTS.find((r) => r.slug === resortSlug)!, [resortSlug]);
  const pages = useMemo(() => generatePages(resort), [resort]);

  const statusFor = (p: GenPage): Status => approvals[p.slug] ?? statusOf(p.slug);

  const filtered = pages.filter((p) => {
    if (layer !== "all" && p.layer !== layer) return false;
    if (status !== "all" && statusFor(p) !== status) return false;
    if (q) {
      const s = q.toLowerCase();
      return p.title.toLowerCase().includes(s) || p.groupLabel.toLowerCase().includes(s);
    }
    return true;
  });

  const counts = LAYERS.map((l) => ({ ...l, count: pages.filter((p) => p.layer === l.key).length }));
  const statusCounts: Record<Status, number> = {
    "needs-review": 0, approved: 0, published: 0,
  };
  for (const p of pages) statusCounts[statusFor(p)]++;

  const grouped = LAYERS.map((l) => {
    const inLayer = filtered.filter((p) => p.layer === l.key);
    const byGroup = new Map<string, { label: string; items: GenPage[] }>();
    for (const p of inLayer) {
      const entry = byGroup.get(p.group) ?? { label: p.groupLabel, items: [] };
      entry.items.push(p);
      byGroup.set(p.group, entry);
    }
    return { ...l, groups: Array.from(byGroup.values()) };
  }).filter((l) => l.groups.length > 0);

  const approve = (slug: string) => {
    setApprovals((prev) => ({ ...prev, [slug]: "approved" }));
    toast.success("Page approved");
  };
  const publish = (slug: string) => {
    setApprovals((prev) => ({ ...prev, [slug]: "published" }));
    toast.success("Page published");
  };

  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Generated Pages</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Pick a resort to browse its five-layer content stack. Preview any page, then approve or publish it.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setHelpOpen(true)}>
          <Info className="h-4 w-4 mr-1.5" /> What are AEO &amp; GEO pages?
        </Button>
      </div>

      {/* Sticky controls */}
      <Card className="p-4 flex flex-wrap gap-3 items-center sticky top-14 z-20 bg-card/95 backdrop-blur">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Resort</span>
        </div>
        <Select value={resortSlug} onValueChange={setResortSlug}>
          <SelectTrigger className="w-[280px]"><SelectValue /></SelectTrigger>
          <SelectContent className="max-h-[400px]">
            {RESORTS.map((r) => (
              <SelectItem key={r.slug} value={r.slug}>
                {r.shortName} <span className="text-muted-foreground">· {r.location}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={layer} onValueChange={(v) => setLayer(v as Layer | "all")}>
          <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All layers ({pages.length})</SelectItem>
            {counts.map((l) => (
              <SelectItem key={l.key} value={l.key}>{l.label} ({l.count})</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={status} onValueChange={(v) => setStatus(v as Status | "all")}>
          <SelectTrigger className="w-[190px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses ({pages.length})</SelectItem>
            <SelectItem value="needs-review">Needs review ({statusCounts["needs-review"]})</SelectItem>
            <SelectItem value="approved">Approved ({statusCounts.approved})</SelectItem>
            <SelectItem value="published">Published ({statusCounts.published})</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search page title…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" />
        </div>

        <Badge variant="secondary" className="text-xs">{filtered.length} pages</Badge>
      </Card>

      {/* Layer summary strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {counts.map((l) => {
          const Icon = LAYER_ICON[l.key];
          const active = layer === l.key;
          return (
            <button
              key={l.key}
              onClick={() => setLayer(active ? "all" : l.key)}
              className={`text-left rounded-lg border p-3 transition hover:bg-accent ${active ? "border-primary bg-accent" : "bg-card"}`}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wide">{l.label}</span>
              </div>
              <div className="mt-1 text-2xl font-bold">{l.count}</div>
              <div className="text-[11px] text-muted-foreground line-clamp-1">{l.description}</div>
            </button>
          );
        })}
      </div>

      {/* Grouped list */}
      <div className="space-y-6">
        {grouped.map((l) => {
          const Icon = LAYER_ICON[l.key];
          return (
            <section key={l.key}>
              <div className="flex items-center gap-2 mb-3">
                <Icon className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wide">{l.label}</h2>
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">{l.groups.reduce((n, g) => n + g.items.length, 0)} pages</span>
              </div>
              <div className="space-y-3">
                {l.groups.map((g) => (
                  <Card key={g.label} className="overflow-hidden">
                    <div className="px-4 py-2 border-b bg-muted/40 text-xs font-medium text-muted-foreground">
                      {g.label}
                    </div>
                    <div className="divide-y">
                      {g.items.map((p) => (
                        <PageRow
                          key={p.slug}
                          page={p}
                          resortSlug={resort.slug}
                          status={statusFor(p)}
                          onPreview={() => setPreview(p)}
                        />
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
        {grouped.length === 0 && (
          <Card className="p-10 text-center text-sm text-muted-foreground">No pages match your filters.</Card>
        )}
      </div>

      {/* Preview dialog */}
      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden flex flex-col p-0">
          {preview && (
            <>
              <DialogHeader className="px-6 pt-6 pb-3 border-b">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="text-[10px]">{preview.layerLabel}</Badge>
                  <StatusBadge status={statusFor(preview)} />
                </div>
                <DialogTitle className="text-xl">{preview.title}</DialogTitle>
                <DialogDescription className="font-mono text-xs">
                  /g/{resort.slug}/{preview.slug}
                </DialogDescription>
              </DialogHeader>

              <div className="flex-1 overflow-auto px-6 py-5">
                <BlockRenderer blocks={renderPage(preview, resort)} />
              </div>

              <DialogFooter className="border-t px-6 py-3 flex-row justify-between sm:justify-between gap-2">
                <a
                  href={`/g/${resort.slug}/${preview.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Open in new tab
                </a>
                <div className="flex gap-2">
                  {statusFor(preview) === "needs-review" && (
                    <Button variant="outline" size="sm" onClick={() => approve(preview.slug)}>
                      <CheckCircle2 className="h-4 w-4 mr-1.5" /> Approve
                    </Button>
                  )}
                  {statusFor(preview) !== "published" && (
                    <Button size="sm" onClick={() => publish(preview.slug)}>
                      Publish
                    </Button>
                  )}
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* AEO vs GEO help dialog */}
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>AEO vs GEO pages — what's the difference?</DialogTitle>
            <DialogDescription>
              Both help AI engines (ChatGPT, Gemini, Perplexity, Google AI Overviews) recommend Sterling. They just answer different <em>kinds</em> of user queries.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 mt-2">
            <div className="rounded-lg border p-4 bg-muted/30">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">GEO — Generative Engine Optimization</h3>
                <Badge variant="outline" className="text-[10px]">Intent pages</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                One page per <span className="font-medium text-foreground">intent</span> (audience, occasion, segment). Answers <em>"where should I go for X kind of trip?"</em>. Ranked when a user describes a <span className="font-medium text-foreground">situation</span>.
              </p>
              <div className="mt-3 rounded border bg-card p-3 text-sm">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Example query</div>
                <div className="italic">"Best family resort in Ooty for a weekend with young kids"</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-3 mb-1">GEO page that owns it</div>
                <div className="font-mono text-xs">/g/sterling-ooty/geo--family</div>
                <div className="text-xs text-muted-foreground mt-1">→ "Best family resort in Ooty" — pitch, why-us, ideal-for, FAQs.</div>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/30">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">AEO — Answer Engine Optimization</h3>
                <Badge variant="outline" className="text-[10px]">Question pages</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                One page per <span className="font-medium text-foreground">specific question</span>. Answers direct <em>"is / does / can / where / how"</em> queries with a short factual answer up top.
              </p>
              <div className="mt-3 rounded border bg-card p-3 text-sm">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Example query</div>
                <div className="italic">"Does Sterling Ooty have a swimming pool?"</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-3 mb-1">AEO page that owns it</div>
                <div className="font-mono text-xs">/g/sterling-ooty/aeo--pool</div>
                <div className="text-xs text-muted-foreground mt-1">→ "Which resort has a swimming pool?" — short answer, key facts, FAQ.</div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="text-sm font-semibold mb-2">Quick rule of thumb</h4>
              <ul className="text-sm space-y-1.5 text-muted-foreground">
                <li>• If the user is <span className="text-foreground font-medium">picking</span> (family, luxury, weekend) → <span className="text-foreground font-medium">GEO</span></li>
                <li>• If the user is <span className="text-foreground font-medium">asking</span> (does / can / is / where) → <span className="text-foreground font-medium">AEO</span></li>
              </ul>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setHelpOpen(false)}>Got it</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const m = STATUS_META[status];
  const Icon = m.icon;
  return (
    <Badge variant="outline" className={`text-[10px] gap-1 ${m.tone}`}>
      <Icon className="h-2.5 w-2.5" /> {m.label}
    </Badge>
  );
}

function PageRow({
  page,
  resortSlug,
  status,
  onPreview,
}: {
  page: GenPage;
  resortSlug: string;
  status: Status;
  onPreview: () => void;
}) {
  const href = `/g/${resortSlug}/${page.slug}`;
  return (
    <div className="group flex items-center gap-3 px-4 py-3 hover:bg-accent/40 transition">
      <FileText className="h-4 w-4 text-primary shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm truncate">{page.title}</div>
        <div className="text-xs text-muted-foreground truncate font-mono">{href}</div>
      </div>
      <StatusBadge status={status} />
      <Button size="sm" variant="ghost" className="h-8" onClick={onPreview}>
        <Eye className="h-3.5 w-3.5 mr-1" /> View
      </Button>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary p-1"
        title="Open in new tab"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}

function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <article className="space-y-5 max-w-none prose-sm">
      {blocks.map((b, i) => {
        if (b.kind === "lede") {
          return (
            <p key={i} className="text-base leading-relaxed text-foreground/90 font-medium">
              {b.text}
            </p>
          );
        }
        if (b.kind === "section") {
          return (
            <section key={i}>
              <h3 className="text-base font-semibold mb-2">{b.heading}</h3>
              {b.paragraphs.map((p, j) => (
                <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {p}
                </p>
              ))}
            </section>
          );
        }
        if (b.kind === "list") {
          return (
            <section key={i}>
              <h3 className="text-base font-semibold mb-2">{b.heading}</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </section>
          );
        }
        if (b.kind === "faq") {
          return (
            <section key={i}>
              <h3 className="text-base font-semibold mb-2">FAQs</h3>
              <div className="space-y-3">
                {b.items.map((it, j) => (
                  <div key={j} className="rounded border p-3 bg-muted/20">
                    <div className="text-sm font-medium">{it.q}</div>
                    <div className="text-sm text-muted-foreground mt-1">{it.a}</div>
                  </div>
                ))}
              </div>
            </section>
          );
        }
        // cta
        return (
          <div key={i} className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm font-medium">
            {b.text}
          </div>
        );
      })}
    </article>
  );
}
