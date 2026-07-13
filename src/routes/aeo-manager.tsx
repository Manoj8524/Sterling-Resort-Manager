import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  MessageCircleQuestion,
  Sparkles,
  Plus,
  Upload,
  Download,
  Search,
  Wand2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Filter,
  HelpCircle,
  Radio,
  Headphones,
  BarChart3,
  Bot,
  Users,
  PenTool,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { RESORTS } from "@/data/resorts";

export const Route = createFileRoute("/aeo-manager")({
  head: () => ({
    meta: [
      { title: "AEO Manager — Question Workspace" },
      { name: "description", content: "Manage question clusters and grow answer coverage across AI assistants." },
    ],
  }),
  component: AeoManager,
});

type Source = "AI Discovery" | "Search Console" | "Support" | "Chatbot" | "Voice" | "Manual";

type Cluster = {
  id: string;
  name: string;
  category: string;
  volume: number;
  trend: number;
  totalCities: number;
  coveredCities: string[];
  missingCities: string[];
  pagesGenerated: number;
  questionsCovered: number;
  source: Source;
};

const CITIES = Array.from(new Set(RESORTS.map((r) => r.location)));

function buildClusters(): Cluster[] {
  const seed: Array<Omit<Cluster, "totalCities" | "coveredCities" | "missingCities" | "pagesGenerated" | "questionsCovered"> & { covered: number }> = [
    { id: "where-to-stay",  name: "Where to stay in {city}?",                category: "Discovery",     volume: 18400, trend: 12, covered: 0.95, source: "Search Console" },
    { id: "family-best",    name: "Best family resort in {city}?",           category: "Recommendation",volume: 12300, trend: 15, covered: 0.92, source: "AI Discovery" },
    { id: "things-to-do",   name: "What are the best things to do in {city}?", category: "Discovery",   volume: 15600, trend: 18, covered: 0.88, source: "Search Console" },
    { id: "pet-friendly",   name: "Is Sterling pet friendly?",               category: "Amenity",       volume: 4300,  trend: 42, covered: 0.25, source: "Support" },
    { id: "pool",           name: "Which resort has a swimming pool?",       category: "Amenity",       volume: 3200,  trend: 22, covered: 0.52, source: "Chatbot" },
    { id: "airport",        name: "Resorts near airport",                    category: "Logistics",     volume: 6100,  trend: 19, covered: 0.60, source: "Search Console" },
    { id: "spa",            name: "Resorts with spa",                        category: "Amenity",       volume: 5800,  trend: 26, covered: 0.74, source: "AI Discovery" },
    { id: "seniors",        name: "Resorts for senior citizens",             category: "Audience",      volume: 2900,  trend: 14, covered: 0.18, source: "Voice" },
    { id: "ev-charging",    name: "Does Sterling have EV charging?",         category: "Amenity",       volume: 1800,  trend: 220,covered: 0.10, source: "AI Discovery" },
    { id: "breakfast",      name: "Is breakfast complimentary?",             category: "Policy",        volume: 4200,  trend: 8,  covered: 0.82, source: "Chatbot" },
  ];
  return seed.map((s) => {
    const total = CITIES.length;
    const coveredN = Math.round(total * s.covered);
    return {
      id: s.id,
      name: s.name,
      category: s.category,
      volume: s.volume,
      trend: s.trend,
      source: s.source,
      totalCities: total,
      coveredCities: CITIES.slice(0, coveredN),
      missingCities: CITIES.slice(coveredN),
      pagesGenerated: coveredN,
      questionsCovered: Math.round(coveredN * 4.5),
    };
  });
}

