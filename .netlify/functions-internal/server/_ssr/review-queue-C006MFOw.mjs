import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as RESORTS } from "./resorts-ClO0P_d2.mjs";
import { t as Card } from "./card-BfBj_YIE.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { B as MapPin, Et as Check, Lt as ArrowRight, M as Pencil, T as RefreshCcw, _t as ClipboardList, b as Sparkles, g as Swords, gt as Clock, it as Funnel, jt as CalendarDays, l as TriangleAlert, ot as FileText, t as X, u as TrendingUp, v as Star, z as MessageCircleQuestionMark, zt as Activity } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as INBOX, t as AGENTS } from "./ai-agents-TtkTV8M5.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as Checkbox } from "./checkbox-kt6FvQcE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-queue-C006MFOw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TYPE_META = {
	"new-attraction": {
		label: "New Attraction",
		icon: MapPin,
		accent: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
		action: "Generate"
	},
	"generated-page": {
		label: "Generated Page",
		icon: FileText,
		accent: "text-violet-600  bg-violet-500/10  border-violet-500/20",
		action: "Approve"
	},
	"updated-faq": {
		label: "Updated FAQ",
		icon: MessageCircleQuestionMark,
		accent: "text-blue-600    bg-blue-500/10    border-blue-500/20",
		action: "Review"
	},
	"outdated-guide": {
		label: "Outdated Guide",
		icon: TriangleAlert,
		accent: "text-amber-600   bg-amber-500/10   border-amber-500/20",
		action: "Update"
	},
	"trending": {
		label: "Trending Query",
		icon: TrendingUp,
		accent: "text-pink-600    bg-pink-500/10    border-pink-500/20",
		action: "Generate"
	},
	"seasonal": {
		label: "Seasonal",
		icon: CalendarDays,
		accent: "text-orange-600  bg-orange-500/10  border-orange-500/20",
		action: "Generate"
	},
	"review-insight": {
		label: "Review Insight",
		icon: Star,
		accent: "text-yellow-600  bg-yellow-500/10  border-yellow-500/20",
		action: "Review"
	},
	"competitor": {
		label: "Competitor",
		icon: Swords,
		accent: "text-red-600     bg-red-500/10     border-red-500/20",
		action: "Review"
	},
	"performance": {
		label: "Performance",
		icon: Activity,
		accent: "text-cyan-600    bg-cyan-500/10    border-cyan-500/20",
		action: "Review"
	}
};
var CATEGORY_TO_TYPE = {
	opportunities: "new-attraction",
	approvals: "generated-page",
	updates: "outdated-guide",
	reviews: "review-insight",
	trending: "trending",
	seasonal: "seasonal",
	competitor: "competitor",
	performance: "performance"
};
function buildQueue() {
	const fromInbox = INBOX.map((i) => {
		const type = i.category === "updates" && /faq|schema|policy/i.test(i.title + i.detail) ? "updated-faq" : CATEGORY_TO_TYPE[i.category];
		const meta = TYPE_META[type];
		const agent = AGENTS.find((a) => a.id === i.agent);
		return {
			id: i.id,
			type,
			typeLabel: meta.label,
			title: i.title,
			detail: i.detail,
			source: agent.name,
			sourceHref: {
				to: "/ai-mode/agents/$id",
				params: { id: agent.id }
			},
			createdAt: i.createdAt,
			priority: i.impact,
			action: meta.action,
			icon: meta.icon,
			accent: meta.accent
		};
	});
	const fromResorts = RESORTS.filter((r) => r.pagesPending > 0).slice(0, 6).map((r, i) => {
		const meta = TYPE_META["generated-page"];
		return {
			id: `rq_res_${r.slug}_${i}`,
			type: "generated-page",
			typeLabel: meta.label,
			title: `Things to do in ${r.location}`,
			detail: `AI-drafted guide for ${r.shortName} — 720 words, 6 FAQs, 4 internal links.`,
			source: r.shortName,
			sourceHref: {
				to: "/resorts/$slug",
				params: { slug: r.slug }
			},
			createdAt: `${i % 5 + 1}h ago`,
			priority: i < 2 ? "High" : "Medium",
			action: meta.action,
			icon: meta.icon,
			accent: meta.accent
		};
	});
	return [...fromInbox, ...fromResorts];
}
var ACTION_ICON = {
	Generate: Sparkles,
	Approve: Check,
	Review: Pencil,
	Update: RefreshCcw
};
function ReviewQueue() {
	const all = (0, import_react.useMemo)(() => buildQueue(), []);
	const [dismissed, setDismissed] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("all");
	const [priorityFilter, setPriorityFilter] = (0, import_react.useState)("all");
	const [resortFilter, setResortFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const visible = all.filter((it) => {
		if (dismissed.has(it.id)) return false;
		if (typeFilter !== "all" && it.type !== typeFilter) return false;
		if (priorityFilter !== "all" && it.priority !== priorityFilter) return false;
		if (resortFilter !== "all") {
			const matchesResortSource = it.sourceHref?.params?.slug === resortFilter;
			const resortName = RESORTS.find((r) => r.slug === resortFilter)?.shortName ?? "";
			const matchesText = resortName && (it.title.toLowerCase().includes(resortName.toLowerCase()) || it.detail.toLowerCase().includes(resortName.toLowerCase()) || it.source.toLowerCase().includes(resortName.toLowerCase()));
			if (!matchesResortSource && !matchesText) return false;
		}
		if (q) {
			const s = q.toLowerCase();
			if (!it.title.toLowerCase().includes(s) && !it.detail.toLowerCase().includes(s)) return false;
		}
		return true;
	});
	const countsByType = (0, import_react.useMemo)(() => {
		const m = {};
		for (const it of all) if (!dismissed.has(it.id)) m[it.type] = (m[it.type] ?? 0) + 1;
		return m;
	}, [all, dismissed]);
	const totalActive = all.length - dismissed.size;
	const highCount = all.filter((i) => !dismissed.has(i.id) && i.priority === "High").length;
	const generatedCount = countsByType["generated-page"] ?? 0;
	const dismiss = (ids, msg, kind = "success") => {
		setDismissed((prev) => {
			const next = new Set(prev);
			for (const id of ids) next.add(id);
			return next;
		});
		setSelected(/* @__PURE__ */ new Set());
		if (kind === "success") toast.success(msg);
		else if (kind === "error") toast.error(msg);
		else toast(msg);
	};
	const toggleSelect = (id) => setSelected((s) => {
		const next = new Set(s);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		return next;
	});
	const allVisibleSelected = visible.length > 0 && visible.every((v) => selected.has(v.id));
	const toggleSelectAll = () => {
		if (allVisibleSelected) setSelected(/* @__PURE__ */ new Set());
		else setSelected(new Set(visible.map((v) => v.id)));
	};
	const bulk = (kind) => {
		const ids = Array.from(selected);
		if (!ids.length) return toast.error("Select items first");
		dismiss(ids, `${kind === "Approve" ? "Approved" : kind + "d"} ${ids.length} item${ids.length > 1 ? "s" : ""}`);
	};
	const typeChips = [{
		key: "all",
		label: "All",
		count: totalActive
	}, ...Object.keys(TYPE_META).map((k) => ({
		key: k,
		label: TYPE_META[k].label,
		count: countsByType[k] ?? 0
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4" }), " Review Queue"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold tracking-tight mt-1",
						children: "Everything waiting on you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1 max-w-2xl",
						children: "New attractions the AI discovered, drafts it wrote, FAQs it updated, and guides it wants to refresh — all in one place. Approve, edit, or dismiss to keep the pipeline moving."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 mr-1" }), " Save view"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						label: "In queue",
						value: totalActive
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						label: "High priority",
						value: highCount,
						warn: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						label: "Drafts to approve",
						value: generatedCount,
						accent: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						label: "Avg. review time",
						value: "4.2h"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [typeChips.map((c) => {
						const active = typeFilter === c.key;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setTypeFilter(c.key),
							className: cn("px-3 py-1.5 rounded-md text-xs border transition flex items-center gap-1.5", active ? "bg-primary text-primary-foreground border-primary shadow-violet" : "bg-background hover:bg-muted border-border"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-[10px] font-semibold rounded-full px-1.5 min-w-[18px] text-center", active ? "bg-primary-foreground/20" : "bg-muted"),
								children: c.count
							})]
						}, c.key);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: resortFilter,
								onChange: (e) => setResortFilter(e.target.value),
								className: "h-8 rounded-md border bg-background px-2 text-xs max-w-[200px]",
								"aria-label": "Filter by resort",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: "all",
									children: [
										"All resorts (",
										RESORTS.length,
										")"
									]
								}), [...RESORTS].sort((a, b) => a.shortName.localeCompare(b.shortName)).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: r.slug,
									children: r.shortName
								}, r.slug))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: priorityFilter,
								onChange: (e) => setPriorityFilter(e.target.value),
								className: "h-8 rounded-md border bg-background px-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All priorities"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "High",
										children: "High"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Medium",
										children: "Medium"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Low",
										children: "Low"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Search…",
								value: q,
								onChange: (e) => setQ(e.target.value),
								className: "h-8 w-[220px] text-xs"
							})
						]
					})]
				})
			}),
			selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-3 flex items-center justify-between gradient-soft border-primary/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm font-medium",
					children: [selected.size, " selected"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => bulk("Approve"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 mr-1" }), " Approve"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => bulk("Generate"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 mr-1" }), " Generate"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => bulk("Update"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "h-4 w-4 mr-1" }), " Update"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => dismiss(Array.from(selected), `Dismissed ${selected.size} item(s)`, "default"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 mr-1" }), " Dismiss"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[36px_180px_1fr_140px_90px_180px] items-center gap-3 px-4 py-2.5 border-b bg-muted/40 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							checked: allVisibleSelected,
							onCheckedChange: toggleSelectAll
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Type" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Item" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Source" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Priority" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-right pr-1",
							children: "Action"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: visible.map((it) => {
							const Icon = it.icon;
							const ActionIcon = ACTION_ICON[it.action];
							const isSel = selected.has(it.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								layout: true,
								initial: {
									opacity: 0,
									y: 4
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									x: 40
								},
								transition: { duration: .18 },
								className: cn("grid grid-cols-[36px_180px_1fr_140px_90px_180px] items-center gap-3 px-4 py-3 hover:bg-accent/40 transition", isSel && "bg-primary/5"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: isSel,
										onCheckedChange: () => toggleSelect(it.id)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: cn("inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-medium", it.accent),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), it.typeLabel]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium text-sm truncate",
											children: it.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground truncate",
											children: it.detail
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 text-xs",
										children: [it.sourceHref ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: it.sourceHref.to,
											params: it.sourceHref.params,
											className: "text-primary hover:underline flex items-center gap-1 truncate",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: it.source
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 shrink-0" })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground truncate",
											children: it.source
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: it.createdAt
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityPill, { priority: it.priority }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-end gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												onClick: () => dismiss([it.id], `${it.action === "Approve" ? "Approved" : it.action + "d"}: ${it.title}`),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionIcon, { className: "h-3.5 w-3.5 mr-1" }),
													" ",
													it.action
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												title: "Snooze",
												onClick: () => dismiss([it.id], "Snoozed for later", "default"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												title: "Dismiss",
												onClick: () => dismiss([it.id], "Dismissed", "error"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
											})
										]
									})
								]
							}, it.id);
						})
					}), visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-12 text-center text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-4xl mb-2",
								children: "✨"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-foreground",
								children: "Queue clear"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: "Your agents will drop new items here as they discover them."
							})
						]
					})]
				})]
			})
		]
	});
}
function KPI({ label, value, accent, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mt-1 text-3xl font-bold tabular-nums", accent && "text-primary", warn && "text-warning-foreground"),
			children: typeof value === "number" ? value.toLocaleString() : value
		})]
	});
}
function PriorityPill({ priority }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		className: cn("text-[10px] w-fit", priority === "High" ? "bg-red-500/10 text-red-600 border-red-500/20" : priority === "Medium" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : "bg-slate-500/10 text-slate-600 border-slate-500/20"),
		children: priority
	});
}
//#endregion
export { ReviewQueue as component };
