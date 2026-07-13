import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AGENTS, getAgent, INBOX } from "@/lib/ai-agents";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, Pause, Check, X, Clock, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Route = createFileRoute("/ai-mode/agents/$id")({
  loader: ({ params }) => {
    const agent = getAgent(params.id);
    if (!agent) throw notFound();
    return { agent };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.agent.name} — AI Mode` : "Agent" }],
  }),
  notFoundComponent: () => (
    <div className="p-8 text-center text-muted-foreground">Agent not found.</div>
  ),
  component: AgentDetail,
});

function AgentDetail() {
  const { agent } = Route.useLoaderData();
  const [active, setActive] = useState(agent.active);
  const items = INBOX.filter((i) => i.agent === agent.id);
  const others = AGENTS.filter((a) => a.id !== agent.id && a.category === agent.category).slice(0, 3);

  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6">
      <Link to="/ai-mode" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to agents
      </Link>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="p-6 relative overflow-hidden">
          <div className={cn("absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br opacity-20 blur-3xl", agent.color)} />
          <div className="flex items-start gap-4 relative">
            <div className={cn("h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg", agent.color)}>
              <agent.icon className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold">{agent.name} Agent</h1>
                <Badge variant="secondary">{agent.category}</Badge>
                <Badge className={cn(
                  agent.priority === "Critical" ? "bg-red-500/10 text-red-600 border-red-500/20" :
                  agent.priority === "High" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" :
                  "bg-slate-500/10 text-slate-600 border-slate-500/20"
                )} variant="outline">{agent.priority}</Badge>
              </div>
              <p className="text-muted-foreground mt-1">{agent.tagline}</p>
              <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-3 text-sm">
                <div className="text-[10px] font-medium text-primary uppercase tracking-wide">The question it asks</div>
                <div className="text-foreground mt-0.5 italic">"{agent.question}"</div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2 text-xs">
                <span className={cn("h-2 w-2 rounded-full", active ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground")} />
                {active ? "Running" : "Paused"}
                <Switch checked={active} onCheckedChange={setActive} />
              </div>
              <Button size="sm" onClick={() => toast.success(`${agent.name} run started`)}>
                <Play className="h-3 w-3 mr-1" /> Run now
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <MiniStat label="Runs (30d)" value={agent.runs.toLocaleString()} />
            <MiniStat label="Drafts produced" value={agent.drafts} />
            <MiniStat label="Success rate" value={`${agent.successRate}%`} progress={agent.successRate} />
          </div>
        </Card>
      </motion.div>

      {/* What it discovers */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="font-semibold flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> What it discovers</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {agent.discovers.map((d: string) => (
              <span key={d} className="text-xs px-3 py-1.5 rounded-full bg-muted border">{d}</span>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="font-semibold">Example outputs</h2>
          <ul className="mt-3 space-y-2">
            {agent.examples.map((e: string) => (
              <li key={e} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Recent items from this agent */}
      <div>
        <h2 className="text-lg font-semibold">Recent items from this agent</h2>
        <p className="text-sm text-muted-foreground">Everything this agent has surfaced into the Content Inbox.</p>
        <div className="mt-3 space-y-2">
          {items.length === 0 && (
            <Card className="p-6 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" /> No items yet — next run scheduled soon.
            </Card>
          )}
          {items.map((it) => (
            <motion.div key={it.id} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="p-4 flex items-start justify-between gap-4 hover:shadow-violet transition">
                <div className="flex-1">
                  <div className="font-medium text-sm">{it.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{it.detail}</div>
                  <div className="flex items-center gap-2 mt-2 text-[10px] text-muted-foreground">
                    <Badge variant="outline" className="text-[10px]">{it.impact} impact</Badge>
                    <span>· {it.createdAt}</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" onClick={() => toast.success("Approved")}><Check className="h-3.5 w-3.5" /></Button>
                  <Button size="sm" variant="ghost" onClick={() => toast("Marked for later")}><Clock className="h-3.5 w-3.5" /></Button>
                  <Button size="sm" variant="ghost" onClick={() => toast.error("Rejected")}><X className="h-3.5 w-3.5" /></Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Related agents */}
      {others.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold">Related agents in {agent.category}</h2>
          <div className="grid gap-3 md:grid-cols-3 mt-3">
            {others.map((o) => (
              <Link key={o.id} to="/ai-mode/agents/$id" params={{ id: o.id }}>
                <Card className="p-4 hover:shadow-violet transition h-full">
                  <div className="flex items-center gap-3">
                    <div className={cn("h-9 w-9 rounded-lg bg-gradient-to-br flex items-center justify-center text-white", o.color)}>
                      <o.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{o.name}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{o.tagline}</div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MiniStat({ label, value, progress }: { label: string; value: string | number; progress?: number }) {
  return (
    <div className="rounded-lg border p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-lg font-bold mt-0.5">{value}</div>
      {progress !== undefined && <Progress value={progress} className="h-1.5 mt-2" />}
    </div>
  );
}
