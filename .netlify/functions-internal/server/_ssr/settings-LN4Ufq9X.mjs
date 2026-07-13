import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Card } from "./card-BfBj_YIE.mjs";
import { C as Settings } from "../_libs/lucide-react.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-LN4Ufq9X.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "p-6 lg:p-8 max-w-[900px] mx-auto space-y-6",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-primary text-sm font-medium",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" }), " Configuration"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-3xl font-bold mt-1",
		children: "Settings"
	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-6 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Client name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "Sterling Holidays" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Sitemap URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "https://www.sterlingholidays.com/sitemap.xml" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium text-sm",
					children: "Auto-approve high-score pages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "Pages with AEO score ≥ 90 skip review"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium text-sm",
					children: "Nightly agent runs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "Signal mining every night at 02:00 IST"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })]
			})
		]
	})]
});
//#endregion
export { SplitComponent as component };