const INITIAL_QUESTION_SUGGESTIONS = [
  { id: "sq-ev",     q: "Does Sterling have EV charging?",           category: "Amenity",   source: "AI Discovery" as Source,   volume: 1800, trend: 220 },
  { id: "sq-mon",    q: "Which resort is best during monsoon?",      category: "Seasonal",  source: "Search Console" as Source, volume: 3400, trend: 82 },
  { id: "sq-brk",    q: "Is breakfast complimentary?",               category: "Policy",    source: "Chatbot" as Source,        volume: 2200, trend: 34 },
  { id: "sq-ind",    q: "Which resort has indoor games?",            category: "Amenity",   source: "Support" as Source,        volume: 1400, trend: 41 },
  { id: "sq-wch",    q: "Which resort is wheelchair accessible?",    category: "Audience",  source: "Voice" as Source,          volume: 1100, trend: 66 },
];

const SOURCE_META: Record<Source, { icon: React.ComponentType<{ className?: string }>; tone: string; description: string }> = {
  "AI Discovery":    { icon: Bot,       tone: "text-primary",              description: "Generated from AI trend analysis" },
  "Search Console":  { icon: BarChart3, tone: "text-success",              description: "High impression query" },
  "Support":         { icon: Headphones,tone: "text-warning-foreground",   description: "Frequently asked by guests" },
  "Chatbot":         { icon: MessageCircleQuestion, tone: "text-primary", description: "Common chat question" },
  "Voice":           { icon: Radio,     tone: "text-primary",              description: "Voice search & call analytics" },
  "Manual":          { icon: PenTool,   tone: "text-muted-foreground",     description: "Manually added" },
};

function coverageOf(c: Cluster) {
  return Math.round((c.coveredCities.length / c.totalCities) * 100);
}

