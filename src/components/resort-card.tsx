import { Link } from "@tanstack/react-router";
import { MapPin, FileText, Radar, TrendingUp, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Resort } from "@/data/resorts";

const statusStyles: Record<Resort["status"], string> = {
  live: "bg-success/15 text-success border-success/30",
  review: "bg-warning/20 text-warning-foreground border-warning/40",
  draft: "bg-muted text-muted-foreground border-border",
};

export function ResortCard({ resort }: { resort: Resort }) {
  return (
    <Card className="group shadow-card overflow-hidden border-border/70 hover:shadow-violet transition-all duration-300 hover:-translate-y-0.5 p-0">
      <Link
        to="/resorts/$slug"
        params={{ slug: resort.slug }}
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={resort.image}
            alt={resort.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800";
            }}
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
            <Badge className={statusStyles[resort.status]} variant="outline">
              {resort.status}
            </Badge>
            <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur">
              {resort.category}
            </Badge>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3">
            <div className="text-white text-xs opacity-90 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {resort.location}, {resort.state}
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold leading-tight line-clamp-1">{resort.shortName}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{resort.blurb}</p>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <FileText className="h-3 w-3" />
                Pages
              </div>
              <div className="text-lg font-semibold text-primary">{resort.pagesGenerated}</div>
              <div className="text-[10px] text-muted-foreground">
                {resort.pagesApproved} approved
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <Radar className="h-3 w-3" />
                Signals
              </div>
              <div className="text-lg font-semibold">{resort.signals}</div>
              <div className="text-[10px] text-muted-foreground">active</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                AEO
              </div>
              <div className="text-lg font-semibold text-primary-glow">{resort.aeoScore}</div>
              <div className="text-[10px] text-muted-foreground">GEO {resort.geoScore}</div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/microsite/$slug"
        params={{ slug: resort.slug }}
        className="flex items-center justify-center gap-1 border-t border-border py-2 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
      >
        View live microsite <ExternalLink className="h-3 w-3" />
      </Link>
    </Card>
  );
}
