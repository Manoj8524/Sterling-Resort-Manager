import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Sparkles,
  FileText,
  Radar,
  Wand2,
  CheckCircle2,
  Clock,
  Star,
  Waves,
  UtensilsCrossed,
  Wifi,
  Car,
  Dumbbell,
  Flame,
  Users,
  Coffee,
  Trees,
  Plane,
  Train,
  Phone,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { getResort, pagesFor, signalsFor, PAGE_TYPES, type GeneratedPage } from "@/data/resorts";
import { ImageCarouselModal } from "@/components/image-carousel-modal";

export const Route = createFileRoute("/resorts/$slug")({
  loader: ({ params }) => {
    const resort = getResort(params.slug);
    if (!resort) throw notFound();
    return { resort };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.resort.shortName} — Sterling` : "Resort" },
      { name: "description", content: loaderData?.resort.blurb ?? "Sterling resort." },
    ],
  }),
  component: ResortDetail,
});

const STOCK = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80",
  "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=1600&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80",
  "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1600&q=80",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&q=80",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1600&q=80",
  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1600&q=80",
  "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1600&q=80",
];

function ResortDetail() {
  const { resort } = Route.useLoaderData();
  const pages = useMemo(() => pagesFor(resort), [resort]);
  const signals = useMemo(() => signalsFor(resort), [resort]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const images = useMemo(() => [resort.image, ...STOCK], [resort.image]);

  const openGallery = (i: number) => {
    setGalleryIndex(i);
    setGalleryOpen(true);
  };

  const quickFacts = [
    { label: "Check-in", value: "2:00 PM" },
    { label: "Check-out", value: "11:00 AM" },
    { label: "Rooms", value: "68 keys" },
    { label: "Dining", value: "Multi-cuisine" },
  ];

  const experiences = [
    { title: "Backwater Cruise", desc: "Sunset kettuvallam ride on Vembanad", img: STOCK[2] },
    { title: "Ayurveda Spa", desc: "Traditional Kerala wellness therapies", img: STOCK[5] },
    { title: "Cultural Evenings", desc: "Kathakali & folk performances", img: STOCK[6] },
    { title: "Nature Walks", desc: "Guided walks through coconut groves", img: STOCK[9] },
  ];

  const rooms = [
    { name: "Deluxe Room", size: "320 sq ft", occupancy: "2 adults", img: STOCK[4], price: 8500 },
    { name: "Premium Suite", size: "480 sq ft", occupancy: "2 adults + 1 child", img: STOCK[3], price: 12500 },
    { name: "Family Villa", size: "720 sq ft", occupancy: "4 adults", img: STOCK[7], price: 18500 },
  ];

  const amenities = [
    { icon: Waves, label: "Swimming Pool" },
    { icon: UtensilsCrossed, label: "Multi-cuisine Restaurant" },
    { icon: Coffee, label: "24hr Coffee Shop" },
    { icon: Wifi, label: "Complimentary Wi-Fi" },
    { icon: Dumbbell, label: "Fitness Centre" },
    { icon: Car, label: "Valet Parking" },
    { icon: Flame, label: "Bonfire & BBQ" },
    { icon: Users, label: "Kids Club" },
    { icon: Trees, label: "Landscaped Gardens" },
  ];

  const nearby = [
    { name: "Vembanad Lake", dist: "0.1 km", type: "Nature", icon: Waves },
    { name: "Alleppey Beach", dist: "12 km", type: "Beach", icon: Waves },
    { name: "Krishnapuram Palace", dist: "18 km", type: "Heritage", icon: Trees },
    { name: "Marari Beach", dist: "24 km", type: "Beach", icon: Waves },
  ];

  return (
    <div className="max-w-[1600px] mx-auto pb-16">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-30 backdrop-blur bg-background/85 border-b">
        <div className="flex items-center justify-between px-6 lg:px-8 py-3">
          <Button asChild variant="ghost" size="sm">
            <Link to="/resorts"><ArrowLeft className="h-4 w-4 mr-1" /> All resorts</Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={resort.url} target="_blank" rel="noreferrer">
                Live microsite <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </a>
            </Button>
            <Button asChild size="sm">
              <Link to="/ai-mode"><Sparkles className="h-4 w-4 mr-1" /> Manage AI</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* HERO — full width image */}
      <div className="relative">
        <div className="h-[65vh] min-h-[420px] max-h-[720px] overflow-hidden">
          <img src={resort.image} alt={resort.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 px-6 lg:px-12 pb-10 lg:pb-14 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-white/90 mb-3">
              <MapPin className="h-4 w-4" /> {resort.location}, {resort.state}
              <span className="opacity-50">·</span>
              <span>{resort.region} India</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]">{resort.name}</h1>
            <p className="mt-4 text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed font-light">
              {resort.blurb}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge className="bg-white/15 border-white/25 text-white backdrop-blur px-3 py-1">
                {resort.category}
              </Badge>
              <div className="flex items-center gap-1 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-white text-white" : "text-white/40"}`} />
                ))}
                <span className="ml-1 text-white/80">4.6 · 1,240 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick facts strip */}
      <div className="border-b bg-card">
        <div className="grid grid-cols-2 md:grid-cols-4 px-6 lg:px-12">
          {quickFacts.map((f) => (
            <div key={f.label} className="py-5 border-r last:border-r-0 md:pr-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</div>
              <div className="text-lg font-semibold mt-1">{f.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY MOSAIC */}
      <section className="px-6 lg:px-12 py-12">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[420px] rounded-2xl overflow-hidden">
          <button onClick={() => openGallery(0)} className="col-span-2 row-span-2 relative group overflow-hidden">
            <img src={images[0]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </button>
          {[1, 2, 3, 4].map((i) => (
            <button key={i} onClick={() => openGallery(i)} className="relative group overflow-hidden">
              <img src={images[i]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {i === 4 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium">
                  +{images.length - 5} photos
                </div>
              )}
            </button>
          ))}
        </div>
        <ImageCarouselModal open={galleryOpen} onClose={() => setGalleryOpen(false)} images={images} initialIndex={galleryIndex} />
      </section>

      {/* ABOUT + SIDEBAR */}
      <section className="px-6 lg:px-12 pb-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">About</div>
            <h2 className="text-3xl font-bold mt-2">A retreat where nature writes the story</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>{resort.blurb}</p>
              <p>
                Wake to birdsong and the gentle lap of water. Spend unhurried mornings watching mist lift off the horizon,
                afternoons drifting through curated experiences, and evenings under a canopy of stars. Every detail —
                from the architecture to the plate — is designed to slow the world down.
              </p>
              <p>
                Sterling {resort.shortName.replace(/^Sterling\s*/, "")} pairs the character of {resort.location} with the
                effortless comforts you expect from a modern retreat. It's a place to reconnect — with family, with
                nature, and with yourself.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            <Highlight n={resort.pagesGenerated} label="Curated experiences" />
            <Highlight n={68} label="Elegant keys" />
            <Highlight n={4.6} label="Guest rating" decimals={1} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <Card className="p-6 space-y-4 shadow-card">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold">₹8,500</span>
                <span className="text-sm text-muted-foreground">/ night</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Taxes extra · Free cancellation</div>
            </div>
            <Button className="w-full" size="lg" asChild>
              <a href={resort.url} target="_blank" rel="noreferrer">Book on live microsite <ExternalLink className="h-4 w-4 ml-1" /></a>
            </Button>
            <div className="pt-4 border-t space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" /> +91 44 3357 3300
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Plane className="h-4 w-4" /> Nearest airport · 90 km
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Train className="h-4 w-4" /> Nearest railway · 24 km
              </div>
            </div>
          </Card>
        </aside>
      </section>

      {/* EXPERIENCES */}
      <section className="px-6 lg:px-12 py-12 bg-muted/30">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Experiences</div>
            <h2 className="text-3xl font-bold mt-2">Things to remember, long after</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiences.map((e) => (
            <div key={e.title} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3">
                <img src={e.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="font-semibold">{e.title}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{e.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROOMS */}
      <section className="px-6 lg:px-12 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Rooms & Suites</div>
            <h2 className="text-3xl font-bold mt-2">Where every stay feels considered</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <Card key={r.name} className="overflow-hidden p-0 group hover:shadow-violet transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{r.name}</h3>
                <div className="text-sm text-muted-foreground mt-1">{r.size} · {r.occupancy}</div>
                <div className="flex items-end justify-between mt-4">
                  <div>
                    <div className="text-xs text-muted-foreground">from</div>
                    <div className="text-xl font-bold">₹{r.price.toLocaleString()}</div>
                  </div>
                  <Button variant="ghost" size="sm">Details <ChevronRight className="h-4 w-4 ml-1" /></Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="px-6 lg:px-12 py-12 bg-muted/30">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Amenities</div>
          <h2 className="text-3xl font-bold mt-2">Everything, taken care of</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {amenities.map((a) => (
            <div key={a.label} className="flex items-center gap-3 rounded-xl border bg-card p-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <a.icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION / NEARBY */}
      <section className="px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Location</div>
            <h2 className="text-3xl font-bold mt-2">In the heart of {resort.location}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A gateway to {resort.location}'s finest experiences — from natural wonders to cultural gems,
              everything you'd travel here for is a short drive away.
            </p>
            <div className="mt-6 space-y-2">
              {nearby.map((n) => (
                <div key={n.name} className="flex items-center gap-4 rounded-xl border bg-card p-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <n.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{n.name}</div>
                    <div className="text-xs text-muted-foreground">{n.type}</div>
                  </div>
                  <div className="text-sm font-semibold text-primary">{n.dist}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-accent border relative">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="h-10 w-10 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">{resort.location}, {resort.state}</div>
                <div className="text-xs">Interactive map placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMIN CONSOLE (kept, condensed) */}
      <section className="px-6 lg:px-12 py-12 border-t bg-muted/20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> AEO / GEO Admin
            </div>
            <h2 className="text-2xl font-bold mt-2">Manage this microsite</h2>
          </div>
          <Button
            onClick={() =>
              toast.success("Agent run queued", {
                description: `${PAGE_TYPES.length} agents scheduled for ${resort.shortName}.`,
              })
            }
          >
            <Wand2 className="h-4 w-4 mr-1" /> Launch agents
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <MiniMetric icon={FileText} label="Pages" value={resort.pagesGenerated} accent />
          <MiniMetric icon={CheckCircle2} label="Approved" value={resort.pagesApproved} />
          <MiniMetric icon={Clock} label="Pending" value={resort.pagesPending} warn />
          <MiniMetric icon={Radar} label="Signals" value={resort.signals} />
          <MiniMetric icon={Sparkles} label="AEO / GEO" value={`${resort.aeoScore}/${resort.geoScore}`} />
        </div>

        <Tabs defaultValue="pages" className="space-y-4">
          <TabsList className="flex-wrap h-auto">
            <TabsTrigger value="pages">Pages ({pages.length})</TabsTrigger>
            <TabsTrigger value="signals">Signals ({signals.length})</TabsTrigger>
            <TabsTrigger value="metadata">Metadata</TabsTrigger>
            <TabsTrigger value="seo">SEO / Schema</TabsTrigger>
          </TabsList>

          <TabsContent value="pages">
            <PagesList pages={pages} resortShort={resort.shortName} />
          </TabsContent>
          <TabsContent value="signals">
            <SignalsList signals={signals} />
          </TabsContent>
          <TabsContent value="metadata">
            <MetadataForm resortName={resort.name} />
          </TabsContent>
          <TabsContent value="seo">
            <Card className="p-6 space-y-4">
              <Field label="Meta title" defaultValue={`${resort.name} — Book Now`} wide />
              <Field label="Meta description" defaultValue={resort.blurb} wide />
              <Field label="Canonical URL" defaultValue={resort.url} wide />
              <div>
                <Label>Structured data (LodgingBusiness)</Label>
                <Textarea rows={6} defaultValue={`{ "@context": "https://schema.org", "@type": "Resort", "name": "${resort.name}", "address": { "@type": "PostalAddress", "addressLocality": "${resort.location}", "addressRegion": "${resort.state}" } }`} className="font-mono text-xs" />
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground w-24">AEO score</div>
                <div className="flex-1"><Progress value={resort.aeoScore} /></div>
                <div className="text-sm font-semibold">{resort.aeoScore}/100</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground w-24">GEO score</div>
                <div className="flex-1"><Progress value={resort.geoScore} /></div>
                <div className="text-sm font-semibold">{resort.geoScore}/100</div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

function Highlight({ n, label, decimals }: { n: number; label: string; decimals?: number }) {
  return (
    <div>
      <div className="text-3xl font-bold text-primary">{decimals ? n.toFixed(decimals) : n}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function MetadataForm({ resortName }: { resortName: string }) {
  return (
    <Card className="p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Display name" defaultValue={resortName} />
        <Field label="Property code" placeholder="e.g. STR-MUN-01" />
        <Field label="Tagline" placeholder="One-line hook shown on cards" wide />
        <Field label="Long description" placeholder="Full narrative used across AEO answers" wide multiline />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={() => toast.success("Metadata saved")}>Save changes</Button>
      </div>
    </Card>
  );
}

function Field({
  label,
  placeholder,
  defaultValue,
  wide,
  multiline,
}: {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  wide?: boolean;
  multiline?: boolean;
}) {
  return (
    <div className={wide ? "md:col-span-2 space-y-1" : "space-y-1"}>
      <Label className="text-xs uppercase text-muted-foreground">{label}</Label>
      {multiline ? (
        <Textarea rows={4} placeholder={placeholder} defaultValue={defaultValue} />
      ) : (
        <Input placeholder={placeholder} defaultValue={defaultValue} />
      )}
    </div>
  );
}

function MiniMetric({ icon: Icon, label, value, accent, warn }: { icon: React.ElementType; label: string; value: React.ReactNode; accent?: boolean; warn?: boolean }) {
  return (
    <Card className="p-3 flex items-center gap-3">
      <div className={`p-2 rounded-md ${accent ? "bg-primary/10 text-primary" : warn ? "bg-warning/20 text-warning-foreground" : "bg-muted text-muted-foreground"}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-semibold text-sm">{value}</div>
      </div>
    </Card>
  );
}

function PagesList({ pages, resortShort }: { pages: GeneratedPage[]; resortShort: string }) {
  const grouped = pages.reduce<Record<string, GeneratedPage[]>>((acc, p) => {
    (acc[p.type] ||= []).push(p);
    return acc;
  }, {});
  return (
    <div className="space-y-4">
      <Card className="p-4 gradient-soft flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">{pages.length} hyperlocal pages generated</div>
          <div className="text-xs text-muted-foreground">Grouped by page-type. Approve, edit or regenerate.</div>
        </div>
        <Button onClick={() => toast.success(`Agent run queued for ${resortShort}`)}>
          <Sparkles className="h-4 w-4 mr-1" /> Generate more
        </Button>
      </Card>

      <Tabs defaultValue={Object.keys(grouped)[0]} className="space-y-3">
        <TabsList className="flex-wrap h-auto">
          {PAGE_TYPES.filter((t) => grouped[t.key]).map((t) => (
            <TabsTrigger key={t.key} value={t.key}>
              {t.label} <Badge variant="secondary" className="ml-2">{grouped[t.key].length}</Badge>
            </TabsTrigger>
          ))}
        </TabsList>
        {PAGE_TYPES.map((t) =>
          grouped[t.key] ? (
            <TabsContent key={t.key} value={t.key} className="space-y-2">
              <div className="text-xs text-muted-foreground mb-1">{t.desc}</div>
              {grouped[t.key].map((p) => (
                <PageRow key={p.id} page={p} />
              ))}
            </TabsContent>
          ) : null
        )}
      </Tabs>
    </div>
  );
}

function PageRow({ page }: { page: GeneratedPage }) {
  const statusColor =
    page.status === "approved"
      ? "bg-success/15 text-success border-success/30"
      : page.status === "pending"
      ? "bg-warning/20 text-warning-foreground border-warning/40"
      : "bg-muted text-muted-foreground border-border";
  return (
    <Card className="p-3 flex flex-wrap items-center gap-3 hover:shadow-card transition">
      <FileText className="h-4 w-4 text-primary shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm truncate">{page.title}</div>
        <div className="text-xs text-muted-foreground truncate">/{page.slug} · {page.wordCount} words · by {page.agent}</div>
      </div>
      <div className="flex flex-wrap gap-1">
        {page.keywords.slice(0, 3).map((k, i) => (
          <Badge key={i} variant="secondary" className="text-[10px]">{k}</Badge>
        ))}
      </div>
      <div className="text-xs font-semibold text-primary w-12 text-right">{page.score}</div>
      <Badge variant="outline" className={statusColor}>{page.status}</Badge>
      <Button size="sm" variant="ghost">Preview</Button>
    </Card>
  );
}

function SignalsList({ signals }: { signals: ReturnType<typeof signalsFor> }) {
  return (
    <Card className="overflow-hidden">
      <div className="divide-y">
        <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-muted/50 text-xs font-medium text-muted-foreground">
          <div className="col-span-4">Query</div>
          <div className="col-span-2">Source</div>
          <div className="col-span-1">Intent</div>
          <div className="col-span-1 text-right">Volume</div>
          <div className="col-span-1 text-right">Diff.</div>
          <div className="col-span-2">Suggested page</div>
          <div className="col-span-1 text-right">Opp.</div>
        </div>
        {signals.map((s) => (
          <div key={s.id} className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-sm hover:bg-accent transition">
            <div className="col-span-4 font-medium truncate">{s.query}</div>
            <div className="col-span-2"><Badge variant="secondary">{s.source}</Badge></div>
            <div className="col-span-1 text-xs">{s.intent}</div>
            <div className="col-span-1 text-right tabular-nums">{s.volume.toLocaleString()}</div>
            <div className="col-span-1 text-right tabular-nums">{s.difficulty}</div>
            <div className="col-span-2 text-xs text-muted-foreground truncate">{PAGE_TYPES.find(p => p.key === s.suggestedType)?.label}</div>
            <div className="col-span-1 text-right font-semibold text-primary">{s.opportunity}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
