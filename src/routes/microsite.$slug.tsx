import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Star,
  Phone,
  Mail,
  Wifi,
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Car,
  Sparkles,
  Coffee,
  TreePine,
  Users,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  Sun,
  Cloud,
  Camera,
  Play,
  Award,
  Heart,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { getResort, type Resort } from "@/data/resorts";
import { toast } from "sonner";

export const Route = createFileRoute("/microsite/$slug")({
  loader: ({ params }): { resort: Resort } => {
    const resort = getResort(params.slug);
    if (!resort) throw notFound();
    return { resort };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Resort not found" }, { name: "robots", content: "noindex" }] };
    }
    const { resort } = loaderData;
    const title = `${resort.name} — Book Direct | Sterling Holidays`;
    const desc = `${resort.blurb} Discover rooms, dining, experiences and things to do at ${resort.shortName}, ${resort.location}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: resort.image },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Microsite,
  notFoundComponent: () => (
    <div className="p-10 text-center text-sm text-muted-foreground">Microsite not found.</div>
  ),
});

function Microsite() {
  const { resort } = Route.useLoaderData();
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Preview toolbar */}
      <div className="border-b bg-card/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center gap-3 px-4 h-12">
          <Button asChild size="sm" variant="ghost" className="gap-1">
            <Link to="/resorts">
              <ArrowLeft className="h-4 w-4" /> Back to dashboard
            </Link>
          </Button>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2 text-xs text-muted-foreground min-w-0">
            <Badge variant="secondary" className="text-[10px]">Live microsite preview</Badge>
            <span className="truncate font-mono">/microsite/{resort.slug}</span>
          </div>
          <div className="ml-auto flex items-center gap-2 text-xs">
            <a
              href={resort.url}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              View source on sterlingholidays.com <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[520px] w-full overflow-hidden">
          <img
            src={resort.image}
            alt={resort.name}
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-6 pb-10 text-white">
              <div className="flex items-center gap-2 text-xs opacity-90 mb-3">
                <MapPin className="h-3.5 w-3.5" />
                <span>{resort.location}, {resort.state}</span>
                <span className="opacity-50">•</span>
                <Badge className="bg-white/15 backdrop-blur border-white/20 text-white hover:bg-white/25">
                  {resort.category}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
                {resort.name}
              </h1>
              <p className="mt-3 text-white/85 max-w-2xl">{resort.blurb}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-sm">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.6</span>
                  <span className="text-white/70">· 1,284 reviews</span>
                </div>
                <span className="text-white/50">|</span>
                <div className="flex items-center gap-1 text-sm text-white/85">
                  <Award className="h-4 w-4" /> TripAdvisor Travellers' Choice
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90"
                  onClick={() => toast.success("Booking flow opened — connect to Sterling reservations API to complete")}
                >
                  Book direct & save 10%
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white"
                  onClick={() => toast("Virtual tour coming soon", { icon: "🎥" })}
                >
                  <Play className="h-4 w-4 mr-1" /> Virtual tour
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                  onClick={() => {
                    setSaved((v) => !v);
                    toast.success(saved ? "Removed from wishlist" : "Saved to wishlist");
                  }}
                >
                  <Heart className={`h-4 w-4 mr-1 ${saved ? "fill-current text-red-400" : ""}`} />
                  {saved ? "Saved" : "Wishlist"}
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    toast.success("Link copied");
                  }}
                >
                  <Share2 className="h-4 w-4 mr-1" /> Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick booking bar */}
      <section className="border-b bg-card sticky top-12 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[180px]">
            <label className="text-[10px] uppercase text-muted-foreground tracking-wide">Check in</label>
            <Input type="date" className="h-9" defaultValue={new Date().toISOString().slice(0, 10)} />
          </div>
          <div className="flex-1 min-w-[180px]">
            <label className="text-[10px] uppercase text-muted-foreground tracking-wide">Check out</label>
            <Input
              type="date"
              className="h-9"
              defaultValue={new Date(Date.now() + 2 * 86400000).toISOString().slice(0, 10)}
            />
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="text-[10px] uppercase text-muted-foreground tracking-wide">Guests</label>
            <select className="h-9 w-full rounded-md border bg-background px-2 text-sm">
              <option>2 adults</option>
              <option>2 adults, 1 child</option>
              <option>2 adults, 2 children</option>
              <option>1 adult</option>
              <option>3 adults</option>
              <option>4 adults</option>
            </select>
          </div>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => toast.success("Checking availability & best rates…")}
            >
              Check availability
            </Button>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start h-auto bg-transparent border-b rounded-none p-0 gap-1">
            {[
              ["overview", "Overview"],
              ["rooms", "Rooms & suites"],
              ["dining", "Dining"],
              ["experiences", "Experiences"],
              ["gallery", "Gallery"],
              ["location", "Location"],
              ["faqs", "FAQs"],
            ].map(([k, l]) => (
              <TabsTrigger
                key={k}
                value={k}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5"
              >
                {l}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-3">About {resort.shortName}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {resort.blurb} Set in the heart of {resort.location}, {resort.state}, this {resort.category.toLowerCase()}
                  property has been thoughtfully designed to blend contemporary comforts with the natural beauty of its surroundings.
                  Whether you're planning a family holiday, a romantic escape or a work-from-anywhere break, {resort.shortName}
                  offers spacious rooms, warm hospitality and curated experiences that celebrate the region.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Guests can unwind by the pool, explore nearby landmarks with our resident experience curators, or simply enjoy
                  hyperlocal cuisine crafted from the freshest ingredients. Every stay includes complimentary Wi-Fi, on-site
                  activities and access to our Signature Sterling experiences.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">What this resort offers</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {AMENITIES.map((a) => (
                    <div key={a.label} className="flex items-center gap-2 text-sm p-3 rounded-lg border bg-card">
                      <a.icon className="h-4 w-4 text-primary shrink-0" />
                      <span>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Signature experiences</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {experiencesFor(resort).slice(0, 4).map((e) => (
                    <Card key={e.title} className="p-0 overflow-hidden group">
                      <div className="aspect-[16/10] bg-muted overflow-hidden">
                        <img
                          src={e.img}
                          alt={e.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">{e.tag}</div>
                        <div className="font-semibold mt-0.5">{e.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">{e.desc}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <Card className="p-5">
                <div className="text-xs uppercase text-muted-foreground tracking-wide">Starting from</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">₹{6500 + (resort.aeoScore * 40)}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{8000 + (resort.aeoScore * 45)}
                  </span>
                </div>
                <div className="text-xs text-success mt-0.5">Save up to 22% · Book direct</div>
                <Button className="w-full mt-4" onClick={() => toast.success("Reserving your stay…")}>
                  Reserve now
                </Button>
                <div className="text-[11px] text-muted-foreground mt-2 text-center">
                  Free cancellation until 24h before check-in
                </div>
              </Card>

              <Card className="p-5">
                <div className="flex items-center gap-2 font-semibold mb-3">
                  <Cloud className="h-4 w-4 text-primary" /> This week in {resort.location}
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  {["Mon", "Tue", "Wed", "Thu"].map((d, i) => (
                    <div key={d} className="rounded-md border p-2">
                      <div className="text-muted-foreground">{d}</div>
                      <Sun className="h-4 w-4 mx-auto my-1 text-amber-500" />
                      <div className="font-semibold">{22 + i}°</div>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] text-muted-foreground mt-3">
                  Ideal weather for outdoor experiences and sightseeing.
                </div>
              </Card>

              <Card className="p-5">
                <div className="font-semibold mb-3">Need help?</div>
                <div className="space-y-2 text-sm">
                  <a href="tel:+911800000000" className="flex items-center gap-2 hover:text-primary">
                    <Phone className="h-4 w-4" /> +91 1800 000 000
                  </a>
                  <a href="mailto:reservations@sterlingholidays.com" className="flex items-center gap-2 hover:text-primary">
                    <Mail className="h-4 w-4" /> reservations@sterlingholidays.com
                  </a>
                </div>
              </Card>
            </aside>
          </TabsContent>

          {/* Rooms */}
          <TabsContent value="rooms" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Rooms & suites</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {roomsFor(resort).map((r) => (
                <Card key={r.name} className="p-0 overflow-hidden group">
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-semibold">{r.name}</div>
                      <Badge variant="secondary">{r.size}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-2">{r.desc}</div>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {r.tags.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-end justify-between pt-3 border-t">
                      <div>
                        <div className="text-xs text-muted-foreground">from</div>
                        <div className="text-lg font-bold">₹{r.price.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/night</span></div>
                      </div>
                      <Button size="sm" onClick={() => toast.success(`${r.name} added to booking`)}>Select</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Dining */}
          <TabsContent value="dining" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Dining at {resort.shortName}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {DINING.map((d) => (
                <Card key={d.name} className="p-0 overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-muted">
                    <img src={d.img} alt={d.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5 flex-1 space-y-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{d.cuisine}</div>
                    <div className="font-semibold text-lg">{d.name}</div>
                    <p className="text-sm text-muted-foreground">{d.desc}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                      <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {d.hours}</span>
                    </div>
                    <Button size="sm" variant="outline" className="mt-2" onClick={() => toast.success(`Table request sent for ${d.name}`)}>
                      Reserve a table
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Experiences */}
          <TabsContent value="experiences" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Experiences & things to do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {experiencesFor(resort).map((e) => (
                <Card key={e.title} className="p-0 overflow-hidden group">
                  <div className="aspect-[16/10] bg-muted overflow-hidden">
                    <img src={e.img} alt={e.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{e.tag}</div>
                    <div className="font-semibold mt-0.5">{e.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{e.desc}</div>
                    <Button size="sm" variant="ghost" className="mt-2 px-0 h-auto text-primary" onClick={() => toast(`Details for: ${e.title}`)}>
                      Learn more <ChevronRight className="h-3 w-3 ml-0.5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gallery */}
          <TabsContent value="gallery" className="mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Camera className="h-5 w-5" /> Photo gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {galleryFor(resort).map((src, i) => (
                <div
                  key={i}
                  className={`bg-muted overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
                >
                  <img src={src} alt={`${resort.shortName} ${i + 1}`} className="h-full w-full object-cover hover:scale-105 transition" />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Location */}
          <TabsContent value="location" className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-3">Location & nearby attractions</h2>
              <p className="text-muted-foreground">
                {resort.shortName} is located in {resort.location}, {resort.state}. Perfectly positioned to explore the region's
                most iconic sights and hidden gems.
              </p>
              <div className="aspect-[16/9] mt-4 rounded-lg overflow-hidden border bg-muted">
                <iframe
                  title="Map"
                  className="w-full h-full"
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(resort.name + " " + resort.location)}&output=embed`}
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Nearby</h3>
              <div className="space-y-2">
                {nearbyFor(resort).map((n) => (
                  <div key={n.name} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                    <div>
                      <div className="text-sm font-medium">{n.name}</div>
                      <div className="text-xs text-muted-foreground">{n.type}</div>
                    </div>
                    <Badge variant="secondary">{n.km} km</Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* FAQs */}
          <TabsContent value="faqs" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
            <div className="space-y-3 max-w-3xl">
              {faqsFor(resort).map((f) => (
                <details key={f.q} className="rounded-lg border bg-card p-4 group">
                  <summary className="cursor-pointer font-medium flex items-center justify-between">
                    {f.q}
                    <ChevronRight className="h-4 w-4 group-open:rotate-90 transition" />
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer CTA */}
      <section className="border-t bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center px-6 py-16">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
          <h2 className="text-3xl font-bold">Ready for your {resort.category.toLowerCase()} escape?</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Book direct on the {resort.shortName} microsite and unlock exclusive rates, complimentary upgrades and flexible cancellation.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button size="lg" onClick={() => toast.success("Starting reservation flow…")}>
              Book your stay
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/resorts/$slug" params={{ slug: resort.slug }}>Back to admin view</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Helpers / mock data ────────────────────────────────────────────────
const AMENITIES = [
  { label: "Swimming pool", icon: Waves },
  { label: "Multi-cuisine restaurant", icon: UtensilsCrossed },
  { label: "Complimentary Wi-Fi", icon: Wifi },
  { label: "Fitness centre", icon: Dumbbell },
  { label: "Complimentary parking", icon: Car },
  { label: "Spa & wellness", icon: Sparkles },
  { label: "Coffee shop", icon: Coffee },
  { label: "Nature trails", icon: TreePine },
  { label: "Kids' activities", icon: Users },
];

const DINING = [
  {
    name: "The Terrace",
    cuisine: "All-day multi-cuisine",
    hours: "7:00 AM – 11:00 PM",
    desc: "A vibrant all-day restaurant with breakfast buffets, à la carte Indian and continental favourites.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  },
  {
    name: "Kadal",
    cuisine: "Regional specialties",
    hours: "12:30 – 3:30 PM & 7:00 – 11:00 PM",
    desc: "Hyperlocal, chef-curated tasting menus celebrating the flavours of the region.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
  },
  {
    name: "Verandah Bar",
    cuisine: "Bar & lounge",
    hours: "4:00 PM – 12:00 AM",
    desc: "Craft cocktails, single malts and small plates in a warm sundowner setting.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800",
  },
  {
    name: "Room service",
    cuisine: "24×7 in-room",
    hours: "24 hours",
    desc: "Curated in-room menus with quick service across breakfast, snacks and dinner.",
    img: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=800",
  },
];

function roomsFor(r: Resort) {
  return [
    {
      name: "Premium Room",
      size: "32 sq m",
      price: 6500 + r.aeoScore * 40,
      desc: `Comfortable premium rooms with garden views, king bed, work desk and modern amenities.`,
      tags: ["King bed", "Garden view", "Free Wi-Fi"],
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    },
    {
      name: "Deluxe Suite",
      size: "48 sq m",
      price: 9500 + r.aeoScore * 55,
      desc: `Spacious suites featuring a lounge area, premium bath amenities and ${r.category.toLowerCase()} views.`,
      tags: ["Lounge", "Bathtub", "Balcony"],
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
    },
    {
      name: "Family Cottage",
      size: "62 sq m",
      price: 12500 + r.aeoScore * 60,
      desc: `Two-bedroom cottages designed for families with kids, complete with a private sit-out.`,
      tags: ["Sleeps 4", "Private sit-out", "Extra bed"],
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    },
  ];
}

function experiencesFor(r: Resort) {
  const base = [
    { tag: "Nature", title: `${r.location} nature walk`, desc: "Guided morning walks through the region's most scenic trails.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800" },
    { tag: "Culture", title: `Local heritage tour`, desc: "Explore ancient temples, colonial landmarks and hidden lanes.", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800" },
    { tag: "Wellness", title: "Ayurvedic spa ritual", desc: "Signature therapies using traditional oils and techniques.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800" },
    { tag: "Adventure", title: "Sunrise trek", desc: "An early-morning trek to the region's finest viewpoint.", img: "https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=800" },
    { tag: "Family", title: "Kids' discovery club", desc: "Curated activities, craft sessions and nature games for young guests.", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800" },
    { tag: "Culinary", title: "Chef's regional table", desc: "A hands-on tasting menu with local ingredients & stories.", img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800" },
  ];
  return base;
}

function galleryFor(r: Resort) {
  const stock = [
    r.image,
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
  ];
  return stock;
}

function nearbyFor(r: Resort) {
  return [
    { name: `${r.location} main viewpoint`, type: "Viewpoint", km: 2.3 },
    { name: `${r.location} heritage market`, type: "Shopping & culture", km: 4.1 },
    { name: `${r.location} lake / reservoir`, type: "Nature", km: 6.8 },
    { name: `${r.state} state museum`, type: "Museum", km: 12.5 },
    { name: `${r.location} temple complex`, type: "Spiritual", km: 3.2 },
  ];
}

function faqsFor(r: Resort) {
  return [
    { q: `What are the check-in and check-out timings at ${r.shortName}?`, a: "Check-in from 2:00 PM and check-out by 11:00 AM. Early check-in and late check-out available subject to room availability." },
    { q: `Is ${r.shortName} family and kid friendly?`, a: `Yes — ${r.shortName} offers family cottages, a kids' club, child-safe pools and a specially curated activity calendar for children of all ages.` },
    { q: `What's the best time to visit ${r.location}?`, a: `${r.location} is a wonderful destination through most of the year. October to March offers the most pleasant weather, while the monsoon months bring lush landscapes and cooler temperatures.` },
    { q: `Do you offer airport / railway station transfers?`, a: "Yes, complimentary and paid transfer options are available on request. Please share your travel details at the time of booking or with our concierge team." },
    { q: `Are pets allowed at the property?`, a: "Small pets are allowed at select rooms with prior approval. Additional cleaning fees apply. Please contact the resort at the time of booking to confirm availability." },
    { q: `What safety and hygiene measures are in place?`, a: "The property follows Sterling's SafeStay protocol — enhanced cleaning, contactless check-in, sanitised rooms and rigorous kitchen hygiene standards." },
    { q: `What experiences and activities are included?`, a: `Signature Sterling experiences, guided nature walks, cultural performances and on-site recreational activities are complimentary for in-house guests.` },
  ];
}
