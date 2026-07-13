import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/ai-mode")({
  head: () => ({ meta: [{ title: "AI Studio — Sterling AEO/GEO" }] }),
  component: AiModeLayout,
});

function AiModeLayout() {
  return (
    <div>
      <div className="border-b bg-background/60 backdrop-blur sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-primary text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" /> AI STUDIO
          </div>
          <h1 className="text-2xl font-bold mt-1">The Sterling Content Brain</h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            15 agents continuously discover, draft, and improve hyperlocal & AI-first content. New items land in the{" "}
            <a href="/review-queue" className="text-primary hover:underline">Review Queue</a>.
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
