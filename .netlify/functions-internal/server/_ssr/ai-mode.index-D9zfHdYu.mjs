import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Card } from "./card-CtX3ithx.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { $ as Inbox, Lt as ArrowRight, b as Sparkles, st as FileCheckCorner, zt as Activity } from "../_libs/lucide-react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as INBOX, r as WORKFLOW, t as AGENTS } from "./ai-agents-TtkTV8M5.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-mode.index-D9zfHdYu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Discovery",
	"Local",
	"Answer Engine",
	"Quality"
];
function AgentsOverview() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const [agents, setAgents] = (0, import_react.useState)(AGENTS);
	const filtered = (0, import_react.useMemo)(() => cat === "All" ? agents : agents.filter((a) => a.category === cat), [cat, agents]);
	const stats = (0, import_react.useMemo)(() => {
		return {
			active: agents.filter((a) => a.active).length,
			totalDrafts: INBOX.filter((i) => i.category === "approvals").length,
			opportunities: INBOX.filter((i) => i.category === "opportunities").length,
			runs: agents.reduce((s, a) => s + a.runs, 0)
		};
	}, [agents]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8 max-w-[1600px] mx-auto space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Agents running",
						value: `${stats.active} / ${agents.length}`,
						icon: Activity,
						tint: "text-emerald-500"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Opportunities",
						value: stats.opportunities,
						icon: Sparkles,
						tint: "text-violet-500"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Drafts awaiting review",
						value: stats.totalDrafts,
						icon: FileCheckCorner,
						tint: "text-amber-500"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total runs (30d)",
						value: stats.runs.toLocaleString(),
						icon: Inbox,
						tint: "text-sky-500"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: "How the pipeline works",
				desc: "Every agent feeds a single continuous flow — from discovery to publish to monitoring."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 overflow-x-auto pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-stretch gap-3 min-w-max",
					children: WORKFLOW.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 10
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: { delay: i * .05 },
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "w-52 p-4 shrink-0 bg-gradient-to-br from-background to-muted/40 hover:shadow-violet transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] font-medium text-muted-foreground",
									children: ["STEP ", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm mt-0.5",
									children: w.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-1 leading-relaxed",
									children: w.desc
								})
							]
						}), i < WORKFLOW.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground shrink-0" })]
					}, w.step))
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					title: "The 15 agents",
					desc: "Each agent asks a specific question and drops answers into the Content Inbox."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2 mt-4",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: cn("px-3 py-1.5 rounded-full text-xs font-medium border transition", cat === c ? "bg-primary text-primary-foreground border-primary" : "bg-background hover:bg-muted border-border text-muted-foreground"),
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3 mt-5",
					children: filtered.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: true,
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: Math.min(i * .03, .3) },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5 h-full flex flex-col hover:shadow-violet transition group relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl group-hover:opacity-40 transition", a.color) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cn("h-10 w-10 rounded-lg bg-gradient-to-br flex items-center justify-center text-white shadow", a.color),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-sm",
											children: a.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-1 mt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "secondary",
												className: "text-[10px]",
												children: a.category
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, { p: a.priority })]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: a.active,
										onCheckedChange: (v) => setAgents((prev) => prev.map((x) => x.id === a.id ? {
											...x,
											active: v
										} : x))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-3 leading-relaxed",
									children: a.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 rounded-md bg-muted/50 px-3 py-2 text-xs italic text-foreground/80",
									children: [
										"\"",
										a.question,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-1",
									children: [a.discovers.slice(0, 4).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-0.5 rounded bg-background border text-muted-foreground",
										children: d
									}, d)), a.discovers.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] px-2 py-0.5 rounded bg-background border text-muted-foreground",
										children: ["+", a.discovers.length - 4]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground border-t mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "text-foreground",
												children: a.runs.toLocaleString()
											}), " runs"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "text-foreground",
												children: a.drafts
											}), " drafts"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
												className: "text-foreground",
												children: [a.successRate, "%"]
											}), " success"] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/ai-mode/agents/$id",
										params: { id: a.id },
										className: "text-primary hover:underline font-medium flex items-center gap-1",
										children: ["Open ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
									})]
								})
							]
						})
					}, a.id))
				})
			] })
		]
	});
}
function StatCard({ label, value, icon: Icon, tint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4 flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-9 w-9 rounded-lg bg-muted flex items-center justify-center", tint),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-lg font-bold leading-tight",
			children: value
		})] })]
	});
}
function SectionHeader({ title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-lg font-semibold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: desc
	})] });
}
function PriorityBadge({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("text-[10px] px-1.5 py-0.5 rounded border font-medium", p === "Critical" ? "bg-red-500/10 text-red-600 border-red-500/20" : p === "High" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : "bg-slate-500/10 text-slate-600 border-slate-500/20"),
		children: p
	});
}
//#endregion
export { AgentsOverview as component };
