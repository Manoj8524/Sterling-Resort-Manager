import { createFileRoute } from "@tanstack/react-router";
import { Settings as SettingsIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Sterling AEO/GEO" }] }),
  component: () => (
    <div className="p-6 lg:p-8 max-w-[900px] mx-auto space-y-6">
      <div>
        <div className="flex items-center gap-2 text-primary text-sm font-medium"><SettingsIcon className="h-4 w-4" /> Configuration</div>
        <h1 className="text-3xl font-bold mt-1">Settings</h1>
      </div>
      <Card className="p-6 space-y-4">
        <div>
          <Label>Client name</Label>
          <Input defaultValue="Sterling Holidays" />
        </div>
        <div>
          <Label>Sitemap URL</Label>
          <Input defaultValue="https://www.sterlingholidays.com/sitemap.xml" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-sm">Auto-approve high-score pages</div>
            <div className="text-xs text-muted-foreground">Pages with AEO score ≥ 90 skip review</div>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-sm">Nightly agent runs</div>
            <div className="text-xs text-muted-foreground">Signal mining every night at 02:00 IST</div>
          </div>
          <Switch defaultChecked />
        </div>
      </Card>
    </div>
  ),
});
