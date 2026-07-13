import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { supabase } from "@/lib/client";
import { Sparkles, Loader2, Lock, Mail, LogIn, AlertCircle, HelpCircle } from "lucide-react";

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [hasSupabase, setHasSupabase] = useState(true);

  useEffect(() => {
    // Check if Supabase keys exist
    const hasKeys = !!import.meta.env.VITE_SUPABASE_URL && !!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    setHasSupabase(hasKeys);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setSuccessMsg("Registration successful! Please check your email for a confirmation link or log in if auto-confirmed.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        window.location.href = "/";
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An authentication error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoBypass = () => {
    localStorage.setItem("sterling_demo_user", "admin");
    window.location.href = "/";
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

        {/* Credentials Missing Banner */}
        {!hasSupabase && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-amber-500 flex items-start gap-3 animate-fade-in shadow-sm">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-bold">Supabase is not connected</p>
              <p className="opacity-90">To test authentication, configure the environment variables on Netlify. In the meantime, you can explore using the Demo Bypass below.</p>
            </div>
          </div>
        )}

        {/* Main Card */}
        <Card className="border border-border/40 bg-card/60 backdrop-blur-md shadow-card rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              {isSignUp ? "Create an account" : "Welcome back"}
            </CardTitle>
            <CardDescription>
              {isSignUp
                ? "Sign up to manage resort pages and content"
                : "Enter your credentials to access the console"}
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
                    disabled={!hasSupabase}
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
                    disabled={!hasSupabase}
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="rounded-lg bg-destructive/10 p-3 text-xs text-destructive flex items-center gap-2 border border-destructive/20">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="rounded-lg bg-emerald-500/10 p-3 text-xs text-emerald-500 flex items-center gap-2 border border-emerald-500/20">
                  <HelpCircle className="h-4 w-4 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <Button
                type="submit"
                className="w-full gradient-primary shadow-violet text-primary-foreground hover:opacity-95 mt-2 h-10 font-semibold"
                disabled={loading || !hasSupabase}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <LogIn className="h-4 w-4 mr-2" />
                )}
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3 pt-0 border-t border-border/20 mt-4">
            {hasSupabase && (
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrorMsg(null);
                  setSuccessMsg(null);
                }}
                className="text-xs text-primary hover:underline font-semibold mt-4 transition-colors"
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Need an account? Contact admin or sign up"}
              </button>
            )}

            <div className="w-full flex items-center justify-between text-xs text-muted-foreground pt-4">
              <span className="h-px w-1/3 bg-border" />
              <span>Or Continue With</span>
              <span className="h-px w-1/3 bg-border" />
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleDemoBypass}
              className="w-full border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 text-primary hover:text-primary transition-all duration-200 h-10 font-semibold"
            >
              <span>Demo Admin Bypass</span>
            </Button>
          </CardFooter>
        </Card>

        {/* Footer text */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sterling Holidays. All rights reserved.
        </p>
      </div>
    </div>
  );
}
