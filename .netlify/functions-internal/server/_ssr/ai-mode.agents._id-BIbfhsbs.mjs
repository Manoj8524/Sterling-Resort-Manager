import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CtX3ithx.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { Et as Check, Rt as ArrowLeft, b as Sparkles, gt as Clock, k as Play, t as X } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as INBOX, t as AGENTS } from "./ai-agents-TtkTV8M5.mjs";
import { t as Route } from "./ai-mode.agents._id-D10XqawQ.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-mode.agents._id-BIbfhsbs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AgentDetail() {
	const { agent } = Route.useLoaderData();
	const [active, setActive] = (0, import_react.useState)(agent.active);
	const items = INBOX.filter((i) => i.agent === agent.id);
	const others = AGENTS.filter((a) => a.id !== agent.id && a.category === agent.category).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/ai-mode",
				className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to agents"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br opacity-20 blur-3xl", agent.color) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg", agent.color),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(agent.icon, { className: "h-7 w-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 flex-wrap",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
													className: "text-2xl font-bold",
													children: [agent.name, " Agent"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "secondary",
													children: agent.category
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													className: cn(agent.priority === "Critical" ? "bg-red-500/10 text-red-600 border-red-500/20" : agent.priority === "High" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : "bg-slate-500/10 text-slate-600 border-slate-500/20"),
													variant: "outline",
													children: agent.priority
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground mt-1",
											children: agent.tagline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-medium text-primary uppercase tracking-wide",
												children: "The question it asks"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-foreground mt-0.5 italic",
												children: [
													"\"",
													agent.question,
													"\""
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2 w-2 rounded-full", active ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground") }),
											active ? "Running" : "Paused",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: active,
												onCheckedChange: setActive
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => toast.success(`${agent.name} run started`),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3 mr-1" }), " Run now"]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-4 mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
									label: "Runs (30d)",
									value: agent.runs.toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
									label: "Drafts produced",
									value: agent.drafts
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
									label: "Success rate",
									value: `${agent.successRate}%`,
									progress: agent.successRate
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-semibold flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), " What it discovers"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 mt-3",
						children: agent.discovers.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs px-3 py-1.5 rounded-full bg-muted border",
							children: d
						}, d))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "Example outputs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: agent.examples.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-emerald-500 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e })]
						}, e))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Recent items from this agent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Everything this agent has surfaced into the Content Inbox."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 space-y-2",
					children: [items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 text-center text-sm text-muted-foreground flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), " No items yet — next run scheduled soon."]
					}), items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							x: -4
						},
						animate: {
							opacity: 1,
							x: 0
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-4 flex items-start justify-between gap-4 hover:shadow-violet transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-sm",
										children: it.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: it.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mt-2 text-[10px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											className: "text-[10px]",
											children: [it.impact, " impact"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", it.createdAt] })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => toast.success("Approved"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => toast("Marked for later"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => toast.error("Rejected"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
									})
								]
							})]
						})
					}, it.id))]
				})
			] }),
			others.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-lg font-semibold",
				children: ["Related agents in ", agent.category]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-3 mt-3",
				children: others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ai-mode/agents/$id",
					params: { id: o.id },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "p-4 hover:shadow-violet transition h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("h-9 w-9 rounded-lg bg-gradient-to-br flex items-center justify-center text-white", o.color),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o.icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold",
								children: o.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground line-clamp-1",
								children: o.tagline
							})] })]
						})
					})
				}, o.id))
			})] })
		]
	});
}
function MiniStat({ label, value, progress }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-lg font-bold mt-0.5",
				children: value
			}),
			progress !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: progress,
				className: "h-1.5 mt-2"
			})
		]
	});
}
//#endregion
export { AgentDetail as component };
