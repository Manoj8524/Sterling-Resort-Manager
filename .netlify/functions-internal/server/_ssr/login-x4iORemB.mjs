import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-CtX3ithx.mjs";
import { G as LoaderCircle, U as LogIn, V as Mail, W as Lock, b as Sparkles, xt as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-x4iORemB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const handleAuth = (e) => {
		e.preventDefault();
		if (!email || !password) {
			setErrorMsg("Please enter both email and password.");
			return;
		}
		setLoading(true);
		setErrorMsg(null);
		setTimeout(() => {
			localStorage.setItem("sterling_demo_user", email);
			window.location.href = "/";
		}, 600);
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "border border-border/40 bg-card/60 backdrop-blur-md shadow-card rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-xl font-bold",
							children: "Welcome back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Enter your credentials to access the console" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
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
											required: true
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
											required: true
										})]
									})]
								}),
								errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-destructive/10 p-3 text-xs text-destructive flex items-center gap-2 border border-destructive/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									className: "w-full gradient-primary shadow-violet text-primary-foreground hover:opacity-95 mt-4 h-10 font-semibold",
									disabled: loading,
									children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4 mr-2" }), "Sign In"]
								})
							]
						}) })]
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