function AeoManager() {
  const [clusters, setClusters] = useState<Cluster[]>(() => buildClusters());
  const [suggestions, setSuggestions] = useState(INITIAL_QUESTION_SUGGESTIONS);
  const [selectedId, setSelectedId] = useState(clusters[0].id);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const selected = clusters.find((c) => c.id === selectedId) ?? clusters[0];
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(clusters.map((c) => c.category)))],
    [clusters],
  );

  const filtered = clusters.filter((c) => {
    if (category !== "all" && c.category !== category) return false;
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalPages = clusters.reduce((s, c) => s + c.pagesGenerated, 0);
  const totalMissing = clusters.reduce((s, c) => s + c.missingCities.length, 0);
  const SelectedSourceIcon = SOURCE_META[selected.source].icon;

  const addSuggestion = (s: (typeof INITIAL_QUESTION_SUGGESTIONS)[number]) => {
    const c: Cluster = {
      id: s.id,
      name: s.q,
      category: s.category,
      volume: s.volume,
      trend: s.trend,
      source: s.source,
      totalCities: CITIES.length,
      coveredCities: [],
      missingCities: CITIES,
      pagesGenerated: 0,
      questionsCovered: 0,
    };
    setClusters((prev) => [c, ...prev]);
    setSuggestions((prev) => prev.filter((x) => x.id !== s.id));
    setSelectedId(s.id);
    toast.success(`Added "${s.q}" to your question library`);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="border-b bg-card/40 px-6 py-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
              <MessageCircleQuestion className="h-3.5 w-3.5" /> Question Workspace · Own the answers AI gives
            </div>
            <h1 className="text-2xl font-bold mt-1">AEO Manager</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => toast.success("Import from Search Console / CSV")}>
              <Upload className="h-4 w-4 mr-1.5" /> Import questions
            </Button>
            <Button variant="outline" size="sm" onClick={() => toast.success("Exported question library")}>
              <Download className="h-4 w-4 mr-1.5" /> Export
            </Button>
            <Button size="sm" onClick={() => toast.success("Draft a new question cluster")}>
              <Plus className="h-4 w-4 mr-1.5" /> Add question cluster
            </Button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs">
          <PipelineStep label="Discovery Agent" muted />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <PipelineStep label="Review Queue" muted />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <PipelineStep label="AEO Manager" active />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <PipelineStep label="Content" muted />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <PipelineStep label="Publish" muted />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] min-h-0">
        {/* LEFT — table + suggestions below */}
        <div className="min-w-0 border-r flex flex-col overflow-auto">
          <div className="border-b px-4 py-2 flex items-center gap-2 flex-wrap bg-background sticky top-0 z-10">
            <div className="relative">
              <Search className="h-3.5 w-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions…"
                className="h-8 pl-7 w-[240px] text-xs"
              />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Filter className="h-3.5 w-3.5" />
            </div>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`h-7 rounded-full border px-2.5 text-xs capitalize transition-colors ${
                  category === c ? "bg-primary text-primary-foreground border-primary" : "bg-background hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
            <div className="ml-auto text-xs text-muted-foreground">
              {filtered.length} clusters · {totalPages} pages · {totalMissing} missing
            </div>
          </div>

          <div>
            <table className="w-full text-sm">
              <thead className="bg-card/95 border-b text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left font-medium py-2.5 px-4">Question cluster</th>
                  <th className="text-right font-medium py-2.5 px-2">Demand</th>
                  <th className="text-left font-medium py-2.5 px-2 w-[240px]">Coverage</th>
                  <th className="text-right font-medium py-2.5 px-2">Pages</th>
                  <th className="text-left font-medium py-2.5 px-2">Source</th>
                  <th className="text-right font-medium py-2.5 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => {
                  const cov = coverageOf(c);
                  const isSel = c.id === selected.id;
                  const SIcon = SOURCE_META[c.source].icon;
                  return (
                    <tr
                      key={c.id}
                      onClick={() => setSelectedId(c.id)}
                      className={`border-b cursor-pointer transition-colors ${
                        isSel ? "bg-accent/50" : "hover:bg-muted/40"
                      }`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {isSel && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                          <div>
                            <div className="font-medium">{c.name}</div>
                            <div className="text-xs text-muted-foreground">{c.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right tabular-nums">
                        <div>{c.volume.toLocaleString()}</div>
                        <div className="text-xs text-success">+{c.trend}%</div>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <Progress value={cov} className="h-1.5 flex-1" />
                          <span className="text-xs font-semibold w-9 text-right tabular-nums">{cov}%</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {c.coveredCities.length}/{c.totalCities} cities
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right tabular-nums font-medium">{c.pagesGenerated}</td>
                      <td className="py-3 px-2">
                        <div className={`flex items-center gap-1.5 text-xs ${SOURCE_META[c.source].tone}`}>
                          <SIcon className="h-3.5 w-3.5" />
                          <span className="text-foreground">{c.source}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {cov >= 100 ? (
                          <Badge variant="outline" className="text-success border-success/40">
                            <CheckCircle2 className="h-3 w-3 mr-1" /> Complete
                          </Badge>
                        ) : cov >= 80 ? (
                          <Button size="sm" variant="ghost" onClick={(e) => { e.stopPropagation(); setSelectedId(c.id); }}>
                            View
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.success(`Queued ${c.missingCities.length} answer pages for "${c.name}"`);
                            }}
                          >
                            <Wand2 className="h-3 w-3 mr-1" /> Generate Missing Pages
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* AI suggestions — main section, below table */}
          <div className="p-5 border-t bg-muted/20">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-semibold flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-primary" /> AI-suggested questions
                <Badge variant="secondary" className="ml-1">{suggestions.length}</Badge>
              </h3>
              <span className="text-xs text-muted-foreground">Discovery · Search Console · Chatbot · Support · Voice</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Click <span className="font-medium">Add to library</span> to add a suggestion as a new row above.
            </p>
            {suggestions.length === 0 ? (
              <div className="text-xs text-muted-foreground italic">All suggestions reviewed. Fresh ones will appear here as they're discovered.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {suggestions.map((s) => {
                  const SIcon = SOURCE_META[s.source].icon;
                  return (
                    <div key={s.id} className="rounded-md border bg-card p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-sm font-medium">{s.q}</div>
                          <div className={`flex items-center gap-1.5 text-xs mt-1 ${SOURCE_META[s.source].tone}`}>
                            <SIcon className="h-3 w-3" />
                            <span className="text-muted-foreground">{s.source} · {s.category}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-success border-success/40 shrink-0">
                          +{s.trend}%
                        </Badge>
                      </div>
                      <div className="mt-2 flex justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs"
                          onClick={() => addSuggestion(s)}
                        >
                          <Plus className="h-3 w-3 mr-1" /> Add to library
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — detail only */}
        <aside className="min-w-0 flex flex-col bg-muted/20 overflow-auto">
          <div className="border-b p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <HelpCircle className="h-3.5 w-3.5" /> {selected.category}
            </div>
            <div className="flex items-start justify-between gap-3 mt-1">
              <h2 className="text-lg font-bold leading-snug">{selected.name}</h2>
              <Badge variant="secondary" className="shrink-0">+{selected.trend}%</Badge>
            </div>

            <div className={`mt-3 inline-flex items-center gap-1.5 text-xs ${SOURCE_META[selected.source].tone}`}>
              <SelectedSourceIcon className="h-3.5 w-3.5" />
              <span className="text-muted-foreground">{selected.source} · {SOURCE_META[selected.source].description}</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              <MiniStat label="Coverage" value={`${coverageOf(selected)}%`} accent />
              <MiniStat label="Pages" value={selected.pagesGenerated.toString()} />
              <MiniStat label="Questions" value={selected.questionsCovered.toString()} />
            </div>

            <Progress value={coverageOf(selected)} className="h-1.5 mt-4" />
            <div className="mt-1.5 text-xs text-muted-foreground">
              {selected.coveredCities.length} of {selected.totalCities} cities covered
            </div>
          </div>

          <div className="p-5 border-b">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-destructive" /> Missing cities
                <span className="text-xs text-muted-foreground font-normal">({selected.missingCities.length})</span>
              </h3>
              {selected.missingCities.length > 0 && (
                <Button
                  size="sm"
                  onClick={() => toast.success(`Generating ${selected.missingCities.length} answer pages`)}
                >
                  <Wand2 className="h-3 w-3 mr-1" /> Generate
                </Button>
              )}
            </div>
            {selected.missingCities.length === 0 ? (
              <div className="text-xs text-muted-foreground">All cities covered.</div>
            ) : (
              <div className="flex flex-wrap gap-1.5 max-h-[180px] overflow-auto">
                {selected.missingCities.slice(0, 24).map((c) => (
                  <Badge key={c} variant="outline" className="text-xs font-normal">
                    {c}
                  </Badge>
                ))}
                {selected.missingCities.length > 24 && (
                  <span className="text-xs text-muted-foreground self-center">
                    +{selected.missingCities.length - 24} more
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Sources legend stays in sidebar */}
          <div className="p-5">
            <Card className="p-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold mb-2">
                <Users className="h-3.5 w-3.5" /> Where questions come from
              </div>
              <div className="space-y-1.5">
                {(Object.keys(SOURCE_META) as Source[]).map((s) => {
                  const Icon = SOURCE_META[s].icon;
                  return (
                    <div key={s} className="flex items-center gap-2 text-xs">
                      <Icon className={`h-3 w-3 ${SOURCE_META[s].tone}`} />
                      <span className="font-medium">{s}</span>
                      <span className="text-muted-foreground truncate">— {SOURCE_META[s].description}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}

function MiniStat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`text-xl font-bold mt-0.5 ${accent ? "text-primary" : ""}`}>{value}</div>
    </div>
  );
}

function PipelineStep({ label, active, muted }: { label: string; active?: boolean; muted?: boolean }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-full border text-xs ${
        active
          ? "bg-primary text-primary-foreground border-primary font-medium"
          : muted
            ? "bg-background text-muted-foreground"
            : "bg-background"
      }`}
    >
      {label}
    </span>
  );
}
