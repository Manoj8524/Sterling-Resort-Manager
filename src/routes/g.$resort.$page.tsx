import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getResort } from "@/data/resorts";
import type { Resort } from "@/data/resorts";
import { findPage, renderPage, type Block, type GenPage } from "@/data/generated";

export const Route = createFileRoute("/g/$resort/$page")({
  loader: ({ params }): { resort: Resort; page: GenPage; blocks: Block[] } => {
    const resort = getResort(params.resort);
    if (!resort) throw notFound();
    const page = findPage(resort, params.page);
    if (!page) throw notFound();
    return { resort, page, blocks: renderPage(page, resort) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    const { page, resort } = loaderData;
    return {
      meta: [
        { title: `${page.title} · ${resort.shortName}` },
        { name: "description", content: `${page.title} — a Sterling Holidays generated page for ${resort.location}, ${resort.state}.` },
      ],
    };
  },
  component: PagePreview,
  notFoundComponent: () => (
    <div className="p-10 text-center text-sm text-muted-foreground">Page not found.</div>
  ),
});

function PagePreview() {
  const data = Route.useLoaderData() as { resort: Resort; page: GenPage; blocks: Block[] };
  const { resort, page, blocks } = data;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Preview toolbar */}
      <div className="border-b bg-card/95 backdrop-blur sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center gap-3 px-4 h-12">
          <Button asChild size="sm" variant="ghost" className="gap-1">
            <Link to="/pages"><ArrowLeft className="h-4 w-4" /> Back</Link>
          </Button>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2 text-xs text-muted-foreground min-w-0">
            <Badge variant="secondary" className="text-[10px]">{page.layerLabel}</Badge>
            <span className="truncate font-mono">/g/{resort.slug}/{page.slug}</span>
          </div>
          <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Static preview
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <MapPin className="h-3.5 w-3.5" />
          <Link to="/resorts/$slug" params={{ slug: resort.slug }} className="hover:text-primary hover:underline">
            {resort.shortName}
          </Link>
          <span>·</span>
          <span>{resort.location}, {resort.state}</span>
          <span>·</span>
          <span>{page.groupLabel}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{page.title}</h1>

        <div className="mt-8 space-y-6">
          {blocks.map((b, i) => {
            if (b.kind === "lede") {
              return <p key={i} className="text-lg text-foreground/90 leading-relaxed">{b.text}</p>;
            }
            if (b.kind === "section") {
              return (
                <section key={i} className="space-y-3">
                  <h2 className="text-xl font-semibold border-l-2 border-primary pl-3">{b.heading}</h2>
                  {b.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm text-foreground/80 leading-relaxed">{p}</p>
                  ))}
                </section>
              );
            }
            if (b.kind === "list") {
              return (
                <section key={i} className="space-y-3">
                  <h2 className="text-xl font-semibold border-l-2 border-primary pl-3">{b.heading}</h2>
                  <ul className="space-y-2">
                    {b.items.map((it, j) => (
                      <li key={j} className="flex gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            }
            if (b.kind === "faq") {
              return (
                <section key={i} className="space-y-3">
                  <h2 className="text-xl font-semibold border-l-2 border-primary pl-3">Frequently asked questions</h2>
                  <div className="space-y-3">
                    {b.items.map((f, j) => (
                      <div key={j}>
                        <div className="font-medium text-sm">{f.q}</div>
                        <div className="text-sm text-muted-foreground mt-1">{f.a}</div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            }
            // cta
            return (
              <Card key={i} className="p-5 bg-primary/5 border-primary/30 flex items-center justify-between gap-4">
                <div className="text-sm font-medium">{b.text}</div>
                <Button size="sm">Book now</Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 pt-6 border-t text-xs text-muted-foreground">
          Generated by Sterling AEO/GEO · Layer: {page.layerLabel} · Group: {page.groupLabel}
        </div>
      </article>
    </div>
  );
}