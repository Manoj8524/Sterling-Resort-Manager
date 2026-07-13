import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, LayoutGrid, List, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ResortCard } from "@/components/resort-card";
import { RESORTS } from "@/data/resorts";

export const Route = createFileRoute("/resorts/")({
  head: () => ({
    meta: [
      { title: "Resorts — Sterling AEO/GEO Admin" },
      { name: "description", content: "Manage hyperlocal content for every Sterling resort." },
    ],
  }),
  component: Resorts,
});

function Resorts() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("all");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    return RESORTS.filter((r) => {
      if (region !== "all" && r.region !== region) return false;
      if (category !== "all" && r.category !== category) return false;
      if (status !== "all" && r.status !== status) return false;
      if (q) {
        const s = q.toLowerCase();
        return (
          r.name.toLowerCase().includes(s) ||
          r.location.toLowerCase().includes(s) ||
          r.state.toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [q, region, category, status]);

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">Resorts</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {filtered.length} of {RESORTS.length} Sterling properties. Open a resort to edit metadata, generate hyperlocal pages and review agent output.
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name, location, state…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
          </div>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Region" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All regions</SelectItem>
              <SelectItem value="North">North</SelectItem>
              <SelectItem value="South">South</SelectItem>
              <SelectItem value="East">East</SelectItem>
              <SelectItem value="West">West</SelectItem>
              <SelectItem value="Central">Central</SelectItem>
            </SelectContent>
          </Select>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {["Hill", "Beach", "Wildlife", "Heritage", "Spiritual", "Backwater", "City", "Desert"].map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All status</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="review">In review</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
          <div className="ml-auto flex rounded-md border">
            <Button variant={view === "grid" ? "secondary" : "ghost"} size="sm" onClick={() => setView("grid")}>
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant={view === "list" ? "secondary" : "ghost"} size="sm" onClick={() => setView("list")}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {view === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((r) => (
            <ResortCard key={r.slug} resort={r} />
          ))}
        </div>
      ) : (
        <Card className="overflow-hidden">
          <div className="divide-y">
            {filtered.map((r) => (
              <a key={r.slug} href={`/resorts/${r.slug}`} className="flex items-center gap-4 p-3 hover:bg-accent transition">
                <img src={r.image} alt="" className="h-14 w-20 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{r.shortName}</div>
                  <div className="text-xs text-muted-foreground">{r.location}, {r.state}</div>
                </div>
                <Badge variant="secondary">{r.category}</Badge>
                <div className="text-sm text-muted-foreground w-20 text-right">{r.pagesGenerated} pages</div>
                <div className="w-16 text-right text-sm font-semibold text-primary">AEO {r.aeoScore}</div>
              </a>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
