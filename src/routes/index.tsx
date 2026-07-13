import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Building2,
  FileText,
  PencilLine,
  ShieldCheck,
  Lightbulb,
  Bot,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  TrendingUp,
  CalendarDays,
  AlertTriangle,
  Circle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RESORTS } from "@/data/resorts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Operations Dashboard — Sterling AEO/GEO" },
      { name: "description", content: "AI content operations: health, actions, and opportunities at a glance." },
    ],
  }),
  component: Dashboard,
});

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function Dashboard() {
  const [greet, setGreet] = useState("Hello");
  useEffect(() => setGreet(greeting()), []);
  const totalResorts = RESORTS.length;
  const published = RESORTS.reduce((s, r) => s + r.pagesApproved, 0);
  const drafts = RESORTS.reduce((s, r) => s + Math.round(r.pagesGenerated * 0.35), 0);
  const pendingApprovals = RESORTS.reduce((s, r) => s + r.pagesPending, 0);
  const opportunities = 38;
  const scheduled = 18;
  const total = published + drafts + pendingApprovals + scheduled;

  const tasks = [
    { label: `Approve ${Math.min(18, pendingApprovals)} AI-generated pages`, href: "/review-queue" },
    { label: "Review 7 new nearby attractions", href: "/review-queue" },
    { label: "Update 3 outdated destination guides", href: "/review-queue" },
    { label: "Publish 5 seasonal pages", href: "/review-queue" },
  ];

  const opportunitiesFeed = [
    { icon: MapPin, tag: "New Attraction", title: "Hidden Falls", sub: "Near Ooty", cta: "Generate Nearby Attraction Page" },
    { icon: TrendingUp, tag: "Trending Topic", title: "Weekend Getaway from Chennai", sub: "+142% search interest", cta: "Generate Landing Page" },
    { icon: CalendarDays, tag: "Festival", title: "Pongal Festival", sub: "Tamil Nadu · Jan 14", cta: "Generate Event Guide" },
    { icon: TrendingUp, tag: "Rising Query", title: "Pet-friendly resorts in Coorg", sub: "0 pages · high volume", cta: "Generate Intent Page" },
  ];

  const activity = [
    { time: "10:12 AM", verb: "Generated", title: "Hotels Near Ooty Lake" },
    { time: "09:58 AM", verb: "Updated", title: "Things To Do In Coorg" },
    { time: "09:34 AM", verb: "Published", title: "Family Resort In Munnar" },
    { time: "09:12 AM", verb: "Generated", title: "Best Time To Visit Athirappilly" },
    { time: "08:47 AM", verb: "Reviewed", title: "Weekend Trip From Bangalore" },
  ];

  const agents = [
    { name: "Discovery", status: "ok" as const },
    { name: "Generator", status: "ok" as const },
    { name: "FAQ", status: "ok" as const },
    { name: "Updater", status: "warn" as const },
    { name: "QA", status: "ok" as const },
  ];
  const running = agents.filter((a) => a.status === "ok").length;

  const topResorts = [...RESORTS].sort((a, b) => b.pagesApproved - a.pagesApproved).slice(0, 5);

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      {/* Greeting */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{greet}, Sterling.</h1>
        <p className="text-muted-foreground mt-1">Here's what needs your attention today.</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <KPI icon={Building2} label="Resorts" value={totalResorts} />
        <KPI icon={FileText} label="Published Pages" value={published} accent />
        <KPI icon={PencilLine} label="Drafts" value={drafts} />
        <KPI icon={ShieldCheck} label="Pending Approval" value={pendingApprovals} warn />
        <KPI icon={Lightbulb} label="Opportunities" value={opportunities} />
        <KPI icon={Bot} label="AI Health" value={`${running}/${agents.length}`} health={running === agents.length ? "ok" : "warn"} />
      </div>

      {/* Today's Tasks + Opportunity Feed */}
      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-lg">Today's tasks</h2>
              <p className="text-xs text-muted-foreground">4 items · takes ~35 minutes</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/review-queue">View all <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
          <div className="space-y-1">
            {tasks.map((t, i) => (
              <Link
                key={i}
                to={t.href}
                className="flex items-center gap-3 rounded-lg p-3 -mx-2 hover:bg-accent transition group"
              >
                <Checkbox className="pointer-events-none" />
                <span className="text-sm flex-1">{t.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
              </Link>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" /> AI opportunity feed
              </h2>
              <p className="text-xs text-muted-foreground">Discovered in the last 24 hours</p>
            </div>
            <Badge variant="secondary">{opportunitiesFeed.length} new</Badge>
          </div>
          <div className="space-y-3">
            {opportunitiesFeed.map((o, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border p-3 hover:border-primary/40 transition">
                <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                  <o.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-primary font-semibold">{o.tag}</div>
                  <div className="font-medium text-sm mt-0.5">{o.title}</div>
                  <div className="text-xs text-muted-foreground">{o.sub}</div>
                </div>
                <Button size="sm" variant="outline" className="shrink-0">
                  <Sparkles className="h-3.5 w-3.5 mr-1" /> Generate
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Content Status */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-lg">Content status</h2>
          <span className="text-xs text-muted-foreground">{total.toLocaleString()} total items</span>
        </div>
        <div className="flex gap-1 h-3 rounded-full overflow-hidden bg-muted mb-4">
          <div className="bg-success" style={{ width: `${(published / total) * 100}%` }} />
          <div className="bg-muted-foreground/40" style={{ width: `${(drafts / total) * 100}%` }} />
          <div className="bg-warning" style={{ width: `${(pendingApprovals / total) * 100}%` }} />
          <div className="bg-primary" style={{ width: `${(scheduled / total) * 100}%` }} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatusRow color="bg-success" label="Published" value={published} />
          <StatusRow color="bg-muted-foreground/40" label="Draft" value={drafts} />
          <StatusRow color="bg-warning" label="Under Review" value={pendingApprovals} />
          <StatusRow color="bg-primary" label="Scheduled" value={scheduled} />
        </div>
      </Card>

      {/* Activity + Agents + Top Resorts */}
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="p-6">
          <h2 className="font-semibold text-lg mb-4">Recent AI activity</h2>
          <div className="space-y-4">
            {activity.map((a, i) => (
              <div key={i} className="flex gap-3">
                <div className="text-xs text-muted-foreground w-16 pt-0.5 shrink-0 tabular-nums">{a.time}</div>
                <div className="flex flex-col items-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1.5" />
                  {i < activity.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                </div>
                <div className="flex-1 min-w-0 pb-2">
                  <div className="text-xs text-muted-foreground">{a.verb}</div>
                  <div className="text-sm font-medium truncate">{a.title}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">AI agent status</h2>
            <Link to="/ai-mode" className="text-xs text-primary hover:underline">Manage →</Link>
          </div>
          <div className="space-y-2">
            {agents.map((a) => (
              <div key={a.name} className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${a.status === "ok" ? "bg-success" : "bg-warning"}`} />
                  <span className="text-sm font-medium">{a.name}</span>
                </div>
                {a.status === "ok" ? (
                  <div className="flex items-center gap-1 text-xs text-success">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Running
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-xs text-warning-foreground">
                    <AlertTriangle className="h-3.5 w-3.5" /> Degraded
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Top performing resorts</h2>
            <Link to="/resorts" className="text-xs text-primary hover:underline">All →</Link>
          </div>
          <div className="space-y-3">
            {topResorts.map((r, i) => (
              <Link
                key={r.slug}
                to="/resorts/$slug"
                params={{ slug: r.slug }}
                className="flex items-center gap-3 rounded-lg p-2 -mx-2 hover:bg-accent transition"
              >
                <div className="text-sm font-semibold text-muted-foreground w-4">{i + 1}</div>
                <img src={r.image} alt="" className="h-9 w-12 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{r.shortName}</div>
                  <div className="text-xs text-muted-foreground">{r.location}</div>
                </div>
                <Badge variant="secondary">{r.pagesApproved}</Badge>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function KPI({
  icon: Icon,
  label,
  value,
  accent,
  warn,
  health,
}: {
  icon: React.ElementType;
  label: string;
  value: number | string;
  accent?: boolean;
  warn?: boolean;
  health?: "ok" | "warn";
}) {
  const tint = accent
    ? "bg-primary/10 text-primary"
    : warn
    ? "bg-warning/20 text-warning-foreground"
    : health === "ok"
    ? "bg-success/15 text-success"
    : health === "warn"
    ? "bg-warning/20 text-warning-foreground"
    : "bg-muted text-muted-foreground";
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-lg ${tint}`}>
          <Icon className="h-4 w-4" />
        </div>
        {health && (
          <Circle className={`h-2.5 w-2.5 ${health === "ok" ? "fill-success text-success" : "fill-warning text-warning"}`} />
        )}
      </div>
      <div className="mt-3 text-2xl font-bold">
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </Card>
  );
}

function StatusRow({ color, label, value }: { color: string; label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-3 w-3 rounded-sm ${color}`} />
      <div className="flex-1">
        <div className="text-sm">{label}</div>
      </div>
      <div className="text-sm font-semibold tabular-nums">{value.toLocaleString()}</div>
    </div>
  );
}
