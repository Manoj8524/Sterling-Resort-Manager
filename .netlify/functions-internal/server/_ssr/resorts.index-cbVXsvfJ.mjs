import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as RESORTS } from "./resorts-ClO0P_d2.mjs";
import { t as Card } from "./card-CtX3ithx.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { B as MapPin, D as Radar, K as List, Y as LayoutGrid, it as Funnel, lt as ExternalLink, ot as FileText, u as TrendingUp, w as Search } from "../_libs/lucide-react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resorts.index-cbVXsvfJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusStyles = {
	live: "bg-success/15 text-success border-success/30",
	review: "bg-warning/20 text-warning-foreground border-warning/40",
	draft: "bg-muted text-muted-foreground border-border"
};
function ResortCard({ resort }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "group shadow-card overflow-hidden border-border/70 hover:shadow-violet transition-all duration-300 hover:-translate-y-0.5 p-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/resorts/$slug",
			params: { slug: resort.slug },
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[16/10] overflow-hidden bg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: resort.image,
						alt: resort.name,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
						onError: (e) => {
							e.currentTarget.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800";
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 top-0 flex items-start justify-between p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: statusStyles[resort.status],
							variant: "outline",
							children: resort.status
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "bg-white/90 text-foreground backdrop-blur",
							children: resort.category
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-white text-xs opacity-90 flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
								resort.location,
								", ",
								resort.state
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold leading-tight line-clamp-1",
					children: resort.shortName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground line-clamp-2 mt-1",
					children: resort.blurb
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2 pt-2 border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-1 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3 w-3" }), "Pages"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-semibold text-primary",
									children: resort.pagesGenerated
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground",
									children: [resort.pagesApproved, " approved"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-1 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, { className: "h-3 w-3" }), "Signals"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-semibold",
									children: resort.signals
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-muted-foreground",
									children: "active"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-1 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }), "AEO"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-semibold text-primary-glow",
									children: resort.aeoScore
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground",
									children: ["GEO ", resort.geoScore]
								})
							]
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/microsite/$slug",
			params: { slug: resort.slug },
			className: "flex items-center justify-center gap-1 border-t border-border py-2 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground transition",
			children: ["View live microsite ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
		})]
	});
}
function Resorts() {
	const [q, setQ] = (0, import_react.useState)("");
	const [region, setRegion] = (0, import_react.useState)("all");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [view, setView] = (0, import_react.useState)("grid");
	const filtered = (0, import_react.useMemo)(() => {
		return RESORTS.filter((r) => {
			if (region !== "all" && r.region !== region) return false;
			if (category !== "all" && r.category !== category) return false;
			if (status !== "all" && r.status !== status) return false;
			if (q) {
				const s = q.toLowerCase();
				return r.name.toLowerCase().includes(s) || r.location.toLowerCase().includes(s) || r.state.toLowerCase().includes(s);
			}
			return true;
		});
	}, [
		q,
		region,
		category,
		status
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-start justify-between gap-4 flex-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Resorts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm mt-1",
					children: [
						filtered.length,
						" of ",
						RESORTS.length,
						" Sterling properties. Open a resort to edit metadata, generate hyperlocal pages and review agent output."
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 min-w-[220px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Search by name, location, state…",
								value: q,
								onChange: (e) => setQ(e.target.value),
								className: "pl-9"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 text-sm text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: region,
							onValueChange: setRegion,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-[140px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Region" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "all",
									children: "All regions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "North",
									children: "North"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "South",
									children: "South"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "East",
									children: "East"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "West",
									children: "West"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Central",
									children: "Central"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: category,
							onValueChange: setCategory,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-[140px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Category" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "all",
								children: "All categories"
							}), [
								"Hill",
								"Beach",
								"Wildlife",
								"Heritage",
								"Spiritual",
								"Backwater",
								"City",
								"Desert"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: c,
								children: c
							}, c))] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: status,
							onValueChange: setStatus,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-[140px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Status" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "all",
									children: "All status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "live",
									children: "Live"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "review",
									children: "In review"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "draft",
									children: "Draft"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex rounded-md border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: view === "grid" ? "secondary" : "ghost",
								size: "sm",
								onClick: () => setView("grid"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: view === "list" ? "secondary" : "ghost",
								size: "sm",
								onClick: () => setView("list"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" })
							})]
						})
					]
				})
			}),
			view === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: filtered.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResortCard, { resort: r }, r.slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y",
					children: filtered.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `/resorts/${r.slug}`,
						className: "flex items-center gap-4 p-3 hover:bg-accent transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: r.image,
								alt: "",
								className: "h-14 w-20 rounded object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium truncate",
									children: r.shortName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [
										r.location,
										", ",
										r.state
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								children: r.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground w-20 text-right",
								children: [r.pagesGenerated, " pages"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-16 text-right text-sm font-semibold text-primary",
								children: ["AEO ", r.aeoScore]
							})
						]
					}, r.slug))
				})
			})
		]
	});
}
//#endregion
export { Resorts as component };
