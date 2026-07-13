import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { n as RESORTS } from "./resorts-ClO0P_d2.mjs";
import { t as Card } from "./card-CtX3ithx.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { B as MapPin, J as Lightbulb, Lt as ArrowRight, Mt as Building2, N as PencilLine, Nt as Bot, b as Sparkles, bt as CircleCheck, jt as CalendarDays, l as TriangleAlert, ot as FileText, u as TrendingUp, vt as Circle, x as ShieldCheck } from "../_libs/lucide-react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Checkbox } from "./checkbox-kt6FvQcE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DOBDhOvh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function greeting() {
	const h = (/* @__PURE__ */ new Date()).getHours();
	if (h < 12) return "Good morning";
	if (h < 17) return "Good afternoon";
	return "Good evening";
}
function Dashboard() {
	const [greet, setGreet] = (0, import_react.useState)("Hello");
	(0, import_react.useEffect)(() => setGreet(greeting()), []);
	const totalResorts = RESORTS.length;
	const published = RESORTS.reduce((s, r) => s + r.pagesApproved, 0);
	const drafts = RESORTS.reduce((s, r) => s + Math.round(r.pagesGenerated * .35), 0);
	const pendingApprovals = RESORTS.reduce((s, r) => s + r.pagesPending, 0);
	const opportunities = 38;
	const scheduled = 18;
	const total = published + drafts + pendingApprovals + scheduled;
	const tasks = [
		{
			label: `Approve ${Math.min(18, pendingApprovals)} AI-generated pages`,
			href: "/review-queue"
		},
		{
			label: "Review 7 new nearby attractions",
			href: "/review-queue"
		},
		{
			label: "Update 3 outdated destination guides",
			href: "/review-queue"
		},
		{
			label: "Publish 5 seasonal pages",
			href: "/review-queue"
		}
	];
	const opportunitiesFeed = [
		{
			icon: MapPin,
			tag: "New Attraction",
			title: "Hidden Falls",
			sub: "Near Ooty",
			cta: "Generate Nearby Attraction Page"
		},
		{
			icon: TrendingUp,
			tag: "Trending Topic",
			title: "Weekend Getaway from Chennai",
			sub: "+142% search interest",
			cta: "Generate Landing Page"
		},
		{
			icon: CalendarDays,
			tag: "Festival",
			title: "Pongal Festival",
			sub: "Tamil Nadu · Jan 14",
			cta: "Generate Event Guide"
		},
		{
			icon: TrendingUp,
			tag: "Rising Query",
			title: "Pet-friendly resorts in Coorg",
			sub: "0 pages · high volume",
			cta: "Generate Intent Page"
		}
	];
	const activity = [
		{
			time: "10:12 AM",
			verb: "Generated",
			title: "Hotels Near Ooty Lake"
		},
		{
			time: "09:58 AM",
			verb: "Updated",
			title: "Things To Do In Coorg"
		},
		{
			time: "09:34 AM",
			verb: "Published",
			title: "Family Resort In Munnar"
		},
		{
			time: "09:12 AM",
			verb: "Generated",
			title: "Best Time To Visit Athirappilly"
		},
		{
			time: "08:47 AM",
			verb: "Reviewed",
			title: "Weekend Trip From Bangalore"
		}
	];
	const agents = [
		{
			name: "Discovery",
			status: "ok"
		},
		{
			name: "Generator",
			status: "ok"
		},
		{
			name: "FAQ",
			status: "ok"
		},
		{
			name: "Updater",
			status: "warn"
		},
		{
			name: "QA",
			status: "ok"
		}
	];
	const running = agents.filter((a) => a.status === "ok").length;
	const topResorts = [...RESORTS].sort((a, b) => b.pagesApproved - a.pagesApproved).slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl font-bold tracking-tight",
				children: [greet, ", Sterling."]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1",
				children: "Here's what needs your attention today."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: Building2,
						label: "Resorts",
						value: totalResorts
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: FileText,
						label: "Published Pages",
						value: published,
						accent: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: PencilLine,
						label: "Drafts",
						value: drafts
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: ShieldCheck,
						label: "Pending Approval",
						value: pendingApprovals,
						warn: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: Lightbulb,
						label: "Opportunities",
						value: opportunities
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: Bot,
						label: "AI Health",
						value: `${running}/${agents.length}`,
						health: running === agents.length ? "ok" : "warn"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-lg",
							children: "Today's tasks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "4 items · takes ~35 minutes"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/review-queue",
								children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 ml-1" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: tasks.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: t.href,
							className: "flex items-center gap-3 rounded-lg p-3 -mx-2 hover:bg-accent transition group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, { className: "pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm flex-1",
									children: t.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" })
							]
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-semibold text-lg flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-4 w-4 text-primary" }), " AI opportunity feed"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Discovered in the last 24 hours"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							children: [opportunitiesFeed.length, " new"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: opportunitiesFeed.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-lg border p-3 hover:border-primary/40 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-2 rounded-md bg-primary/10 text-primary shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o.icon, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase tracking-wider text-primary font-semibold",
											children: o.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium text-sm mt-0.5",
											children: o.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: o.sub
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									className: "shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 mr-1" }), " Generate"]
								})
							]
						}, i))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-lg",
							children: "Content status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [total.toLocaleString(), " total items"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1 h-3 rounded-full overflow-hidden bg-muted mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-success",
								style: { width: `${published / total * 100}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-muted-foreground/40",
								style: { width: `${drafts / total * 100}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-warning",
								style: { width: `${pendingApprovals / total * 100}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-primary",
								style: { width: `${scheduled / total * 100}%` }
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, {
								color: "bg-success",
								label: "Published",
								value: published
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, {
								color: "bg-muted-foreground/40",
								label: "Draft",
								value: drafts
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, {
								color: "bg-warning",
								label: "Under Review",
								value: pendingApprovals
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRow, {
								color: "bg-primary",
								label: "Scheduled",
								value: scheduled
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-lg mb-4",
							children: "Recent AI activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: activity.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground w-16 pt-0.5 shrink-0 tabular-nums",
										children: a.time
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary mt-1.5" }), i < activity.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px flex-1 bg-border mt-1" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0 pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: a.verb
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-medium truncate",
											children: a.title
										})]
									})
								]
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-semibold text-lg",
								children: "AI agent status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ai-mode",
								className: "text-xs text-primary hover:underline",
								children: "Manage →"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: agents.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg border p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2.5 w-2.5 rounded-full ${a.status === "ok" ? "bg-success" : "bg-warning"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: a.name
									})]
								}), a.status === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-xs text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Running"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-xs text-warning-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3.5 w-3.5" }), " Degraded"]
								})]
							}, a.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-semibold text-lg",
								children: "Top performing resorts"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/resorts",
								className: "text-xs text-primary hover:underline",
								children: "All →"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: topResorts.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resorts/$slug",
								params: { slug: r.slug },
								className: "flex items-center gap-3 rounded-lg p-2 -mx-2 hover:bg-accent transition",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold text-muted-foreground w-4",
										children: i + 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: r.image,
										alt: "",
										className: "h-9 w-12 rounded object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-medium truncate",
											children: r.shortName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: r.location
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										children: r.pagesApproved
									})
								]
							}, r.slug))
						})]
					})
				]
			})
		]
	});
}
function KPI({ icon: Icon, label, value, accent, warn, health }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `p-2 rounded-lg ${accent ? "bg-primary/10 text-primary" : warn ? "bg-warning/20 text-warning-foreground" : health === "ok" ? "bg-success/15 text-success" : health === "warn" ? "bg-warning/20 text-warning-foreground" : "bg-muted text-muted-foreground"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
				}), health && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: `h-2.5 w-2.5 ${health === "ok" ? "fill-success text-success" : "fill-warning text-warning"}` })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-2xl font-bold",
				children: typeof value === "number" ? value.toLocaleString() : value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground mt-0.5",
				children: label
			})
		]
	});
}
function StatusRow({ color, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-3 w-3 rounded-sm ${color}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm",
					children: label
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-semibold tabular-nums",
				children: value.toLocaleString()
			})
		]
	});
}
//#endregion
export { Dashboard as component };
