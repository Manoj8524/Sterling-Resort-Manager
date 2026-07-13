import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AGENTS, WORKFLOW, INBOX } from "@/lib/ai-agents";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Inbox, Activity, FileCheck2, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ai-mode/")({
  component: AgentsOverview,
});

const CATEGORIES = ["All", "Discovery", "Local", "Answer Engine", "Quality"] as const;

function AgentsOverview() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [agents, setAgents] = useState(AGENTS);

  const filtered = useMemo(
    () => (cat === "All" ? agents : agents.filter((a) => a.category === cat)),
    [cat, agents]
  );

  const stats = useMemo(() => {
    const active = agents.filter((a) => a.active).length;
    const totalDrafts = INBOX.filter((i) => i.category === "approvals").length;
    const opportunities = INBOX.filter((i) => i.category === "opportunities").length;
    const runs = agents.reduce((s, a) => s + a.runs, 0);
    return { active, totalDrafts, opportunities, runs };
  }, [agents]);

  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto space-y-10">
      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        <StatCard label="Agents running" value={`${stats.active} / ${agents.length}`} icon={Activity} tint="text-emerald-500" />
        <StatCard label="Opportunities" value={stats.opportunities} icon={Sparkles} tint="text-violet-500" />
        <StatCard label="Drafts awaiting review" value={stats.totalDrafts} icon={FileCheck2} tint="text-amber-500" />
        <StatCard label="Total runs (30d)" value={stats.runs.toLocaleString()} icon={Inbox} tint="text-sky-500" />
      </motion.div>

      {/* Workflow */}
      <section>
        <SectionHeader
          title="How the pipeline works"
          desc="Every agent feeds a single continuous flow — from discovery to publish to monitoring."
        />
        <div className="mt-5 overflow-x-auto pb-2">
          <div className="flex items-stretch gap-3 min-w-max">
            {WORKFLOW.map((w, i) => (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <Card className="w-52 p-4 shrink-0 bg-gradient-to-br from-background to-muted/40 hover:shadow-violet transition">
                  <div className="text-[10px] font-medium text-muted-foreground">STEP {i + 1}</div>
                  <div className="font-semibold text-sm mt-0.5">{w.step}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{w.desc}</div>
                </Card>
                {i < WORKFLOW.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section>
        <SectionHeader
          title="The 15 agents"
          desc="Each agent asks a specific question and drops answers into the Content Inbox."
        />
        <div className="flex flex-wrap gap-2 mt-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium border transition",
                cat === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-muted border-border text-muted-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mt-5">
          {filtered.map((a, i) => (
            <motion.div
              key={a.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
            >
              <Card className="p-5 h-full flex flex-col hover:shadow-violet transition group relative overflow-hidden">
                <div
                  className={cn(
                    "absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl group-hover:opacity-40 transition",
                    a.color
                  )}
                />
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("h-10 w-10 rounded-lg bg-gradient-to-br flex items-center justify-center text-white shadow", a.color)}>
                      <a.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{a.name}</div>
                      <div className="flex gap-1 mt-1">
                        <Badge variant="secondary" className="text-[10px]">{a.category}</Badge>
                        <PriorityBadge p={a.priority} />
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={a.active}
                    onCheckedChange={(v) =>
                      setAgents((prev) => prev.map((x) => (x.id === a.id ? { ...x, active: v } : x)))
                    }
                  />
                </div>

                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{a.tagline}</p>

                <div className="mt-3 rounded-md bg-muted/50 px-3 py-2 text-xs italic text-foreground/80">
                  "{a.question}"
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {a.discovers.slice(0, 4).map((d) => (
                    <span key={d} className="text-[10px] px-2 py-0.5 rounded bg-background border text-muted-foreground">
                      {d}
                    </span>
                  ))}
                  {a.discovers.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-background border text-muted-foreground">
                      +{a.discovers.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground border-t mt-4">
                  <div className="flex gap-3">
                    <span><b className="text-foreground">{a.runs.toLocaleString()}</b> runs</span>
                    <span><b className="text-foreground">{a.drafts}</b> drafts</span>
                    <span><b className="text-foreground">{a.successRate}%</b> success</span>
                  </div>
                  <Link
                    to="/ai-mode/agents/$id"
                    params={{ id: a.id }}
                    className="text-primary hover:underline font-medium flex items-center gap-1"
                  >
                    Open <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, tint }: { label: string; value: string | number; icon: any; tint: string }) {
  return (
    <Card className="p-4 flex items-center gap-3">
      <div className={cn("h-9 w-9 rounded-lg bg-muted flex items-center justify-center", tint)}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-lg font-bold leading-tight">{value}</div>
      </div>
    </Card>
  );
}

function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function PriorityBadge({ p }: { p: "Critical" | "High" | "Medium" }) {
  const cls =
    p === "Critical"
      ? "bg-red-500/10 text-red-600 border-red-500/20"
      : p === "High"
      ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
      : "bg-slate-500/10 text-slate-600 border-slate-500/20";
  return <span className={cn("text-[10px] px-1.5 py-0.5 rounded border font-medium", cls)}>{p}</span>;
}
