import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2, Lock, Mail, LogIn, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — Sterling Resort Manager" },
      { name: "description", content: "Access your Sterling AEO/GEO Operations Console." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    // Simulate a brief loading state for a smooth user experience, then redirect
    setTimeout(() => {
      localStorage.setItem("sterling_demo_user", email);
      window.location.href = "/";
    }, 600);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.52_0.24_295/_0.15),transparent_40%),radial-gradient(circle_at_70%_80%,oklch(0.68_0.22_300/_0.12),transparent_50%)]" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="w-full max-w-[420px] space-y-6">
        {/* Branding header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="gradient-primary shadow-violet flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground animate-pulse">
            <Sparkles className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-4">Sterling</h1>
          <p className="text-sm text-muted-foreground font-medium">Resort Content & Operations Manager</p>
        </div>

        {/* Main Card */}
        <Card className="border border-border/40 bg-card/60 backdrop-blur-md shadow-card rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              Enter your credentials to access the console
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@sterling.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="rounded-lg bg-destructive/10 p-3 text-xs text-destructive flex items-center gap-2 border border-destructive/20">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <Button
                type="submit"
                className="w-full gradient-primary shadow-violet text-primary-foreground hover:opacity-95 mt-4 h-10 font-semibold"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <LogIn className="h-4 w-4 mr-2" />
                )}
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer text */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sterling Holidays. All rights reserved.
        </p>
      </div>
    </div>
  );
}
