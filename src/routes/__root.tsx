import { createRootRouteWithContext, Outlet, ScrollRestoration, useRouterState } from "@tanstack/react-router";
import { HeadContent, Scripts } from "@tanstack/react-router";
import * as React from "react";
import { QueryClient } from "@tanstack/react-query";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { supabase } from "@/lib/client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";
import styles from "@/styles.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Sterling Resort Manager",
      },
    ],
    links: [
      { rel: "stylesheet", href: styles },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    // Check if there is a demo user session in localStorage
    const demoUser = localStorage.getItem("sterling_demo_user");
    if (demoUser) {
      setIsDemo(true);
      setLoading(false);
      return;
    }

    // Check if Supabase keys exist
    const hasSupabase = !!import.meta.env.VITE_SUPABASE_URL && !!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    if (!hasSupabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    if (isDemo) {
      localStorage.removeItem("sterling_demo_user");
      setIsDemo(false);
      window.location.href = "/login";
    } else {
      await supabase.auth.signOut();
      window.location.href = "/login";
    }
  };

  const isPublic = pathname.startsWith("/login") || pathname.startsWith("/microsite/") || pathname.startsWith("/g/");

  // Render the appropriate layout inside HTML/Body shell
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {isPublic ? (
          <div className="min-h-screen bg-background">
            <Outlet />
          </div>
        ) : loading ? (
          <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-background">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground font-medium animate-pulse">Loading Sterling Console...</p>
          </div>
        ) : !session && !isDemo ? (
          <ClientRedirect />
        ) : (
          <SidebarProvider>
            <div className="flex min-h-screen w-full bg-background">
              <AppSidebar />
              <main className="flex-1 overflow-auto animate-fade-in">
                <header className="flex h-16 items-center justify-between border-b px-6 lg:px-8 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
                  <div className="flex items-center gap-4">
                    <SidebarTrigger />
                    <div className="h-4 w-px bg-border" />
                    <span className="text-sm font-semibold text-muted-foreground">Sterling Resort Manager</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {isDemo && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-medium">
                        Demo Mode
                      </span>
                    )}
                    <div className="text-xs text-muted-foreground font-medium">
                      {isDemo ? "admin@sterling.com" : session?.user?.email}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLogout}
                      className="h-8 gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 transition-all duration-200"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </Button>
                  </div>
                </header>
                <div>
                  <Outlet />
                </div>
              </main>
            </div>
          </SidebarProvider>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function ClientRedirect() {
  useEffect(() => {
    window.location.href = "/login";
  }, []);
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-background">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground font-medium">Redirecting to login...</p>
    </div>
  );
}
