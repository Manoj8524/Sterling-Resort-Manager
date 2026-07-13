import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { b as Sparkles } from "../_libs/lucide-react.mjs";
import { p as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-mode-CGKh96_F.js
var import_jsx_runtime = require_jsx_runtime();
function AiModeLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b bg-background/60 backdrop-blur sticky top-0 z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1600px] mx-auto px-6 lg:px-8 py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-primary text-xs font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AI STUDIO"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold mt-1",
					children: "The Sterling Content Brain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm mt-0.5",
					children: [
						"15 agents continuously discover, draft, and improve hyperlocal & AI-first content. New items land in the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/review-queue",
							className: "text-primary hover:underline",
							children: "Review Queue"
						}),
						"."
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] });
}
//#endregion
export { AiModeLayout as component };
