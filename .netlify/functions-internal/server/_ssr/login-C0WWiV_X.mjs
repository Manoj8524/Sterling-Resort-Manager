import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BfBj_YIE.mjs";
import { G as LoaderCircle, U as LogIn, V as Mail, W as Lock, b as Sparkles, xt as CircleAlert, yt as CircleQuestionMark } from "../_libs/lucide-react.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-DEjS8uTy.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-C0WWiV_X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const [successMsg, setSuccessMsg] = (0, import_react.useState)(null);
	const [isSignUp, setIsSignUp] = (0, import_react.useState)(false);
	const [hasSupabase, setHasSupabase] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setHasSupabase(false);
	}, []);
	const handleAuth = async (e) => {
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
					password
				});
				if (error) throw error;
				setSuccessMsg("Registration successful! Please check your email for a confirmation link or log in if auto-confirmed.");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				window.location.href = "/";
			}
		} catch (err) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.52_0.24_295/_0.15),transparent_40%),radial-gradient(circle_at_70%_80%,oklch(0.68_0.22_300/_0.12),transparent_50%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-[420px] space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "gradient-primary shadow-violet flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground animate-pulse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-extrabold tracking-tight mt-4",
								children: "Sterling"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground font-medium",
								children: "Resort Content & Operations Manager"
							})
						]
					}),
					!hasSupabase && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-amber-500 flex items-start gap-3 animate-fade-in shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: "Supabase is not connected"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "opacity-90",
								children: "To test authentication, configure the environment variables on Netlify. In the meantime, you can explore using the Demo Bypass below."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "border border-border/40 bg-card/60 backdrop-blur-md shadow-card rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-xl font-bold",
								children: isSignUp ? "Create an account" : "Welcome back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: isSignUp ? "Sign up to manage resort pages and content" : "Enter your credentials to access the console" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleAuth,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "email",
											children: "Email address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "email",
												type: "email",
												placeholder: "name@sterling.com",
												value: email,
												onChange: (e) => setEmail(e.target.value),
												className: "pl-10",
												required: true,
												disabled: !hasSupabase
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "password",
												children: "Password"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "password",
												type: "password",
												placeholder: "••••••••",
												value: password,
												onChange: (e) => setPassword(e.target.value),
												className: "pl-10",
												required: true,
												disabled: !hasSupabase
											})]
										})]
									}),
									errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-destructive/10 p-3 text-xs text-destructive flex items-center gap-2 border border-destructive/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
									}),
									successMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-emerald-500/10 p-3 text-xs text-emerald-500 flex items-center gap-2 border border-emerald-500/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: successMsg })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										className: "w-full gradient-primary shadow-violet text-primary-foreground hover:opacity-95 mt-2 h-10 font-semibold",
										disabled: loading || !hasSupabase,
										children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4 mr-2" }), isSignUp ? "Sign Up" : "Sign In"]
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
								className: "flex flex-col space-y-3 pt-0 border-t border-border/20 mt-4",
								children: [
									hasSupabase && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setIsSignUp(!isSignUp);
											setErrorMsg(null);
											setSuccessMsg(null);
										},
										className: "text-xs text-primary hover:underline font-semibold mt-4 transition-colors",
										children: isSignUp ? "Already have an account? Sign in" : "Need an account? Contact admin or sign up"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-full flex items-center justify-between text-xs text-muted-foreground pt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-1/3 bg-border" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Or Continue With" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-1/3 bg-border" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										onClick: handleDemoBypass,
										className: "w-full border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 text-primary hover:text-primary transition-all duration-200 h-10 font-semibold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Demo Admin Bypass" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-xs text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Sterling Holidays. All rights reserved."
						]
					})
				]
			})
		]
	});
}
//#endregion
export { LoginPage as component };
