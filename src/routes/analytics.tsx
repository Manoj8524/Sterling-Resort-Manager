import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, TrendingUp, Eye, MousePointerClick, IndianRupee, ArrowUpRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RESORTS } from "@/data/resorts";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Sterling AEO/GEO" },
      { name: "description", content: "Content performance, AI visibility and business impact." },
    ],
  }),
  component: Analytics,
});

function Analytics() {
  const spark = Array.from({ length: 24 }, (_, i) => 30 + Math.round(Math.sin(i / 3) * 20 + Math.random() * 15));
  const maxSpark = Math.max(...spark);

  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BarChart3 className="h-4 w-4" /> Analytics
          </div>
          <h1 className="text-3xl font-bold mt-1">Performance & business impact</h1>
          <p className="text-muted-foreground mt-1">Content performance, AI visibility and downstream revenue attribution.</p>
        </div>
        <Badge variant="secondary" className="text-xs">Last 30 days</Badge>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI icon={Eye} label="Impressions" value="4.82M" delta="+24%" />
        <KPI icon={MousePointerClick} label="Clicks" value="184K" delta="+31%" accent />
        <KPI icon={Sparkles} label="AI citations" value="2,847" delta="+58%" />
        <KPI icon={IndianRupee} label="Attributed revenue" value="₹1.42Cr" delta="+19%" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Traffic trend</h3>
            <div className="flex gap-2 text-xs">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary" /> Organic</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary-glow" /> AI referral</span>
            </div>
          </div>
          <div className="flex items-end gap-1 h-40">
            {spark.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col gap-0.5 justify-end">
                <div className="bg-primary-glow rounded-t" style={{ height: `${(v * 0.35 / maxSpark) * 100}%` }} />
                <div className="bg-primary rounded-t" style={{ height: `${(v / maxSpark) * 100}%` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>4 weeks ago</span>
            <span>Today</span>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Top performing pages</h3>
          <div className="space-y-3">
            {[
              { title: "Weekend Getaway near Munnar", views: "48.2K" },
              { title: "Family Stay near Chinnakanal Lake", views: "31.7K" },
              { title: "Athirappilly Falls FAQ", views: "27.4K" },
              { title: "Ooty Toy Train Guide", views: "22.9K" },
              { title: "Corbett Safari Timings", views: "19.3K" },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-xs text-muted-foreground w-4">{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{p.title}</div>
                </div>
                <div className="text-sm font-semibold">{p.views}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">AI visibility by platform</h3>
          <div className="space-y-4">
            {[
              { name: "ChatGPT", value: 44, cites: 1247 },
              { name: "Perplexity", value: 31, cites: 892 },
              { name: "Google AI Overview", value: 18, cites: 512 },
              { name: "Gemini", value: 7, cites: 196 },
            ].map((p) => (
              <div key={p.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{p.name}</span>
                  <span className="text-muted-foreground">{p.cites.toLocaleString()} citations</span>
                </div>
                <Progress value={p.value} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Revenue by resort (top 5)</h3>
          <div className="space-y-3">
            {[...RESORTS].sort((a, b) => b.pagesGenerated - a.pagesGenerated).slice(0, 5).map((r) => {
              const rev = Math.round(r.pagesGenerated * 12.4);
              return (
                <div key={r.slug} className="flex items-center gap-3">
                  <img src={r.image} alt="" className="h-9 w-9 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{r.shortName}</div>
                    <div className="text-xs text-muted-foreground">{r.pagesGenerated} pages · {r.signals} signals</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">₹{rev.toLocaleString()}K</div>
                    <div className="text-xs text-success flex items-center gap-0.5 justify-end"><ArrowUpRight className="h-3 w-3" /> {8 + (r.aeoScore % 20)}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Traffic by source</h3>
          <div className="space-y-3">
            {[
              { src: "Google Organic", pct: 42, sessions: "312K" },
              { src: "ChatGPT referral", pct: 21, sessions: "156K" },
              { src: "Perplexity referral", pct: 14, sessions: "104K" },
              { src: "Direct", pct: 12, sessions: "89K" },
              { src: "Social", pct: 7, sessions: "52K" },
              { src: "Other", pct: 4, sessions: "31K" },
            ].map((s) => (
              <div key={s.src}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{s.src}</span>
                  <span className="text-muted-foreground">{s.sessions}</span>
                </div>
                <Progress value={s.pct} className="h-1.5" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Conversion funnel</h3>
          <div className="space-y-3">
            {[
              { stage: "Impressions", value: 4820000, pct: 100 },
              { stage: "Clicks", value: 184000, pct: 38 },
              { stage: "Enquiries", value: 12400, pct: 6.7 },
              { stage: "Bookings", value: 3820, pct: 2.1 },
              { stage: "Stays completed", value: 3241, pct: 1.8 },
            ].map((s) => (
              <div key={s.stage}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{s.stage}</span>
                  <span className="text-muted-foreground">{s.value.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Content health</h3>
          <div className="space-y-3">
            {[
              { metric: "Indexed pages", value: "1,842", delta: "+124" },
              { metric: "Pages with FAQ schema", value: "78%", delta: "+6%" },
              { metric: "Avg. time on page", value: "3m 24s", delta: "+18s" },
              { metric: "Bounce rate", value: "42.1%", delta: "-3.4%" },
              { metric: "Core Web Vitals pass", value: "94%", delta: "+2%" },
            ].map((m) => (
              <div key={m.metric} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{m.metric}</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{m.value}</span>
                  <Badge variant="secondary" className="text-success text-[10px]">{m.delta}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Top AI-cited queries (last 30 days)</h3>
        <div className="divide-y">
          {[
            { q: "best resorts in Munnar for families", engine: "ChatGPT", cites: 184, ctr: "8.2%" },
            { q: "Alleppey houseboat vs resort comparison", engine: "Perplexity", cites: 152, ctr: "11.4%" },
            { q: "monsoon holiday under ₹10,000", engine: "Google AIO", cites: 128, ctr: "6.7%" },
            { q: "pet friendly resort near Bangalore", engine: "ChatGPT", cites: 96, ctr: "9.1%" },
            { q: "weekend getaway from Chennai", engine: "Perplexity", cites: 84, ctr: "7.8%" },
            { q: "Corbett jungle safari best time", engine: "Gemini", cites: 62, ctr: "5.4%" },
          ].map((r) => (
            <div key={r.q} className="flex items-center gap-4 py-2.5 text-sm">
              <div className="flex-1 min-w-0 truncate font-medium">{r.q}</div>
              <Badge variant="outline" className="text-xs">{r.engine}</Badge>
              <div className="text-muted-foreground text-xs w-20 text-right">{r.cites} cites</div>
              <div className="text-success font-semibold w-16 text-right">{r.ctr}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function KPI({ icon: Icon, label, value, delta, accent }: { icon: React.ElementType; label: string; value: string; delta: string; accent?: boolean }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
          <div className={`mt-1 text-3xl font-bold ${accent ? "text-primary" : ""}`}>{value}</div>
          <div className="text-xs text-success flex items-center gap-0.5 mt-1"><ArrowUpRight className="h-3 w-3" /> {delta} vs prev</div>
        </div>
        <div className={`p-2 rounded-lg ${accent ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </Card>
  );
}
