import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Globe2,
  Target,
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { RESORTS } from "@/data/resorts";

export const Route = createFileRoute("/geo-manager")({
  head: () => ({
    meta: [
      { title: "GEO Manager — Intent Workspace" },
      { name: "description", content: "Manage the approved intent library and track coverage across resorts." },
    ],
  }),
  component: GeoManager,
});

type Intent = {
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
};

const CITIES = Array.from(new Set(RESORTS.map((r) => r.location)));

function buildIntents(): Intent[] {
  const seed = [
    { id: "family",     name: "Family Resort",       category: "Audience", volume: 12400, trend: 12, covered: 0.86 },
    { id: "luxury",     name: "Luxury Resort",       category: "Segment",  volume: 9800,  trend: 15, covered: 0.72 },
    { id: "weekend",    name: "Weekend Getaway",     category: "Occasion", volume: 15600, trend: 18, covered: 0.64 },
    { id: "honeymoon",  name: "Honeymoon Stay",      category: "Audience", volume: 7200,  trend: 24, covered: 0.68 },
    { id: "workation",  name: "Workation",           category: "Occasion", volume: 2100,  trend: 56, covered: 0.23 },
    { id: "pet",        name: "Pet Friendly",        category: "Amenity",  volume: 3200,  trend: 42, covered: 0.18 },
    { id: "monsoon",    name: "Monsoon Holiday",     category: "Seasonal", volume: 5100,  trend: 31, covered: 0.48 },
    { id: "corporate",  name: "Corporate Offsite",   category: "Segment",  volume: 4600,  trend: 22, covered: 0.55 },
    { id: "senior",     name: "Senior Citizen Stay", category: "Audience", volume: 2900,  trend: 14, covered: 0.32 },
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
      totalCities: total,
      coveredCities: CITIES.slice(0, coveredN),
      missingCities: CITIES.slice(coveredN),
      pagesGenerated: coveredN,
      questionsCovered: Math.round(coveredN * 6.5),
    };
  });
}

const INITIAL_SUGGESTIONS = [
  { id: "s-ev",      name: "EV-Ready Resort",       category: "Amenity",  volume: 1800, trend: 220 },
  { id: "s-access",  name: "Wheelchair Accessible", category: "Audience", volume: 2400, trend: 88 },
  { id: "s-adv",     name: "Adventure Weekend",     category: "Occasion", volume: 6400, trend: 41 },
  { id: "s-spa",     name: "Spa & Wellness Escape", category: "Segment",  volume: 5800, trend: 34 },
  { id: "s-ayur",    name: "Ayurveda Retreat",      category: "Segment",  volume: 3900, trend: 62 },
];

function coverageOf(i: Intent) {
  return Math.round((i.coveredCities.length / i.totalCities) * 100);
}

