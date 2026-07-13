import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as RESORTS } from "./resorts-ClO0P_d2.mjs";
import { t as Card } from "./card-BfBj_YIE.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { Dt as ChartColumn, It as ArrowUpRight, L as MousePointerClick, Q as IndianRupee, b as Sparkles, ct as Eye, u as TrendingUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-t2RrW1Rl.js
var import_jsx_runtime = require_jsx_runtime();
function Analytics() {
	const spark = Array.from({ length: 24 }, (_, i) => 30 + Math.round(Math.sin(i / 3) * 20 + Math.random() * 15));
	const maxSpark = Math.max(...spark);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4" }), " Analytics"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold mt-1",
						children: "Performance & business impact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1",
						children: "Content performance, AI visibility and downstream revenue attribution."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "text-xs",
					children: "Last 30 days"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: Eye,
						label: "Impressions",
						value: "4.82M",
						delta: "+24%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: MousePointerClick,
						label: "Clicks",
						value: "184K",
						delta: "+31%",
						accent: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: Sparkles,
						label: "AI citations",
						value: "2,847",
						delta: "+58%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KPI, {
						icon: IndianRupee,
						label: "Attributed revenue",
						value: "₹1.42Cr",
						delta: "+19%"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-semibold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-primary" }), " Traffic trend"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), " Organic"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary-glow" }), " AI referral"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end gap-1 h-40",
							children: spark.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col gap-0.5 justify-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-primary-glow rounded-t",
									style: { height: `${v * .35 / maxSpark * 100}%` }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-primary rounded-t",
									style: { height: `${v / maxSpark * 100}%` }
								})]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs text-muted-foreground mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4 weeks ago" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Today" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-4",
						children: "Top performing pages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							{
								title: "Weekend Getaway near Munnar",
								views: "48.2K"
							},
							{
								title: "Family Stay near Chinnakanal Lake",
								views: "31.7K"
							},
							{
								title: "Athirappilly Falls FAQ",
								views: "27.4K"
							},
							{
								title: "Ooty Toy Train Guide",
								views: "22.9K"
							},
							{
								title: "Corbett Safari Timings",
								views: "19.3K"
							}
						].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground w-4",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 min-w-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium truncate",
										children: p.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: p.views
								})
							]
						}, i))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-4",
						children: "AI visibility by platform"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							{
								name: "ChatGPT",
								value: 44,
								cites: 1247
							},
							{
								name: "Perplexity",
								value: 31,
								cites: 892
							},
							{
								name: "Google AI Overview",
								value: 18,
								cites: 512
							},
							{
								name: "Gemini",
								value: 7,
								cites: 196
							}
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [p.cites.toLocaleString(), " citations"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: p.value,
							className: "h-2"
						})] }, p.name))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold mb-4",
						children: "Revenue by resort (top 5)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [...RESORTS].sort((a, b) => b.pagesGenerated - a.pagesGenerated).slice(0, 5).map((r) => {
							const rev = Math.round(r.pagesGenerated * 12.4);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: r.image,
										alt: "",
										className: "h-9 w-9 rounded object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-medium truncate",
											children: r.shortName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												r.pagesGenerated,
												" pages · ",
												r.signals,
												" signals"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm font-semibold",
											children: [
												"₹",
												rev.toLocaleString(),
												"K"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-success flex items-center gap-0.5 justify-end",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" }),
												" ",
												8 + r.aeoScore % 20,
												"%"
											]
										})]
									})
								]
							}, r.slug);
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold mb-4",
							children: "Traffic by source"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									src: "Google Organic",
									pct: 42,
									sessions: "312K"
								},
								{
									src: "ChatGPT referral",
									pct: 21,
									sessions: "156K"
								},
								{
									src: "Perplexity referral",
									pct: 14,
									sessions: "104K"
								},
								{
									src: "Direct",
									pct: 12,
									sessions: "89K"
								},
								{
									src: "Social",
									pct: 7,
									sessions: "52K"
								},
								{
									src: "Other",
									pct: 4,
									sessions: "31K"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.src }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: s.sessions
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: s.pct,
								className: "h-1.5"
							})] }, s.src))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold mb-4",
							children: "Conversion funnel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									stage: "Impressions",
									value: 482e4,
									pct: 100
								},
								{
									stage: "Clicks",
									value: 184e3,
									pct: 38
								},
								{
									stage: "Enquiries",
									value: 12400,
									pct: 6.7
								},
								{
									stage: "Bookings",
									value: 3820,
									pct: 2.1
								},
								{
									stage: "Stays completed",
									value: 3241,
									pct: 1.8
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: s.stage
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: s.value.toLocaleString()
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 bg-muted rounded-full overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-gradient-to-r from-primary to-primary-glow",
									style: { width: `${s.pct}%` }
								})
							})] }, s.stage))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold mb-4",
							children: "Content health"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									metric: "Indexed pages",
									value: "1,842",
									delta: "+124"
								},
								{
									metric: "Pages with FAQ schema",
									value: "78%",
									delta: "+6%"
								},
								{
									metric: "Avg. time on page",
									value: "3m 24s",
									delta: "+18s"
								},
								{
									metric: "Bounce rate",
									value: "42.1%",
									delta: "-3.4%"
								},
								{
									metric: "Core Web Vitals pass",
									value: "94%",
									delta: "+2%"
								}
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: m.metric
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: m.value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "text-success text-[10px]",
										children: m.delta
									})]
								})]
							}, m.metric))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold mb-4",
					children: "Top AI-cited queries (last 30 days)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y",
					children: [
						{
							q: "best resorts in Munnar for families",
							engine: "ChatGPT",
							cites: 184,
							ctr: "8.2%"
						},
						{
							q: "Alleppey houseboat vs resort comparison",
							engine: "Perplexity",
							cites: 152,
							ctr: "11.4%"
						},
						{
							q: "monsoon holiday under ₹10,000",
							engine: "Google AIO",
							cites: 128,
							ctr: "6.7%"
						},
						{
							q: "pet friendly resort near Bangalore",
							engine: "ChatGPT",
							cites: 96,
							ctr: "9.1%"
						},
						{
							q: "weekend getaway from Chennai",
							engine: "Perplexity",
							cites: 84,
							ctr: "7.8%"
						},
						{
							q: "Corbett jungle safari best time",
							engine: "Gemini",
							cites: 62,
							ctr: "5.4%"
						}
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 min-w-0 truncate font-medium",
								children: r.q
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-xs",
								children: r.engine
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-muted-foreground text-xs w-20 text-right",
								children: [r.cites, " cites"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-success font-semibold w-16 text-right",
								children: r.ctr
							})
						]
					}, r.q))
				})]
			})
		]
	});
}
function KPI({ icon: Icon, label, value, delta, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-wide text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mt-1 text-3xl font-bold ${accent ? "text-primary" : ""}`,
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-success flex items-center gap-0.5 mt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" }),
						" ",
						delta,
						" vs prev"
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `p-2 rounded-lg ${accent ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			})]
		})
	});
}
//#endregion
export { Analytics as component };
