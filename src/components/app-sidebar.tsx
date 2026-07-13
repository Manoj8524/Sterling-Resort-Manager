import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Building2,
  FileText,
  Sparkles,
  Settings,
  Globe2,
  MessageCircleQuestion,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const main = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Resorts", url: "/resorts", icon: Building2 },
  { title: "Content", url: "/pages", icon: FileText },
];

const ai = [
  { title: "AI Studio", url: "/ai-mode", icon: Sparkles },
  { title: "Review Queue", url: "/review-queue", icon: ClipboardList },
];

const optimize = [
  { title: "GEO Manager", url: "/geo-manager", icon: Globe2 },
  { title: "AEO Manager", url: "/aeo-manager", icon: MessageCircleQuestion },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

const misc = [{ title: "Settings", url: "/settings", icon: Settings }];

export function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (u: string) => (u === "/" ? pathname === "/" : pathname.startsWith(u));

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <Link to="/" className="flex items-center gap-2 px-2 py-3">
          <div className="gradient-primary shadow-violet flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-bold leading-tight">Sterling AEO/GEO</span>
            <span className="text-xs text-muted-foreground leading-tight">Admin Console</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="pt-0">
          <SidebarGroupLabel>AI</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {ai.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="pt-0">
          <SidebarGroupLabel>Optimization</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {optimize.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="pt-0">
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {misc.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="flex items-center gap-2 px-2 py-2 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          <div className="h-2 w-2 rounded-full bg-success" />
          <span>All agents online</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