function GeoManager() {
  const [intents, setIntents] = useState<Intent[]>(() => buildIntents());
  const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);
  const [selectedId, setSelectedId] = useState(intents[0].id);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const selected = intents.find((i) => i.id === selectedId) ?? intents[0];
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(intents.map((i) => i.category)))],
    [intents],
  );

  const filtered = intents.filter((i) => {
    if (category !== "all" && i.category !== category) return false;
    if (search && !i.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalPages = intents.reduce((s, i) => s + i.pagesGenerated, 0);
  const totalMissing = intents.reduce((s, i) => s + i.missingCities.length, 0);

  const addSuggestion = (s: (typeof INITIAL_SUGGESTIONS)[number]) => {
    const newIntent: Intent = {
      id: s.id,
      name: s.name,
      category: s.category,
      volume: s.volume,
      trend: s.trend,
      totalCities: CITIES.length,
      coveredCities: [],
      missingCities: CITIES,
      pagesGenerated: 0,
      questionsCovered: 0,
    };
    setIntents((prev) => [newIntent, ...prev]);
    setSuggestions((prev) => prev.filter((x) => x.id !== s.id));
    setSelectedId(s.id);
    toast.success(`Added "${s.name}" to your intent library`);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Workspace header */}
      <div className="border-b bg-card/40 px-6 py-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
              <Globe2 className="h-3.5 w-3.5" /> Intent Workspace · Approved intents drive page generation
            </div>
            <h1 className="text-2xl font-bold mt-1">GEO Manager</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => toast.success("Import from CSV / Search Console")}>
              <Upload className="h-4 w-4 mr-1.5" /> Import intents
            </Button>
            <Button variant="outline" size="sm" onClick={() => toast.success("Export intent library")}>
              <Download className="h-4 w-4 mr-1.5" /> Export
            </Button>
            <Button size="sm" onClick={() => toast.success("Draft a new intent cluster")}>
              <Plus className="h-4 w-4 mr-1.5" /> Add intent
            </Button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs">
          <PipelineStep label="Discovery Agent" muted />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <PipelineStep label="Review Queue" muted />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <PipelineStep label="GEO Manager" active />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <PipelineStep label="Content" muted />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <PipelineStep label="Publish" muted />
        </div>
      </div>

      {/* Two-pane workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] min-h-0">
        {/* LEFT — intent list + AI suggestions below */}
        <div className="min-w-0 border-r flex flex-col overflow-auto">
          {/* Toolbar */}
          <div className="border-b px-4 py-2 flex items-center gap-2 flex-wrap bg-background sticky top-0 z-10">
            <div className="relative">
              <Search className="h-3.5 w-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search intents…"
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
              {filtered.length} intents · {totalPages} pages · {totalMissing} missing
            </div>
          </div>

          {/* Table */}
          <div>
            <table className="w-full text-sm">
              <thead className="bg-card/95 border-b text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left font-medium py-2.5 px-4">Intent</th>
                  <th className="text-right font-medium py-2.5 px-2">Volume</th>
                  <th className="text-left font-medium py-2.5 px-2 w-[240px]">Coverage</th>
                  <th className="text-right font-medium py-2.5 px-2">Pages</th>
                  <th className="text-right font-medium py-2.5 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((i) => {
                  const cov = coverageOf(i);
                  const isSel = i.id === selected.id;
                  return (
                    <tr
                      key={i.id}
                      onClick={() => setSelectedId(i.id)}
                      className={`border-b cursor-pointer transition-colors ${
                        isSel ? "bg-accent/50" : "hover:bg-muted/40"
                      }`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {isSel && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                          <div>
                            <div className="font-medium">{i.name}</div>
                            <div className="text-xs text-muted-foreground">{i.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right tabular-nums">
                        <div>{i.volume.toLocaleString()}</div>
                        <div className="text-xs text-success">+{i.trend}%</div>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <Progress value={cov} className="h-1.5 flex-1" />
                          <span className="text-xs font-semibold w-9 text-right tabular-nums">{cov}%</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {i.coveredCities.length}/{i.totalCities} cities
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right tabular-nums font-medium">{i.pagesGenerated}</td>
                      <td className="py-3 px-4 text-right">
                        {cov >= 100 ? (
                          <Badge variant="outline" className="text-success border-success/40">
                            <CheckCircle2 className="h-3 w-3 mr-1" /> Complete
                          </Badge>
                        ) : cov >= 80 ? (
                          <Button size="sm" variant="ghost" onClick={(e) => { e.stopPropagation(); setSelectedId(i.id); }}>
                            View
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.success(`Queued ${i.missingCities.length} page briefs for "${i.name}"`);
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

          {/* AI suggestions — now in main section, below the table */}
          <div className="p-5 border-t bg-muted/20">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-semibold flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-primary" /> AI-suggested intents
                <Badge variant="secondary" className="ml-1">{suggestions.length}</Badge>
              </h3>
              <span className="text-xs text-muted-foreground">via Discovery Agent</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              New intent clusters surfaced by the Discovery Agent. Click <span className="font-medium">Add to library</span> to add them as new rows above.
            </p>
            {suggestions.length === 0 ? (
              <div className="text-xs text-muted-foreground italic">All suggestions reviewed. Fresh ones will appear here as Discovery Agent finds them.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {suggestions.map((s) => (
                  <div key={s.id} className="rounded-md border bg-card p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{s.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {s.category} · {s.volume.toLocaleString()} vol
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
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — detail only */}
        <aside className="min-w-0 flex flex-col bg-muted/20 overflow-auto">
          <div className="border-b p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Target className="h-3.5 w-3.5" /> {selected.category}
            </div>
            <div className="flex items-start justify-between gap-3 mt-1">
              <h2 className="text-xl font-bold">{selected.name}</h2>
              <Badge variant="secondary">+{selected.trend}%</Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">
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
                  onClick={() => toast.success(`Generating ${selected.missingCities.length} pages for ${selected.name}`)}
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

          <div className="p-5">
            <h3 className="text-sm font-semibold mb-3">Covered cities</h3>
            {selected.coveredCities.length === 0 ? (
              <div className="text-xs text-muted-foreground">No cities covered yet.</div>
            ) : (
              <div className="flex flex-wrap gap-1.5 max-h-[160px] overflow-auto">
                {selected.coveredCities.slice(0, 18).map((c) => (
                  <Badge key={c} variant="secondary" className="text-xs font-normal">
                    <CheckCircle2 className="h-2.5 w-2.5 mr-1 text-success" /> {c}
                  </Badge>
                ))}
                {selected.coveredCities.length > 18 && (
                  <span className="text-xs text-muted-foreground self-center">
                    +{selected.coveredCities.length - 18} more
                  </span>
                )}
              </div>
            )}
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
